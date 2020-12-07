const passport = require("passport");
const { Strategy } = require("passport-discord");

console.log(process.env.DISCORD_CLIENT_ID);
passport.use(
  new Strategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      scope: ["email", "identify"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);
