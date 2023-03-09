import _ from "lodash";
import "./style.scss";
import Icon from "./icon.png";
import printMe from "./print.js";
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack", "!"], " ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.classList.add("hello");
  element.appendChild(btn);
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
