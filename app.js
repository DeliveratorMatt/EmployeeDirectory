import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees/random").get((req, res) => {
  const randIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randIndex]);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const idNum = +id;
  const employee = employees[idNum - 1];

  if (!employee) {
    return res.status(404).send("No employee with that ID.");
  }

  res.send(employee);
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});
