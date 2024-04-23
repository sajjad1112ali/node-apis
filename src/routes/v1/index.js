const express = require('express');
const userRoute = require('./user.route');
const blogRoute = require('./blog.route');
const quotesRoute = require('./quotes.route');
const petsRoute = require('./pets.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/blog-users',
    route: userRoute,
  },
  {
    path: '/blogs',
    route: blogRoute,
  },
  {
    path: '/quotes',
    route: quotesRoute,
  },
  {
    path: '/pet-bazzar-users',
    route: userRoute,
  },
  {
    path: '/pets',
    route: petsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
