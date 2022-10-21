import { red, blue, green } from "constants/colors";

const selectColor = (currentColor: string) => {
  if (currentColor === red || currentColor === "red") {
    return green;
  }

  if (currentColor === green || currentColor === "green") {
    return blue;
  }

  if (currentColor === blue || currentColor === "blue") {
    return red;
  }

  return "#000000";
};

export default selectColor;
