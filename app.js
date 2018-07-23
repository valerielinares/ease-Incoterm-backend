require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
//const favicon      = require('serve-favicon');
//const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);

const passportSetup = require("./passport/setup.js");


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/ease-incoterm-backend', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Express View engine setup
// app.use(require('node-sass-middleware')({
//   src:  path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   sourceMap: true
// }));
   
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
//app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
//app.locals.title = 'Express - Generated with IronGenerator';

// const index = require('./routes/index');
// app.use('/', index);

// allow Cross-Origin resource Sharing (API requests from other domains)
app.use(cors( {
  // allow receive cookis from other domains
  credentials: true,
  // these are the domains I want cookis from
  origin: ["http://localhost:4200"]
}));

//session setup should come after the CORS setup
app.use(session({
  secret: "blah blah blah",
  saveUninitialized: true,
  resave: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

//passport setup to come AFTER SESSION setp
passportSetup(app);

// déclarer les routes vers l'api
const iccRouter = require("./routes/icc-router.js");
app.use("/api", iccRouter);

const requestRouter = require("./routes/request-router.js");
app.use("/api", requestRouter);

const authRouter = require("./routes/auth-router.js");
app.use("/api", authRouter);


module.exports = app;
