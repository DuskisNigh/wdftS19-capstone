const express = require("express");
const cors = require("cors");
const app = express();
const QuizQuestions = require("./data/data");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const getQuizQuestions = (req, res) => {
   res.json(QuizQuestions);
};

app.route("/data")
   .get(getQuizQuestions);

app.listen(8080, function() {
   console.log("server ready");
});
