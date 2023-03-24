import React from "react";
import { ThemeProvider } from "styled-components";
import {
  DesignTokenType,
  generateDesignTokens,
  ShadowsType,
  StateModifiersType,
} from "../utils/generateDesignTokens";
import { ColorProvider, useColorPalette } from "./colorPaletteProvider";
import baseStyled, { ThemedStyledInterface } from "styled-components";
import { defaultDesignTokens } from "../utils/defaultDesignTokens";
import { ColorPaletteType } from "../utils/generateColorPalette";

export const styled = baseStyled as ThemedStyledInterface<DesignTokenType>;

export type RefColors = {
  primary: string;
  secondary: string;
  error: string;
  neutral: string;
};

export const defaultColorRange: number[] = [
  -80, -60, -40, -20, 0, 20, 40, 60, 80, 90, 95, 100,
];

export const DesignTokenProvider = ({
  children,
  refColors,
}: {
  children: React.ReactNode;
  refColors: RefColors;
}) => {
  return (
    <ColorProvider refColors={refColors} colorRange={defaultColorRange}>
      <Theme>{children}</Theme>
    </ColorProvider>
  );
};

const Theme = ({ children }: { children: React.ReactNode }) => {
  const colorPalette = useColorPalette();

  const theme: DesignTokenType = generateDesignTokens(colorPalette);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export function getTokenPaletteValue<
  T extends keyof ColorPaletteType,
  U extends keyof ColorPaletteType[T]
>(
  theme: DesignTokenType,
  paletteGroup: T,
  paletteKey: U
): ColorPaletteType[T][U] {
  return theme.palette &&
    theme.palette[paletteGroup] &&
    theme.palette[paletteGroup][paletteKey]
    ? theme.palette[paletteGroup][paletteKey]
    : defaultDesignTokens.palette[paletteGroup][paletteKey];
}

export function getTokenShadowValue<T extends keyof ShadowsType>(
  theme: DesignTokenType,
  shadowKey: T
): ShadowsType[T] {
  return theme.shadows && theme.shadows[shadowKey]
    ? theme.shadows[shadowKey]
    : defaultDesignTokens.shadows[shadowKey];
}

export function getTokenStateModifierValue<T extends keyof StateModifiersType>(
  theme: DesignTokenType,
  stateModifierKey: T
): StateModifiersType[T] {
  return theme.stateModifiers && theme.stateModifiers[stateModifierKey]
    ? theme.stateModifiers[stateModifierKey]
    : defaultDesignTokens.stateModifiers[stateModifierKey];
}
