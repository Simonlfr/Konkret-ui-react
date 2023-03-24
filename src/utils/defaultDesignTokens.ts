import {
  defaultColorRange,
  generateColorPalette,
} from "./generateColorPalette";
import { generateDesignTokens } from "./generateDesignTokens";

const colorPalette = generateColorPalette(
  "#4e4bfb",
  "#3E737B",
  "#D7335C",
  "#5D7398",
  defaultColorRange
);

export const defaultDesignTokens = generateDesignTokens(colorPalette);
