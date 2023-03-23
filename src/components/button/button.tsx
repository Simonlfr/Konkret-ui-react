import React from "react";
import { css, FlattenInterpolation, ThemeProps } from "styled-components";
import {
  getTokenPaletteValue,
  getTokenShadowValue,
  getTokenStateModifierValue,
  styled,
} from "../../providers/designTokenProvider";
import { ButtonTypography } from "../typography/typography";

type ButtonVariant = "fill" | "outline" | "text" | "destructive";

type ButtonProps = {
  children?: React.ReactNode;
  variant: ButtonVariant;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export function Button(props: ButtonProps): JSX.Element {
  const { children, label, icon, onClick } = props;

  return (
    <StyledBaseButton onClick={onClick} {...props}>
      {icon}
      {label && <ButtonTypography>{props.label}</ButtonTypography>}
      {children}
    </StyledBaseButton>
  );
}

Button.text = ButtonTypography;

const StyledBaseButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 32px;
  border: none;
  cursor: pointer;
  gap: 0.375rem;
  ${({ variant }) => getVariant(variant)}
  ${({ label, icon }) => {
    if (label && !icon) {
      return css`
        padding: 8px 12px;
      `;
    }

    if (!label && icon) {
      return css`
        padding: 7.5px;
      `;
    }

    if (label && icon) {
      return css`
        padding: 8px 12px 8px 9px;
      `;
    }
  }}
`;

const FillButton = css`
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

const OutlineButton = css`
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
const TextButton = css`
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
const DestructiveButton = css`
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

const getVariant = (
  variant: ButtonVariant
): FlattenInterpolation<ThemeProps<any>> => {
  if (variant === "fill") return FillButton;
  if (variant === "outline") return OutlineButton;
  if (variant === "text") return TextButton;
  return DestructiveButton;
};
