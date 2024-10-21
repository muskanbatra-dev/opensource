const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateSum(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum = i + sum;
  }
  return sum;
}
app.post("/handleSum", (req, res) => {
  console.log(req.body);
  var counter = req.body.num;
  var calculatedSum = calculateSum(counter);

  var ans = "the sum is " + calculatedSum;
  res.send(ans);
});
app.listen(port, (req, res) => {
  console.log("app is listening on port 3000");
});
