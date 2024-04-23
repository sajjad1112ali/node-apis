const express = require('express');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const swaggerUi = require('swagger-ui-express');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const routesV1 = require('./routes/v1');
const pagesRoutes = require('./routes/v1/pages');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');

const swaggerDocument = require('./swagger');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use((req, res, next) => {
  if (req.originalUrl === '/v2/stripe/webhook') {
    next();
  } else {
    express.json()(req, res, next);
  }
});
app.use(express.static(`${__dirname}/public`));

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(mongoSanitize());

// gzip compression
app.use(compression());

const corsOptions = {
  exposedHeaders: 'x-auth-token',
};
// enable cors
app.use(cors(corsOptions));
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// v1 api routes
app.use('/v1', routesV1);
app.use('/', pagesRoutes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
