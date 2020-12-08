const passport = require("passport");
const { Strategy } = require("passport-discord");
const User = require("../database/models/User");

passport.serializeUser( (user,done)  => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  console.log(id)
  try {
    const userDB = await User.findOne({ id })
    return userDB ? done(null, userDB) : done(null,null)
  } catch (error) {
    console.log(error)
    done(error, null)
  }
})

passport.use(
  new Strategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      scope: ["email", "identify"],
    },
    (accessToken, refreshToken, profile, done) => {
      const { email, id } = profile;
      try {
        const userDB = await User.findOne({discordId: id })
        if (!userDB) {
          console.log('User was not found. Creating...')
          const newUser = await User.create({
            id,
            email
          })
          return done(null,newUser)
        }
        return done(null, userDB)
      } catch (error) {
        return done(err, nll)
      }
    }
  )
);
