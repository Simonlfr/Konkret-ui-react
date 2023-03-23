import { ColorShade, generateColorShaders } from "./generateColorShaders";

interface PrimaryPalette {
  primaryRef: string;
  onPrimary: string;
  primaryTint: string;
  primaryLightTint: string;
  onPrimaryTint: string;
}

interface SecondaryPalette {
  secondaryRef: string;
  onSecondary: string;
  secondaryTint: string;
  secondaryLightTint: string;
  onSecondaryTint: string;
}

interface ErrorPalette {
  errorRef: string;
  onError: string;
  errorTint: string;
  errorLightTint: string;
  onErrorTint: string;
}

interface NeutralPalette {
  background: string;
  defaultText: string;
  subtleText: string;
  lightText: string;
  link: string;
  disabled: string;
  onDisabled: string;
}

export interface ColorPaletteType {
  primary: PrimaryPalette;
  secondary: SecondaryPalette;
  error: ErrorPalette;
  neutral: NeutralPalette;
}

function convertArrayToObject(colors: ColorShade[]): { [key: string]: string } {
  const colorObject: { [key: string]: string } = {};
  for (const color of colors) {
    colorObject[color.shade] = color.color;
  }
  return colorObject;
}

export function generateColorPalette(
  primary: string,
  secondary: string,
  error: string,
  neutral: string,
  range: number[]
): ColorPaletteType {
  const colorPrimary = convertArrayToObject(
    generateColorShaders(primary, range)
  );
  const colorSecondary = convertArrayToObject(
    generateColorShaders(secondary, range)
  );
  const colorError = convertArrayToObject(generateColorShaders(error, range));
  const colorNeutral = convertArrayToObject(
    generateColorShaders(neutral, range)
  );

  return {
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
      disabled: colorNeutral["90"],
      onDisabled: colorNeutral["40"],
    },
  };
}
