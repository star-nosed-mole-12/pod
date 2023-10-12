const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("../db/models");

// username, password must be called exactly this
const verifyCallBack = async (username, password, done) => {
  const client = await pool.connect().catch((err) =>
    next({
      log: `authController - pool connection failed; ERROR: ${err}`,
      message: {
        err: "Error in authController.createUser. Check server logs",
      },
    })
  );
  try {
    const userQuery = `SELECT username, pw FROM users WHERE username= ? AND pw= ?`;
    const result = await client.query(userQuery, [username, password]);
  } catch (e) {
  } finally {
    client.release();
    return next();
  }
};

const strategy = new LocalStrategy();
