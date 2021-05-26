/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "my money"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch"
  ];

  var random = Math.floor(Math.random() * 4);
  console.log(
    who[random] +
      " " +
      action[random] +
      " " +
      what[random] +
      " " +
      when[random] +
      " "
  );
  let parrafo = document.getElementById("excuse");
  parrafo.innerHTML =
    who[random] +
    " " +
    action[random] +
    " " +
    what[random] +
    " " +
    when[random] +
    " ";
};
