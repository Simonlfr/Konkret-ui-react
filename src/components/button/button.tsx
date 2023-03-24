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
  variant: ButtonVariant;
  children?: React.ReactNode;
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  href?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

export function Button(props: ButtonProps): JSX.Element {
  const { children, href, ...rest } = props;

  const innerContent = (
    <>
      {props.icon}
      {props.label && <ButtonTypography>{props.label}</ButtonTypography>}
      {children}
    </>
  );

  if (href && href !== "") {
    const url = props.disabled ? "#" : href;
    return (
      <StyledLinkButton href={url} {...rest}>
        {innerContent}
      </StyledLinkButton>
    );
  }

  return <StyledButton {...rest}>{innerContent}</StyledButton>;
}

Button.text = ButtonTypography;

const BaseButtonStyle = css<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 32px;
  border: none;
  cursor: pointer;
  gap: 0.375rem;
  ${({ fullWidth }) => fullWidth && "width: 100%"};
  ${({ variant, disabled }) => getVariant(variant, disabled)}
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

const StyledButton = styled.button`
  ${BaseButtonStyle}
`;

const StyledLinkButton = styled.a`
  ${BaseButtonStyle}
  text-decoration: none;
  box-sizing: border-box;
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

const DisabledButton = css`
  cursor: not-allowed;
  background-color: ${({ theme }) =>
    getTokenPaletteValue(theme, "neutral", "disabled")};
  color: ${({ theme }) => getTokenPaletteValue(theme, "neutral", "onDisabled")};
`;
const DisabledTextButton = css`
  cursor: not-allowed;
  background-color: transparent;
  color: ${({ theme }) => getTokenPaletteValue(theme, "neutral", "onDisabled")};
`;

const getVariant = (
  variant: ButtonVariant,
  disabled?: boolean
): FlattenInterpolation<ThemeProps<any>> => {
  if (disabled && variant === "text") return DisabledTextButton;
  if (disabled) return DisabledButton;
  if (variant === "fill") return FillButton;
  if (variant === "outline") return OutlineButton;
  if (variant === "text") return TextButton;
  return DestructiveButton;
};
