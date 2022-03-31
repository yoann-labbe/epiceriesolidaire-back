const express = require("express");
const cors = require ("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin:["http://localhost:3000", "http://localhost:3001"]}));
//require("./routes")(app);

const port = 3030;

app.listen(port, () => {
  console.log(`Server is listening port ${port}`);
});