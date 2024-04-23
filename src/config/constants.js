module.exports = {
  EMAIL: {
    EMAIL_TEMPLATES: {
      WELCOME_KEY: 'WELCOME',
      RESET_PASSWORD_KEY: 'RESET_PASSWORD',
      WELCOME: {
        SUBJECT: 'Welcome to Quotes',
        APP_LABEL: 'Quotes',
        FILE_NAME: 'welcome.html',
      },
      WELCOME_BLOG_BUSTER: {
        SUBJECT: 'Welcome to BlogBuster',
        APP_LABEL: 'Blog Buster',
        FILE_NAME: 'welcome.html',
      },
      WELCOME_PETBAZZAR: {
        SUBJECT: 'Welcome to PetBazzar',
        APP_LABEL: 'Petbazzar',
        FILE_NAME: 'welcome.html',
      },
      RESET_PASSWORD: {
        SUBJECT: 'Forgot Password',
        FILE_NAME: 'forgot-password.html',
      },
    },
  },
  TOKEN_TYPES: {
    ACCESS: 'access',
    REFRESH: 'refresh',
    RESET_PASSWORD: 'resetPassword',
    VERIFY_EMAIL: 'verifyEmail',
  },
  APPS: {
    BLOGBUSTER: 'blog_buster',
    QUOTES: 'quotes',
  },
  USER_ROUTE_URL: {
    QUOTES: 'users',
    BLOGBUSTER: 'blog-users',
    PETBAZZAR: 'pet-bazzar-users',
  },
  PETS: {
    dogs: 1,
    cats: 2,
    birds: 3,
  },
};
