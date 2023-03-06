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
        <Button variant="fill">
          <Button.text>asdas</Button.text>
        </Button>
      </div>
      <ColorLegend />
    </Container>
  );
}

const Container = styled.div``;
