import React from "react";
import {
  ColorShade,
  generateColorPalette,
} from "../utils/generateColorPalette";

interface ColorPalette {
  [key: string]: string;
}

type colorPalette = {
  primary: ColorPalette;
  secondary: ColorPalette;
  error: ColorPalette;
  neutral: ColorPalette;
};

function convertArrayToObject(colors: ColorShade[]): { [key: string]: string } {
  const colorObject: { [key: string]: string } = {};
  for (const color of colors) {
    colorObject[color.shade] = color.color;
  }
  return colorObject;
}

const colorRange = [-80, -60, -40, -20, 0, 20, 40, 60, 80, 90, 95, 100];
const colorPrimary = convertArrayToObject(
  generateColorPalette("#4e4bfb", colorRange)
);
const colorSecondary = convertArrayToObject(
  generateColorPalette("#3E737B", colorRange)
);
const colorError = convertArrayToObject(
  generateColorPalette("#D13E4A", colorRange)
);
const colorNeutral = convertArrayToObject(
  generateColorPalette("#5D7398", colorRange)
);

const colors: colorPalette = {
  primary: {
    primaryRef: colorPrimary["0"],
    onPrimary: colorPrimary["100"],
    primaryTint: colorPrimary["80"],
    primaryLightTint: colorPrimary["90"],
    onPrimaryTint: colorPrimary["-40"],
  },
  secondary: {
    secondaryRef: colorSecondary["0"],
    onSecondary: colorSecondary["100"],
    secondaryTint: colorSecondary["80"],
    secondaryLightTint: colorSecondary["90"],
    onSecondaryTint: colorSecondary["-40"],
  },
  error: {
    errorRef: colorError["0"],
    onError: colorError["100"],
    errorTint: colorError["80"],
    errorLightTint: colorError["90"],
    onErrorTint: colorError["-40"],
  },
  neutral: {
    background: colorNeutral["100"],
    defaultText: colorNeutral["-80"],
    subtleText: colorNeutral["0"],
    lightText: colorNeutral["100"],
    link: colorPrimary["0"],
    Disabled: colorNeutral["90"],
    onDisabled: colorNeutral["40"],
  },
};

const ColorContext = React.createContext(colors);

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ColorContext.Provider value={colors}>{children}</ColorContext.Provider>
  );
};

export function useColorPalette(): colorPalette {
  const context = React.useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColors must be used within a ColorProvider");
  }
  return context;
}
