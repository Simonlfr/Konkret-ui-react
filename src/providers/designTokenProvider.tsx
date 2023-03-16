import { ThemeProvider } from "styled-components";
import {
  DesignTokenType,
  generateDesignTokens,
} from "../utils/generateDesignTokens";
import { ColorPaletteType } from "./colorProvider";

export const DesignTokenProvider = ({
  children,
  colorPalette,
}: {
  children: React.ReactNode;
  colorPalette: ColorPaletteType;
}) => {
  const theme: DesignTokenType = generateDesignTokens(colorPalette);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
