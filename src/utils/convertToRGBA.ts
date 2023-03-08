export function convertToRgba(color: string, alpha: number): string {
  let red: number, green: number, blue: number;
  console.log(color);
  const rgbMatch = color.match(/rgb\((\d+), (\d+), (\d+)\)/);

  if (rgbMatch) {
    red = parseInt(rgbMatch[1]);
    green = parseInt(rgbMatch[2]);
    blue = parseInt(rgbMatch[3]);
  } else {
    const hexMatch = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

    if (hexMatch) {
      red = parseInt(hexMatch[1], 16);
      green = parseInt(hexMatch[2], 16);
      blue = parseInt(hexMatch[3], 16);
    } else {
      throw new Error(
        "Invalid color format. Please use either RGB or hex format."
      );
    }
  }

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
