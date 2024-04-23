const express = require('express');
const pagesRoute = require('./pages.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/pages/users',
    route: pagesRoute,
  },
  {
    path: '/pages/blog-users',
    route: pagesRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
