import { red, blue, green } from "constants/colors";

const selectColor = (currentColor: string) => {
  if (currentColor === red || currentColor === "red") {
    return blue;
  }

  if (currentColor === green || currentColor === "green") {
    return red;
  }

  if (currentColor === blue || currentColor === "blue") {
    return green;
  }

  return "#000000";
};

export default selectColor;
