const express = require("express");
const session = require("express-session");
const routes = require("./routes/index");
const app = express();

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
  })
);

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening to request on port ${PORT}`));
