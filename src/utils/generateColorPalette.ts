export interface ColorShade {
  shade: number;
  color: string;
}
export function generateColorPalette(
  baseColor: string,
  shadeInterval: number[]
): ColorShade[] {
  const parsedColor = baseColor.replace("#", "");
  if (!/^[0-9A-F]{6}$/i.test(parsedColor)) {
    throw new Error(`Invalid color: ${baseColor}`);
  }

  const baseRed = parseInt(parsedColor.substring(0, 2), 16);
  const baseGreen = parseInt(parsedColor.substring(2, 4), 16);
  const baseBlue = parseInt(parsedColor.substring(4, 6), 16);

  const colors: ColorShade[] = shadeInterval.map((shade) => {
    const red = Math.max(
      0,
      baseRed +
        Math.floor((shade / 100) * (shade < 0 ? baseRed : 255 - baseRed))
    );
    const green = Math.max(
      0,
      baseGreen +
        Math.floor((shade / 100) * (shade < 0 ? baseGreen : 255 - baseGreen))
    );
    const blue = Math.max(
      0,
      baseBlue +
        Math.floor((shade / 100) * (shade < 0 ? baseBlue : 255 - baseBlue))
    );

    const rgba = `rgba(${red}, ${green}, ${blue}, 1)`;
    const hex = `#${((red << 16) | (green << 8) | blue)
      .toString(16)
      .padStart(6, "0")}`;

    return { shade: shade, color: shade < 0 ? hex : rgba };
  });

  return colors;
}
