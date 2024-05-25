import { concatenations } from "./concatenations.js";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
  button.addEventListener("click", () => {
    concatenations(input.value, "hello!");
  });
}
//# sourceMappingURL=index.js.map
