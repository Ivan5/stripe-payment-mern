require("dotenv").config();
require("./strategies/discord");
const express = require("express");
const session = require("express-session");
const SessionStore = require("connect-mongo");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const passport = require("passport");
const app = express();

const MongoStore = SessionStore(session);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Registering Session Middleware
app.use(
  session({
    cookie: {
      maxAge: 3600000 * 24,
    },
    saveUninitialized: false,
    resave: false,
    secret: "basjhdbasjhasdbasjdbasduh",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening to request on port ${PORT}`));
