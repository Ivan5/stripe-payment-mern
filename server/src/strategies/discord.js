const passport = require("passport");
const { Strategy } = require("passport-discord");

passport.use(
  new Strategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      scope: [],
    },
    (accessToken, refreshToken, profile, done) => {}
  )
);
