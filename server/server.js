const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const authRouter = require("./routes/authRouter");
const listingRouter = require('./routes/listingRouter');
const imageRouter = require('./routes/imageRouter');
const cartRouter = require('./routes/cartRouter');

app.use('/', express.static(path.join(__dirname, '../dist')));

app.use("/listing", listingRouter);
app.use("/image", imageRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);


app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
