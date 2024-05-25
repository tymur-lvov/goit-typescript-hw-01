import { concatenations } from "./concatenations";

const button = document.querySelector("button");
const input = document.querySelector("input");

if (button && input) {
  button.addEventListener("click", () => {
    concatenations(input.value, "hello!");
  });
}
