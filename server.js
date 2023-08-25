const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const userRoutes = require('./routes/userRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const endUserRoutes = require('./routes/endUserRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/chatbots', chatbotRoutes);
app.use('/conversations', conversationRoutes);
app.use('/endusers', endUserRoutes);

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
