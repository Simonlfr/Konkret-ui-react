import React from "react";
import {
  ColorPaletteType,
  generateColorPalette,
} from "../utils/generateColorPalette";
import { RefColors } from "./designTokenProvider";

const ColorPaletteContext = React.createContext({} as ColorPaletteType);

export const ColorProvider = ({
  children,
  refColors,
  colorRange,
}: {
  children: React.ReactNode;
  refColors: RefColors;
  colorRange: number[];
}) => {
  const palette = generateColorPalette(
    refColors.primary,
    refColors.secondary,
    refColors.error,
    refColors.neutral,
    colorRange
  );
  return (
    <ColorPaletteContext.Provider value={palette}>
      {children}
    </ColorPaletteContext.Provider>
  );
};

export function useColorPalette(): ColorPaletteType {
  const context = React.useContext(ColorPaletteContext);
  if (context === undefined) {
    throw new Error("useColors must be used within a ColorProvider");
  }
  return context;
}
