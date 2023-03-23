import React from "react";
import styled from "styled-components";
import { ColorLegend } from "./colorLegend/colorLegend";
import { IconExamples } from "../components/icon/iconExamples";
import { HeadlineMedium } from "../components/typography/typography";
import { ButtonExample } from "./examples/buttonExample";

export function HomePage(): JSX.Element {
  return (
    <Container>
      <IconExamples />
      <div>
        <HeadlineMedium>Button</HeadlineMedium>
        <ButtonExample />
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
