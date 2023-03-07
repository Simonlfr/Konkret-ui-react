import styled from "styled-components";
import {
  ColorShade,
  generateColorPalette,
} from "../../utils/generateColorPalette";
import { HeadlineMedium, SubtitleLargeCss } from "../typography/typography";

function getText(shade: number): string {
  if (shade === 0) return "Ref";
  if (shade > 0) return `+${shade}%`;
  return `${shade}%`;
}

function Palette(props: { colorPalette: ColorShade[] }): JSX.Element {
  return (
    <PaletteContainer>
      {props.colorPalette.map((color, index) => (
        <ColorContainer
          key={index}
          style={{
            backgroundColor: color.color,
            color: color.shade <= 0 ? "#fff" : "#000",
          }}
        >
          {getText(color.shade)}
        </ColorContainer>
      ))}
    </PaletteContainer>
  );
}

export function ColorLegend(): JSX.Element {
  const colorRange = [-80, -60, -40, -20, 0, 20, 40, 60, 80, 90, 95, 100];
  const colorPrimary = generateColorPalette("#4e4bfb", colorRange);
  const colorSecondary = generateColorPalette("#3E737B", colorRange);
  const colorError = generateColorPalette("#D13E4A", colorRange);
  const colorNeutral = generateColorPalette("#5D7398", colorRange);

  return (
    <Container>
      <HeadlineMedium>Reference colors</HeadlineMedium>
      <Palette colorPalette={colorPrimary} />
      <Palette colorPalette={colorSecondary} />
      <Palette colorPalette={colorError} />
      <Palette colorPalette={colorNeutral} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const PaletteContainer = styled.div`
  display: flex;
  flex-direction: row;

  div:first-child {
    border-radius: 12px 0 0 12px;
  }

  div:last-child {
    border-radius: 0 12px 12px 0;
  }
`;

const ColorContainer = styled.div`
  width: 64px;
  height: 108px;
  padding: 8px;
  ${SubtitleLargeCss}
`;
