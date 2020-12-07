const express = require("express");
const session = require("express-session");
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

app.get("/", (req, res) => {
  if (req.session.authenticated) {
    res.send({ status: 200, session: req.session, id: req.sessionID });
  } else {
    req.session.authenticated = {
      username: "hello",
    };
    res.send({ status: 200, session: req.session, id: req.sessionID });
  }
  res.send(200);
});

app.listen(PORT, () => console.log(`Listening to request on port ${PORT}`));
