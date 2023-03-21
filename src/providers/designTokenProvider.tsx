import React from "react";
import { ThemeProvider } from "styled-components";
import {
  DesignTokenType,
  generateDesignTokens,
} from "../utils/generateDesignTokens";
import { ColorProvider, useColorPalette } from "./colorPaletteProvider";
import baseStyled, { ThemedStyledInterface } from "styled-components";

export const styled = baseStyled as ThemedStyledInterface<DesignTokenType>;

export type RefColors = {
  primary: string;
  secondary: string;
  error: string;
  neutral: string;
};

export const DesignTokenProvider = ({
  children,
  refColors,
}: {
  children: React.ReactNode;
  refColors: RefColors;
}) => {
  return (
    <ColorProvider
      refColors={refColors}
      colorRange={[-80, -60, -40, -20, 0, 20, 40, 60, 80, 90, 95, 100]}
    >
      <Theme>{children}</Theme>
    </ColorProvider>
  );
};

const Theme = ({ children }: { children: React.ReactNode }) => {
  const colorPalette = useColorPalette();

  const theme: DesignTokenType = generateDesignTokens(colorPalette);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
