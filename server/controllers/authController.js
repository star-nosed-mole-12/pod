const pool = require("../db/models");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 12;

const authController = {};

authController.createUser = async (req, res, next) => {
  const {
    address,
    city,
    email,
    first_name,
    last_name,
    phone,
    pw,
    state,
    username,
    zip,
  } = req.body;

  // what are the required fields here? // what do we need to error test for

  const client = await pool.connect()
    .catch(err => next({
      log: `authController - pool connection failed; ERROR: ${err}`,
      message: {
        err: "Error in authController.createUser. Check server logs",
      },
    }));
  try {
    const createUserQuery = `INSERT INTO users(address, city, email, first_name, last_name, phone, pw, state, username, zip) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
    bcrypt.hash(pw, SALT_WORK_FACTOR, (err, hash) => {
      if (err) return next({
        log: `authController - bcrypt error ERROR: ${err}`,
        message: {
          err: 'Error in authController.createUser. Check server logs'
        }
      });
      client.query(createUserQuery, [
        address,
        city,
        email,
        first_name,
        last_name,
        phone,
        hash,
        state,
        username,
        zip,
      ]);
    });
  } catch (err) {
    return next({
      log: `authController.createUser - querying listings from db ERROR: ${err}`,
      message: {
        err: "Error in authController.createUser. Check server logs",
      },
    });
  } finally {
    client.release();
    return next();
  }
};

authController.verifyUser = async (req, res, next) => {
  const client = await pool.connect()
    .catch((err) => next({
      log: `authController - pool connection failed; ERROR: ${err}`,
      message: {
        err: "Error in authController.createUser. Check server logs",
      },
    }));
  try {
    const { username, pw } = req.body;
    if (!username || !pw) return res.redirect('/login/?Error=missing_info');
    const userQuery = `SELECT username, pw FROM users WHERE username = $1`;
    const response = await client.query(userQuery, [ username ]);
    const pwMatch = await bcrypt.compare(pw, response.rows[0].pw);
    if (!pwMatch) res.status(401).send('Login failed, incorrect username or password');
    else {
      client.release();
      return next();
    }
  } catch (e) {
    return next({
      log: `authController.createUser - querying listings from db ERROR: ${err}`,
      message: {
        err: "Error in authController.createUser. Check server logs",
      },
    });
  }
};

module.exports = authController;
