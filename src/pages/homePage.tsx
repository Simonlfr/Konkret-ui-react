import React from "react";
import styled from "styled-components";
import { Button } from "../components/button/button";
import { ColorLegend } from "./colorLegend/colorLegend";
import { IconHeartOutlined } from "../components/icon/icon";
import { IconExamples } from "../components/icon/iconExamples";
import { HeadlineMedium } from "../components/typography/typography";
import { useColorPalette } from "../providers/colorProvider";

export function HomePage(): JSX.Element {
  const colorPalette = useColorPalette();

  return (
    <Container>
      <IconExamples />
      <div>
        <HeadlineMedium>Button</HeadlineMedium>
        <ButtonContainer>
          <Button variant="fill">
            <IconHeartOutlined color={colorPalette.neutral.lightText} />
            <Button.text>Fill</Button.text>
          </Button>
          <Button variant="outline">
            <Button.text>Outline</Button.text>
          </Button>
          <Button variant="text">
            <Button.text>Text</Button.text>
          </Button>
          <Button variant="destructive">
            <Button.text>Error</Button.text>
          </Button>
        </ButtonContainer>
      </div>
      <ColorLegend />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
