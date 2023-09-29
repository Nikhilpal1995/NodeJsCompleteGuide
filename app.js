const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contactus')

const errorController = require('./conrollers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);

app.use(errorController.errorControl);

app.listen(3000);
