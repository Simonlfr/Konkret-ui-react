import React from "react";
import { css, FlattenInterpolation, ThemeProps } from "styled-components";
import {
  getTokenPaletteValue,
  getTokenShadowValue,
  getTokenStateModifierValue,
  styled,
} from "../../providers/designTokenProvider";
import { IconContext } from "../icon/icon";
import { ButtonTypography } from "../typography/typography";

type ButtonVariant = "fill" | "outline" | "text" | "destructive";

type BaseButtonProps = {
  variant: ButtonVariant;
  children?: React.ReactNode;
  label?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
};

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  tabIndex?: number;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

type SplitButtonProps = {
  onLeftClick?: () => void;
  onRightClick?: () => void;
  leftTabIndex?: number;
  rightTabIndex?: number;
  leftAriaLabel?: string;
  rightAriaLabel?: string;
  leftAriaLabelledBy?: string;
  rightAriaLabelledBy?: string;
  leftStyle?: React.CSSProperties;
  rightStyle?: React.CSSProperties;
  leftClassName?: string;
  rightClassName?: string;
};

export function Button(props: BaseButtonProps & ButtonProps): JSX.Element {
  const { children, href, ...rest } = props;

  const innerContent = (
    <>
      {props.icon}
      {props.label && <ButtonTypography>{props.label}</ButtonTypography>}
      {children}
    </>
  );

  if (href && href !== "") {
    return (
      <StyledLinkButton
        tabIndex={props.disabled ? -1 : props.tabIndex}
        href={props.disabled ? "#" : href}
        {...rest}
      >
        {innerContent}
      </StyledLinkButton>
    );
  }

  return <StyledButton {...rest}>{innerContent}</StyledButton>;
}

export function SplitButton(props: SplitButtonProps & BaseButtonProps) {
  const { onLeftClick, onRightClick } = props;
  return (
    <SplitButtonWrapper>
      <SplitButtonLabel onClick={onLeftClick}>
        {props.icon}
        {props.label && <ButtonTypography>{props.label}</ButtonTypography>}
        {props.children}
      </SplitButtonLabel>
      <SplitButtonGap />
      <SplitButtonIcon onClick={onRightClick}>
        <IconContext />
      </SplitButtonIcon>
    </SplitButtonWrapper>
  );
}

const BaseButtonStyle = css<BaseButtonProps & ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  min-height: 32px;
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
        padding: 4px 8px;
      `;
    }
  }}
`;

const SplitButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SplitButtonLabel = styled.button`
  ${BaseButtonStyle}
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const SplitButtonIcon = styled.button`
  padding: 8px;
  background-color: #f8f9fa;
  border: none;
  cursor: pointer;
`;

const SplitButtonGap = styled.div`
  width: 1px;
  height: 2rem;
  background-color: transparent;
  box-shadow: inset 0px 0px 0px 1px rgba(78, 75, 251, 0.24);
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
  :hover,
  :focus,
  :focus-visible {
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "primaryHoverFocusDark")},
      ${({ theme }) => getTokenShadowValue(theme, "primaryDarkHoverFocus")};
  }
  :active {
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
  :hover,
  :focus,
  :focus-visible {
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "primaryHoverFocusLight")},
      ${({ theme }) => getTokenShadowValue(theme, "primaryLightHoverFocus")};
  }
  :active {
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
  :hover,
  :focus,
  :focus-visible {
    background-color: ${({ theme }) =>
      getTokenPaletteValue(theme, "neutral", "lightText")};
    border: 1px solid
      ${({ theme }) => getTokenPaletteValue(theme, "primary", "primaryTint")};
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "primaryHoverFocusLight")},
      ${({ theme }) => getTokenShadowValue(theme, "primaryLightHoverFocus")};
  }
  :active {
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
  :hover,
  :focus,
  :focus-visible {
    box-shadow: ${({ theme }) =>
        getTokenStateModifierValue(theme, "errorHoverFocusDark")},
      ${({ theme }) => getTokenShadowValue(theme, "errorDarkHoverFocus")};
  }
  :active {
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

export const getVariant = (
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
