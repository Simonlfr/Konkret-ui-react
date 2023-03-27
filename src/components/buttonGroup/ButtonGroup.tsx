import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonGroupProps {
    children: ReactNode;
}

export const ButtonGroup = styled.div<ButtonGroupProps>`
    display: flex;
    align-items: center;
    max-height: 2rem;
    gap: 1px;

  
    button:first-child {
        border-top-right-radius 0;
        border-bottom-right-radius 0;
    }

    button:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius 0;
    }

    button:not(:first-child):not(:last-child) {
        border-radius: 0;
    }
  
`;
