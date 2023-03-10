import _ from "lodash";
import "./style.scss";
import icon from "./icon.png";
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack", "!"], " ");
  btn.innerHTML = "Click me and check the console!";
  element.classList.add("hello");
  element.appendChild(btn);
  const myIcon = new Image();
  myIcon.src = icon;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
