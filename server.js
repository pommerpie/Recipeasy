const path = require('path');
const routes = require('./routes')
// Importing express
const express = require('express');
// Importing sessions from express
const session = require('express-session');
// Storage in db for session data
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Importing handlebars from express
const exphbs = require('express-handlebars');
// Init connection for sequelize
const sequelize = require('./config/connection');
// initial route for fetch requests pertaining to api data
const api = require('./routes/index');
// Init express
const app = express();
// Defining port for heroku
const PORT = process.env.PORT || 3001;

// Setting up sessions
const sess = {
  secret: 'asoiderv9i298g',
  cookie: {
    maxAge: 864000 * 15, // Session expires after 15 days
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  })
};

app.use(session(sess));

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create();

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for user input and public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Difering to api route when url is hit
app.use(routes);

// Syncing database and spinning up server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});