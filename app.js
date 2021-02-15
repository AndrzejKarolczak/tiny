const express = require('express');
const path = require('path');

const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/javascript')));

const indexRouter = require('./routes/index');
const zadanie1Router = require('./routes/zadanie1');
const zadanie2Router = require('./routes/zadanie2');
const zadanie3Router = require('./routes/zadanie3');
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/zadanie1', zadanie1Router);
app.use('/zadanie2', zadanie2Router);
app.use('/zadanie3', zadanie3Router);

//auto-generated
app.use((req, res, next) => {
  next(createError(404));
});

//auto-generated
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);
module.exports = app;
// module.exports = funcs;
