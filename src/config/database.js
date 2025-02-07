require("dotenv").config();

module.exports = {
  dialect: process.env.DB_DIALECT || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || "devburger",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "@dmin!Dk",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
};
