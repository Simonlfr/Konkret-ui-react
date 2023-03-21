import { generateColorPalette } from "./generateColorPalette";
import { generateDesignTokens } from "./generateDesignTokens";

const colorRange = [-80, -60, -40, -20, 0, 20, 40, 60, 80, 90, 95, 100];
const colorPalette = generateColorPalette(
  "#4e4bfb",
  "#3E737B",
  "#D7335C",
  "#5D7398",
  colorRange
);

export const defaultDesignTokens = generateDesignTokens(colorPalette);
