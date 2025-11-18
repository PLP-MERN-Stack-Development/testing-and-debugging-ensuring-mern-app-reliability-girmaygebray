// server/tests/setup.js
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

module.exports = async () => {
  const mongoServer = await MongoMemoryServer.create();
  global.__MONGO_URI__ = mongoServer.getUri();
  global.__MONGO_SERVER__ = mongoServer;
  await mongoose.connect(global.__MONGO_URI__);
};