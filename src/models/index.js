const { Sequelize, Op } = require('sequelize');
// required New Models

const config = require('../config/config');
const logger = require('../config/logger');

const userModel = require('./user.model');
const tokenModel = require('./token.model');
const blogModel = require('./blog.model');
const blogCommentModel = require('./blogComment.model');
const quoteModel = require('./quote.model');
const likeQuoteModel = require('./likeQuote.model');
const favouriteQuoteModel = require('./favouriteQuote.model');
const blogUserModel = require('./blogUser.model');

/** **************************************************** */
// PET BAZZAR TABLES
/** **************************************************** */

const petBazzarUserModel = require('./petBazzarUser.model');
const speciesModel = require('./species.model');
const breedModel = require('./breed.model');
const petModel = require('./pet.model');
const petImageModel = require('./petImage.model');
const petOfferModel = require('./petOffer.model');

// SEEDERS
const {
  userSeeder,
  quoteSeeder,
  blogSeeder,
  blogUser,
  speciesSeeder,
  breedsSeeder,
  petSeeder,
  petImagesSeeder,
} = require('../seeders');

// userSeeder
// Database Connection
const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  host: config.db.host,
  port: config.db.port,
  dialect: config.db.dialect,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Authentication
(async () => {
  await sequelize.authenticate();
  logger.info('Connected to Database');
})();

// Model Load
const User = userModel(sequelize, Sequelize);
const BlogUser = blogUserModel(sequelize, Sequelize);
const Token = tokenModel(sequelize, Sequelize);
const Blog = blogModel(sequelize, Sequelize, User);
const BlogComment = blogCommentModel(sequelize, Sequelize, User, Blog);
const Quote = quoteModel(sequelize, Sequelize, User);
const LikeQuote = likeQuoteModel(sequelize, Sequelize, User, Quote);
const favouriteQuote = favouriteQuoteModel(sequelize, Sequelize, User, Quote);
// PetBazzar
const petBazzarUser = petBazzarUserModel(sequelize, Sequelize);
const Species = speciesModel(sequelize, Sequelize);
const Breed = breedModel(sequelize, Sequelize);
const Pet = petModel(sequelize, Sequelize, petBazzarUser, Species, Breed);
const PetImage = petImageModel(sequelize, Sequelize, Pet);
const PetOffer = petOfferModel(sequelize, Sequelize, petBazzarUser, Pet);

// Defining relations
// User.hasMany(Token, { foreignKey: 'user_id' });
// Token.belongsTo(User, { foreignKey: 'user_id' });
BlogUser.hasMany(Blog, { as: 'user', foreignKey: 'user_id' });
Blog.belongsTo(BlogUser, { as: 'user', foreignKey: 'user_id' });

BlogUser.hasMany(BlogComment, { foreignKey: 'user_id' });
Blog.hasMany(BlogComment, { foreignKey: 'blog_id' });

BlogComment.belongsTo(BlogUser, { as: 'user', foreignKey: 'user_id' });
BlogComment.belongsTo(Blog, { foreignKey: 'blog_id' });

User.hasMany(Quote, { foreignKey: 'user_id' });
Quote.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(LikeQuote, { foreignKey: 'user_id' });
LikeQuote.belongsTo(User, { foreignKey: 'user_id' });

Quote.hasMany(LikeQuote, { foreignKey: 'quote_id' });
LikeQuote.belongsTo(Quote, { foreignKey: 'quote_id' });

User.hasMany(favouriteQuote, { foreignKey: 'user_id' });
favouriteQuote.belongsTo(User, { foreignKey: 'user_id' });

Quote.hasMany(favouriteQuote, { foreignKey: 'quote_id' });
favouriteQuote.belongsTo(Quote, { foreignKey: 'quote_id' });

/** **************************************************** */
// PET BAZZAR TABLES
/** **************************************************** */

Species.hasMany(Breed, { foreignKey: 'species_id' });
Breed.belongsTo(Species, { foreignKey: 'species_id' });

petBazzarUser.hasMany(Pet, { as: 'petbazzar_user', foreignKey: 'user_id' });
Pet.belongsTo(petBazzarUser, { foreignKey: 'species_id' });

Species.hasMany(Pet, { foreignKey: 'species_id' });
Pet.belongsTo(Species, { foreignKey: 'species_id' });
Breed.hasMany(Pet, { foreignKey: 'species_id' });
Pet.belongsTo(Breed, { foreignKey: 'species_id' });

Pet.hasMany(PetImage, { foreignKey: 'pet_id' });
PetImage.belongsTo(Pet, { foreignKey: 'pet_id' });

Pet.hasMany(PetOffer, { foreignKey: 'pet_id' });
PetOffer.belongsTo(Pet, { foreignKey: 'pet_id' });

petBazzarUser.hasMany(PetOffer, { as: 'offered_by', foreignKey: 'user_id' });
PetOffer.belongsTo(petBazzarUser, { foreignKey: 'user_id' });

sequelize.sync({ alter: true }).then(async () => {
  await Promise.all([
    userSeeder.up(User),
    quoteSeeder.up(Quote),
    blogSeeder.up(Blog),
    blogUser.up(BlogUser),
    // PetBazzar
    blogUser.up(petBazzarUser),
    speciesSeeder.up(Species),
    breedsSeeder.up(Breed, 'dogs'),
    breedsSeeder.up(Breed, 'cats'),
    breedsSeeder.up(Breed, 'birds'),
    petSeeder.up(Pet, 'dogs'),
    petSeeder.up(Pet, 'cats'),
    petSeeder.up(Pet, 'birds'),
    petImagesSeeder.up(PetImage),
  ]);
  logger.info('DB syncing completed');
});

module.exports = {
  sequelize,
  Op,
  User,
  Token,
  Blog,
  BlogComment,
  Quote,
  LikeQuote,
  favouriteQuote,
  BlogUser,
  // PetBazzar
  petBazzarUser,
  Species,
  Breed,
  Pet,
  PetImage,
  PetOffer,
};
