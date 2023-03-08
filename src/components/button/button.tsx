import React from "react";
import styled, { css } from "styled-components";
import { useColorPalette } from "../../providers/colorProvider";
import { convertToRgba } from "../../utils/convertToRGBA";
import { ButtonTypography } from "../typography/typography";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "fill" | "outline" | "text" | "destructive";
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
};

export function Button(props: ButtonProps): JSX.Element {
  const { children, rightIcon, leftIcon, variant = "fill" } = props;
  const colorPalette = useColorPalette();

  const innerContent = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (variant === "fill")
    return (
      <FillButton
        bgColor={colorPalette.primary.primaryRef}
        modifier={colorPalette.primary.onPrimaryTint}
        {...props}
      >
        {innerContent}
      </FillButton>
    );
  if (variant === "outline")
    return (
      <OutlineButton
        bgColor={colorPalette.neutral.light}
        modifier={colorPalette.primary.primaryRef}
        textColor={colorPalette.neutral.link}
        boderColor={colorPalette.primary.primaryTint}
        {...props}
      >
        {innerContent}
      </OutlineButton>
    );
  if (variant === "text")
    return (
      <TextButton
        bgColor={colorPalette.neutral.light}
        modifier={colorPalette.primary.primaryRef}
        textColor={colorPalette.neutral.link}
        boderColor={colorPalette.primary.primaryTint}
        {...props}
      >
        {innerContent}
      </TextButton>
    );
  return (
    <DestructiveButton
      bgColor={colorPalette.error.errorRef}
      modifier={colorPalette.error.onErrorTint}
      {...props}
    >
      {innerContent}
    </DestructiveButton>
  );
}

Button.text = ButtonTypography;

const StyledBaseButtonCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 2px 16px 4px rgba(220, 219, 254, 0.32),
    0px 4px 12px rgba(78, 75, 251, 0.32), 0px 2px 4px rgba(78, 75, 251, 0.24);
`;
const FillButton = styled.button<{ bgColor: string; modifier: string }>`
  ${StyledBaseButtonCSS}
  color: white;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 2px 16px 4px rgba(220, 219, 254, 0.32),
    0px 4px 12px rgba(78, 75, 251, 0.32), 0px 2px 4px rgba(78, 75, 251, 0.24);
  &:hover {
    box-shadow: inset 0px 0px 0px 100vmax
        ${({ modifier }) => convertToRgba(modifier, 0.32)},
      0px 2px 16px 4px rgba(220, 219, 254, 0.32),
      0px 8px 12px rgba(78, 75, 251, 0.32), 0px 4px 8px rgba(78, 75, 251, 0.24);
  }

  &:active {
    box-shadow: inset 0px 0px 0px 100vmax
        ${({ modifier }) => convertToRgba(modifier, 0.64)},
      0px 2px 16px 4px rgba(220, 219, 254, 0.32),
      0px 4px 12px rgba(78, 75, 251, 0.32), 0px 2px 4px rgba(78, 75, 251, 0.4);
  }
`;

const OutlineButton = styled.button<{
  bgColor: string;
  modifier: string;
  textColor: string;
  boderColor: string;
}>`
  ${StyledBaseButtonCSS}
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 0px 16px 4px rgba(220, 219, 254, 0.24),
    0px 0px 12px rgba(78, 75, 251, 0.16), 0px 0px 4px rgba(78, 75, 251, 0.08);
  border: 1px solid ${({ boderColor }) => boderColor};
  color: ${({ textColor }) => textColor};
  &:hover {
    box-shadow: inset 0px 0px 0px 100vmax
        ${({ modifier }) => convertToRgba(modifier, 0.12)},
      0px 0px 16px 4px rgba(220, 219, 254, 0.24),
      0px 0px 12px rgba(78, 75, 251, 0.16), 0px 0px 4px rgba(78, 75, 251, 0.08);
  }

  &:active {
    box-shadow: inset 0px 0px 0px 100vmax
        ${({ modifier }) => convertToRgba(modifier, 0.24)},
      0px 0px 16px 4px rgba(220, 219, 254, 0.24),
      0px 0px 12px rgba(78, 75, 251, 0.16), 0px 0px 4px rgba(78, 75, 251, 0.08);
  }
`;
const TextButton = styled.button<{
  bgColor: string;
  modifier: string;
  textColor: string;
  boderColor: string;
}>`
  ${StyledBaseButtonCSS}
  box-shadow: none;
  border: 1px solid white;
  background-color: white;
  color: ${({ textColor }) => textColor};
  &:hover {
    background-color: ${({ bgColor }) => bgColor};
    border: 1px solid ${({ boderColor }) => boderColor};
    box-shadow: inset 0px 0px 0px 100vmax
        ${({ modifier }) => convertToRgba(modifier, 0.12)},
      0px 0px 16px 4px rgba(220, 219, 254, 0.24);
    filter: drop-shadow(0px 0px 12px rgba(78, 75, 251, 0.16))
      drop-shadow(0px 0px 8px rgba(78, 75, 251, 0.08));
  }

  &:active {
    background-color: ${({ bgColor }) => bgColor};
    border: 1px solid ${({ modifier }) => convertToRgba(modifier, 0.24)};
    box-shadow: inset 0px 0px 0px 100vmax
        ${({ modifier }) => convertToRgba(modifier, 0.24)},
      0px 0px 16px 4px rgba(220, 219, 254, 0.24);
  }
`;
const DestructiveButton = styled.button<{ bgColor: string; modifier: string }>`
  ${StyledBaseButtonCSS}
  color: white;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 2px 16px 4px rgba(239, 173, 190, 0.32),
    0px 4px 12px rgba(215, 51, 92, 0.32), 0px 2px 4px rgba(215, 51, 92, 0.24);
  &:hover {
    box-shadow: inset 0px 0px 0px 100vmax
        ${({ modifier }) => convertToRgba(modifier, 0.32)},
      0px 2px 16px 4px rgba(239, 173, 190, 0.32),
      0px 8px 12px rgba(215, 51, 92, 0.32), 0px 4px 8px rgba(215, 51, 92, 0.24);
  }

  &:active {
    box-shadow: inset 0px 0px 0px 100vmax
        ${({ modifier }) => convertToRgba(modifier, 0.64)},
      0px 2px 16px 4px rgba(239, 173, 190, 0.32),
      0px 4px 12px rgba(215, 51, 92, 0.32), 0px 2px 4px rgba(215, 51, 92, 0.4);
  }
`;
