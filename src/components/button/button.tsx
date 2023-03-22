import React from "react";
import { css } from "styled-components";
import {
  getTokenPaletteValue,
  getTokenShadowValue,
  getTokenStateModifierValue,
  styled,
} from "../../providers/designTokenProvider";
import { ButtonTypography } from "../typography/typography";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "fill" | "outline" | "text" | "destructive";
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
};

export function Button(props: ButtonProps): JSX.Element {
  const { children, rightIcon, leftIcon, variant = "fill" } = props;

  const innerContent = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (variant === "fill") return <FillButton>{innerContent}</FillButton>;
  if (variant === "outline")
    return <OutlineButton>{innerContent}</OutlineButton>;
  if (variant === "text") return <TextButton>{innerContent}</TextButton>;
  return <DestructiveButton>{innerContent}</DestructiveButton>;
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
`;

const FillButton = styled.button`
  ${StyledBaseButtonCSS}
  color: ${({ theme }) => getTokenPaletteValue(theme, "neutral", "lightText")};
  background-color: ${({ theme }) =>
    getTokenPaletteValue(theme, "primary", "primaryRef")};
  box-shadow: ${({ theme }) =>
    getTokenShadowValue(theme, "primaryDarkDefault")};
  &:hover {
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "primaryHoverFocusDark")},
      ${({ theme }) => getTokenShadowValue(theme, "primaryDarkHoverFocus")};
  }
  &:active {
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "primaryPressedDark")},
      ${({ theme }) => getTokenShadowValue(theme, "primaryDarkPressed")};
  }
`;

const OutlineButton = styled.button`
  ${StyledBaseButtonCSS}
  background-color: ${({ theme }) =>
    getTokenPaletteValue(theme, "neutral", "lightText")};
  box-shadow: ${({ theme }) =>
    getTokenShadowValue(theme, "primaryLightDefault")};
  border: 1px solid
    ${({ theme }) => getTokenPaletteValue(theme, "primary", "primaryTint")};
  color: ${({ theme }) => getTokenPaletteValue(theme, "neutral", "link")};
  &:hover {
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "primaryHoverFocusLight")},
      ${({ theme }) => getTokenShadowValue(theme, "primaryLightHoverFocus")};
  }
  &:active {
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "primaryPressedLight")},
      ${({ theme }) => getTokenShadowValue(theme, "primaryLightPressed")};
  }
`;
const TextButton = styled.button`
  ${StyledBaseButtonCSS}
  box-shadow: none;
  border: 1px solid transparent;
  background-color: transparent;
  color: ${({ theme }) => getTokenPaletteValue(theme, "neutral", "link")};
  &:hover {
    background-color: ${({ theme }) =>
      getTokenPaletteValue(theme, "neutral", "lightText")};
    border: 1px solid
      ${({ theme }) => getTokenPaletteValue(theme, "primary", "primaryTint")};
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "primaryHoverFocusLight")},
      ${({ theme }) => getTokenShadowValue(theme, "primaryLightHoverFocus")};
  }
  &:active {
    background-color: ${({ theme }) =>
      getTokenPaletteValue(theme, "neutral", "lightText")};
    border: 1px solid
      ${({ theme }) => getTokenStateModifierValue(theme, "primaryPressedLight")};
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "primaryPressedLight")},
      ${({ theme }) => getTokenShadowValue(theme, "primaryLightPressed")};
  }
`;
const DestructiveButton = styled.button`
  ${StyledBaseButtonCSS}
  color: ${({ theme }) => getTokenPaletteValue(theme, "neutral", "lightText")};
  background-color: ${({ theme }) =>
    getTokenPaletteValue(theme, "error", "errorRef")};
  box-shadow: ${({ theme }) => getTokenShadowValue(theme, "errorDarkDefault")};
  &:hover {
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "errorHoverFocusDark")},
      ${({ theme }) => getTokenShadowValue(theme, "errorDarkHoverFocus")};
  }
  &:active {
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "errorPressedDark")},
      ${({ theme }) => getTokenShadowValue(theme, "errorDarkPressed")};
  }
`;
