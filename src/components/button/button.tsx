import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { defaultDesignTokens } from "../../utils/defaultDesignTokens";
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
  color: ${({ theme }) =>
    theme
      ? theme.palette.neutral.lightText
      : defaultDesignTokens.palette.neutral.lightText};
  background-color: ${({ theme }) =>
    theme
      ? theme.palette.primary.primaryRef
      : defaultDesignTokens.palette.primary.primaryRef};
  box-shadow: ${({ theme }) =>
    theme
      ? theme.shadows.primaryDarkDefault
      : defaultDesignTokens.shadows.primaryDarkDefault};
  &:hover {
    box-shadow: ${({ theme }) =>
        theme
          ? theme.stateModifiers.primaryHoverFocusDark
          : defaultDesignTokens.stateModifiers.primaryHoverFocusDark},
      ${({ theme }) =>
        theme
          ? theme.shadows.primaryDarkHoverFocus
          : defaultDesignTokens.shadows.primaryDarkHoverFocus};
  }
  &:active {
    box-shadow: ${({ theme }) =>
        theme
          ? theme.stateModifiers.primaryPressedDark
          : defaultDesignTokens.stateModifiers.primaryPressedDark},
      ${({ theme }) =>
        theme
          ? theme.shadows.primaryDarkPressed
          : defaultDesignTokens.shadows.primaryDarkPressed};
  }
`;

const OutlineButton = styled.button`
  ${StyledBaseButtonCSS}
  background-color: ${({ theme }) =>
    theme
      ? theme.palette.neutral.lightText
      : defaultDesignTokens.palette.neutral.lightText};
  box-shadow: ${({ theme }) =>
    theme
      ? theme.shadows.primaryLightDefault
      : defaultDesignTokens.shadows.primaryLightDefault};
  border: 1px solid
    ${({ theme }) =>
      theme
        ? theme.palette.primary.primaryTint
        : defaultDesignTokens.palette.primary.primaryTint};
  color: ${({ theme }) =>
    theme
      ? theme.palette.neutral.link
      : defaultDesignTokens.palette.neutral.link};
  &:hover {
    box-shadow: ${({ theme }) =>
        theme
          ? theme.stateModifiers.primaryHoverFocusLight
          : defaultDesignTokens.stateModifiers.primaryHoverFocusLight},
      ${({ theme }) =>
        theme
          ? theme.shadows.primaryLightHoverFocus
          : defaultDesignTokens.shadows.primaryLightHoverFocus};
  }
  &:active {
    box-shadow: ${({ theme }) =>
        theme
          ? theme.stateModifiers.primaryPressedLight
          : defaultDesignTokens.stateModifiers.primaryPressedLight},
      ${({ theme }) =>
        theme
          ? theme.shadows.primaryLightPressed
          : defaultDesignTokens.shadows.primaryLightPressed};
  }
`;
const TextButton = styled.button`
  ${StyledBaseButtonCSS}
  box-shadow: none;
  border: 1px solid transparent;
  background-color: transparent;
  color: ${({ theme }) =>
    theme
      ? theme.palette.neutral.link
      : defaultDesignTokens.palette.neutral.link};
  &:hover {
    background-color: ${({ theme }) =>
      theme
        ? theme.palette.neutral.lightText
        : defaultDesignTokens.palette.neutral.lightText};
    border: 1px solid
      ${({ theme }) =>
        theme
          ? theme.palette.primary.primaryTint
          : defaultDesignTokens.palette.primary.primaryTint};
    box-shadow: ${({ theme }) =>
        theme
          ? theme.stateModifiers.primaryHoverFocusLight
          : defaultDesignTokens.stateModifiers.primaryHoverFocusLight},
      ${({ theme }) =>
        theme
          ? theme.shadows.primaryLightHoverFocus
          : defaultDesignTokens.shadows.primaryLightHoverFocus};
  }
  &:active {
    background-color: ${({ theme }) =>
      theme
        ? theme.palette.neutral.lightText
        : defaultDesignTokens.palette.neutral.lightText};
    border: 1px solid
      ${({ theme }) =>
        theme
          ? theme.stateModifiers.primaryPressedLight
          : defaultDesignTokens.stateModifiers.primaryPressedLight};
    box-shadow: ${({ theme }) =>
        theme
          ? theme.stateModifiers.primaryPressedLight
          : defaultDesignTokens.stateModifiers.primaryPressedLight},
      ${({ theme }) =>
        theme
          ? theme.shadows.primaryLightPressed
          : defaultDesignTokens.shadows.primaryLightPressed};
  }
`;
const DestructiveButton = styled.button`
  ${StyledBaseButtonCSS}
  color: ${({ theme }) =>
    theme
      ? theme.palette.neutral.lightText
      : defaultDesignTokens.palette.neutral.lightText};
  background-color: ${({ theme }) =>
    theme
      ? theme.palette.error.errorRef
      : defaultDesignTokens.palette.error.errorRef};
  box-shadow: ${({ theme }) =>
    theme
      ? theme.shadows.errorDarkDefault
      : defaultDesignTokens.shadows.errorDarkDefault};
  &:hover {
    box-shadow: ${({ theme }) =>
        theme
          ? theme.stateModifiers.errorHoverFocusDark
          : defaultDesignTokens.stateModifiers.errorHoverFocusDark},
      ${({ theme }) =>
        theme
          ? theme.shadows.errorDarkHoverFocus
          : defaultDesignTokens.shadows.errorDarkHoverFocus};
  }
  &:active {
    box-shadow: ${({ theme }) =>
        theme
          ? theme.stateModifiers.errorPressedDark
          : defaultDesignTokens.stateModifiers.errorPressedDark},
      ${({ theme }) =>
        theme
          ? theme.shadows.errorDarkPressed
          : defaultDesignTokens.shadows.errorDarkPressed};
  }
`;
