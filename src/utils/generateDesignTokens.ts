import { ColorPaletteType } from "../providers/colorProvider";
import { convertToRgba } from "./convertToRGBA";

type StateModifiersType = {
  primaryHoverFocusLight: string;
  primaryPressedLight: string;
  primaryHoverFocusDark: string;
  primaryPressedDark: string;
  errorHoverFocusLight: string;
  errorPressedLight: string;
  errorHoverFocusDark: string;
  errorPressedDark: string;
};

type ShadowsType = {
  primaryLightDefault: string;
  primaryLightHoverFocus: string;
  primaryLightPressed: string;
  primaryDarkDefault: string;
  primaryDarkHoverFocus: string;
  primaryDarkPressed: string;
  errorLightDefault: string;
  errorLightHoverFocus: string;
  errorLightPressed: string;
  errorDarkDefault: string;
  errorDarkHoverFocus: string;
  errorDarkPressed: string;
  popoverLight: string;
  popoverDark: string;
};

export type DesignTokenType = {
  palette: ColorPaletteType;
  stateModifiers: StateModifiersType;
  shadows: ShadowsType;
};

export function generateDesignTokens(
  colorPalette: ColorPaletteType
): DesignTokenType {
  const modifier = "inset 0px 0px 0px 100vmax";

  return {
    palette: colorPalette,
    stateModifiers: {
      primaryHoverFocusLight: `${modifier} ${convertToRgba(
        colorPalette.primary.primaryRef,
        0.12
      )}`,
      primaryPressedLight: `${modifier} ${convertToRgba(
        colorPalette.primary.primaryRef,
        0.24
      )}`,
      primaryHoverFocusDark: `${modifier} ${convertToRgba(
        colorPalette.primary.onPrimaryTint,
        0.32
      )}`,
      primaryPressedDark: `${modifier} ${convertToRgba(
        colorPalette.primary.onPrimaryTint,
        0.64
      )}`,
      errorHoverFocusLight: `${modifier} ${convertToRgba(
        colorPalette.error.errorRef,
        0.12
      )}`,
      errorPressedLight: `${modifier} ${convertToRgba(
        colorPalette.error.errorRef,
        0.24
      )}`,
      errorHoverFocusDark: `${modifier} ${convertToRgba(
        colorPalette.error.onErrorTint,
        0.32
      )}`,
      errorPressedDark: `${modifier} ${convertToRgba(
        colorPalette.error.onErrorTint,
        0.64
      )}`,
    },
    shadows: {
      primaryLightDefault: `
                0px 0px 16px 4px ${convertToRgba(
                  colorPalette.primary.primaryTint,
                  0.24
                )}, 
                0px 0px 12px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.16
                )}, 
                0px 0px 4px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.08
                )}`,
      primaryLightHoverFocus: `
                0px 0px 16px 4px ${convertToRgba(
                  colorPalette.primary.primaryTint,
                  0.24
                )}, 
                0px 0px 12px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.16
                )}, 
                0px 0px 8px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.08
                )}`,
      primaryLightPressed: `
                0px 0px 16px 4px ${convertToRgba(
                  colorPalette.primary.primaryTint,
                  0.24
                )}, 
                0px 0px 12px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.16
                )}, 
                0px 0px 4px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.16
                )}`,
      primaryDarkDefault: `
                0px 2px 16px 4px ${convertToRgba(
                  colorPalette.primary.primaryTint,
                  0.32
                )}, 
                0px 4px 12px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.32
                )}, 
                0px 2px 4px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.24
                )}`,
      primaryDarkHoverFocus: `
                0px 2px 16px 4px ${convertToRgba(
                  colorPalette.primary.primaryTint,
                  0.32
                )}, 
                0px 8px 12px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.32
                )}, 
                0px 4px 8px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.24
                )}`,
      primaryDarkPressed: `
                0px 2px 16px 4px ${convertToRgba(
                  colorPalette.primary.primaryTint,
                  0.32
                )}, 
                0px 4px 12px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.32
                )}, 
                0px 2px 4px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.4
                )}`,
      errorLightDefault: `
                0px 2px 16px 4px ${convertToRgba(
                  colorPalette.error.errorTint,
                  0.24
                )}, 
                0px 4px 12px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.16
                )}, 
                0px 2px 4px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.08
                )}`,
      errorLightHoverFocus: `
                0px 2px 16px 4px ${convertToRgba(
                  colorPalette.error.errorTint,
                  0.24
                )}, 
                0px 8px 12px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.16
                )}, 
                0px 4px 8px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.08
                )}`,
      errorLightPressed: `
                0px 2px 16px 4px ${convertToRgba(
                  colorPalette.error.errorTint,
                  0.24
                )}, 
                0px 4px 12px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.16
                )}, 
                0px 2px 4px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.16
                )}`,
      errorDarkDefault: `
                0px 2px 16px 4px ${convertToRgba(
                  colorPalette.error.errorTint,
                  0.32
                )}, 
                0px 4px 12px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.32
                )}, 
                0px 2px 4px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.24
                )}`,
      errorDarkHoverFocus: `
                0px 2px 16px 4px ${convertToRgba(
                  colorPalette.error.errorTint,
                  0.32
                )}, 
                0px 8px 12px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.32
                )}, 
                0px 4px 8px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.24
                )}`,
      errorDarkPressed: `
                0px 2px 16px 4px ${convertToRgba(
                  colorPalette.error.errorTint,
                  0.32
                )}, 
                0px 4px 12px ${convertToRgba(
                  colorPalette.error.errorRef,
                  0.32
                )}, 
                0px 2px 4px ${convertToRgba(colorPalette.error.errorRef, 0.4)}`,
      popoverLight: `
                0px 8px 24px 4px ${convertToRgba(
                  colorPalette.primary.primaryTint,
                  0.24
                )}, 
                0px 8px 16px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.16
                )}, 
                0px 4px 16px 16px ${convertToRgba(
                  colorPalette.primary.primaryRef,
                  0.08
                )}`,
      popoverDark: `
                0px 8px 24px 4px ${convertToRgba(
                  colorPalette.primary.primaryTint,
                  0.32
                )}, 
                0px 8px 16px ${convertToRgba(
                  colorPalette.neutral.background,
                  0.16
                )}, 
                0px 4px 16px 16px ${convertToRgba(
                  colorPalette.neutral.background,
                  0.24
                )}`,
    },
  };
}
