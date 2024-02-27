// routes.js

import { passport, tokenset } from './server.js';
import express from 'express';

const router = express.Router();

const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

export const setRoutes = (router) => {
  router.get('/auth/callback', (req, res, next) => {
    passport.authenticate('oidc', {
      successRedirect: '/home',
      failureRedirect: '/',
    })(req, res, next);
  });

  router.get('/', (req, res, next) => {
    res.render('index', {});
  });

  router.get('/auth', (req, res, next) => {
    passport.authenticate('oidc')(req, res, next);
  });

  router.get('/home', checkAuthenticated, (req, res, next) => {
    res.render('home', {
      username: `${req.user.given_name} ${req.user.family_name}`,
    });
  });

  router.get('/logout', (req, res, next) => {
    req.logout();
    const retUrl = `${process.env.SSO_AUTH_SERVER_URL}/realms/${
      process.env.SSO_REALM
    }/protocol/openid-connect/logout?post_logout_redirect_uri=${encodeURIComponent(
      process.env.SSO_LOGOUT_REDIRECT_URI,
    )}&id_token_hint=${tokenset.id_token}`;
    res.redirect(retUrl);
  });

  // Error handling middleware
  router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
};

export default router;
