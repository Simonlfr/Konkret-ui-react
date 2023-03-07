import React from "react";
import styled, { css } from "styled-components";
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

  if (variant === "fill")
    return <FillButton {...props}>{innerContent}</FillButton>;
  if (variant === "outline")
    return <OutlineButton {...props}>{innerContent}</OutlineButton>;
  if (variant === "text")
    return <TextButton {...props}>{innerContent}</TextButton>;
  return <DestructiveButton {...props}>{innerContent}</DestructiveButton>;
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
  background-color: #4e4bfb;
  color: white;
  box-shadow: 0px 2px 16px 4px rgba(220, 219, 254, 0.32),
    0px 4px 12px rgba(78, 75, 251, 0.32), 0px 2px 4px rgba(78, 75, 251, 0.24);

  &:hover {
    background-color: rgba(31, 30, 100, 0.32);
  }

  &:active {
    background-color: rgba(31, 30, 100, 0.64);
  }
`;
const OutlineButton = styled.button`
  ${StyledBaseButtonCSS}
  background-color: red;
`;
const TextButton = styled.button`
  ${StyledBaseButtonCSS}
  background-color: red;
`;
const DestructiveButton = styled.button`
  ${StyledBaseButtonCSS}
  background-color: red;
`;
