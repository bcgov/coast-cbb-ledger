import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Issuer, Strategy } from "openid-client";
import dotenv from "dotenv";

// Import your routes
import records from "./routes/record.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SSO_SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000,
  },
}));

// Use your routes
app.use("/record", records);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Discover the Keycloak issuer
const keycloakIssuer = await Issuer.discover(
  `${process.env.SSO_AUTH_SERVER_URL}/realms/${process.env.SSO_REALM}/.well-known/openid-configuration`
);

// Create a Keycloak client
const keycloakClient = new keycloakIssuer.Client({
  client_id: process.env.SSO_CLIENT_ID,
  client_secret: process.env.SSO_CLIENT_SECRET,
  redirect_uris: ["http://localhost:3000/auth/callback"],
  response_types: ["code"],
});

// Passport Strategy
passport.use(
  "oidc",
  new Strategy({ client: keycloakClient }, (tokenSet, userinfo, done) => {
    return done(null, tokenSet.claims());
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/auth", passport.authenticate("oidc"));

app.get(
  "/auth/callback",
  passport.authenticate("oidc", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/home");
  }
);

app.get("/home", (req, res) => {
  res.render("home", { username: req.user.preferred_username });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Error handling
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
