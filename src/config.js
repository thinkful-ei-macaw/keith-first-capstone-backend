const { PORT, NODE_ENV, DATABASE_URL, TEST_DATABASE_URL, JWT_SECRET } = process.env;

module.exports = {
  PORT: PORT || 8000,
  NODE_ENV,
  DATABASE_URL,
  TEST_DATABASE_URL,
  JWT_SECRET
};

// don't need jwt_secret yet, but I plan to use it in the future