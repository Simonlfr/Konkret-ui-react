import React from "react";
import styled from "styled-components";
import { Button } from "../components/button/button";
import { ColorLegend } from "../components/colorLegend/colorLegend";
import { HeadlineMedium } from "../components/typography/typography";

export function HomePage(): JSX.Element {
  return (
    <Container>
      <div>
        <HeadlineMedium>Button</HeadlineMedium>
        <ButtonContainer>
          <Button variant="fill">
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

const Container = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
