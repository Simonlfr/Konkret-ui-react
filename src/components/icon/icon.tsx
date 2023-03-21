import React from "react";
import { defaultDesignTokens } from "../../utils/defaultDesignTokens";

export function IconHeartOutlined({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M14.5 0C11.605 0 10 2.09 10 2.09S8.395 0 5.5 0A5.5 5.5 0 0 0 0 5.5c0 4.171 4.912 8.213 6.281 9.49C7.858 16.46 10 18.35 10 18.35s2.142-1.89 3.719-3.36C15.088 13.713 20 9.671 20 5.5A5.5 5.5 0 0 0 14.5 0Zm-1.689 13.11c-.177.16-.331.299-.456.416-.751.7-1.639 1.503-2.355 2.145a175.713 175.713 0 0 1-2.355-2.145c-.126-.117-.28-.257-.456-.416C5.769 11.827 2 8.419 2 5.5 2 3.57 3.57 2 5.5 2c1.827 0 2.886 1.275 2.914 1.308L10 5l1.586-1.692C11.596 3.295 12.673 2 14.5 2 16.43 2 18 3.57 18 5.5c0 2.919-3.769 6.327-5.189 7.61Z" />
    </svg>
  );
}

export function IconHeartFilled({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M14.5 0C11.605 0 10 2.09 10 2.09S8.395 0 5.5 0A5.5 5.5 0 0 0 0 5.5c0 4.171 4.912 8.213 6.281 9.49C7.858 16.46 10 18.35 10 18.35s2.142-1.89 3.719-3.36C15.088 13.713 20 9.671 20 5.5A5.5 5.5 0 0 0 14.5 0Z" />
    </svg>
  );
}

export function IconStarOutlined({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m20 7.24-7.19-.62L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27 16.18 19l-1.63-7.03L20 7.24ZM10 13.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L10 4.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L10 13.4Z" />
    </svg>
  );
}

export function IconStarFilled({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m12.81 6.62 7.19.62-5.45 4.73L16.18 19 10 15.27 3.82 19l1.64-7.03L0 7.24l7.19-.61L10 0l2.81 6.62Z" />
    </svg>
  );
}

export function IconClose({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M1.707.293.293 1.707 7.586 9 .293 16.293l1.414 1.414L9 10.414l7.293 7.293 1.414-1.414L10.414 9l7.293-7.293L16.293.293 9 7.586 1.707.293Z" />
    </svg>
  );
}

export function IconDone({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M6 11.2 1.8 7 .4 8.4 6 14 18 2 16.6.6 6 11.2Z" />
    </svg>
  );
}

export function IconUnavailable({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M10 0C4.489 0 0 4.489 0 10s4.489 10 10 10 10-4.489 10-10S15.511 0 10 0Zm0 2c4.43 0 8 3.57 8 8 0 1.853-.63 3.55-1.682 4.904L5.096 3.682A7.965 7.965 0 0 1 10 2ZM3.682 5.096l11.222 11.222A7.965 7.965 0 0 1 10 18c-4.43 0-8-3.57-8-8 0-1.853.63-3.55 1.682-4.904Z" />
    </svg>
  );
}

export function IconPlus({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M8 0v8H0v2h8v8h2v-8h8V8h-8V0H8Z" />
    </svg>
  );
}

export function IconMinus({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -11 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0h18v2H0V0Z" />
    </svg>
  );
}

export function IconChevronBack({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-7 -5 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M7 .93.93 7 7 13.07l1.5-1.5L3.93 7 8.5 2.43 7 .93Z" />
    </svg>
  );
}

export function IconChevronUp({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 -1 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M12 6.93 5.93 13l1.5 1.5L12 9.93l4.57 4.57 1.5-1.5L12 6.93Z" />
    </svg>
  );
}

export function IconChevronDown({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 1 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M7.43 9.5 5.93 11 12 17.07 18.07 11l-1.5-1.5L12 14.07 7.43 9.5Z" />
    </svg>
  );
}

export function IconChevronForward({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-1 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m10 5.93-1.5 1.5L13.07 12 8.5 16.57l1.5 1.5L16.07 12 10 5.93Z" />
    </svg>
  );
}

export function IconArrowBack({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -4 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M8 .93.93 8 8 15.07l1.5-1.5L4.93 9H19V7H4.93L9.5 2.43 8 .93Z" />
    </svg>
  );
}

export function IconArrowUp({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M12 2.93 4.93 10l1.5 1.5L11 6.93V21h2V6.93l4.57 4.57 1.5-1.5L12 2.93Z" />
    </svg>
  );
}

export function IconArrowDown({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M11 3v14.07L6.43 12.5 4.93 14 12 21.07 19.07 14l-1.5-1.5L13 17.07V3h-2Z" />
    </svg>
  );
}

export function IconArrowForward({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m14 4.93-1.5 1.5L17.07 11H3v2h14.07l-4.57 4.57 1.5 1.5L21.07 12 14 4.93Z" />
    </svg>
  );
}

export function IconFullscreen({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0v7l2.781-2.781 3 3L7.22 5.78l-3-3L7 0H0Zm11 0 2.781 2.781-3 3L12.22 7.22l3-3L18 7V0h-7ZM5.781 10.781l-3 3L0 11v7h7l-2.781-2.781 3-3L5.78 10.78Zm6.438 0L10.78 12.22l3 3L11 18h7v-7l-2.781 2.781-3-3Z" />
    </svg>
  );
}

export function IconCaretBack({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-9 -7 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M5 0 0 5l5 5V0Z" />
    </svg>
  );
}

export function IconCaretDown({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m7.5 9.5 5 5 5-5h-10Z" />
    </svg>
  );
}

export function IconCaretUp({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m17.5 14.5-5-5-5 5h10Z" />
    </svg>
  );
}

export function IconCaretForward({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m10 17 5-5-5-5v10Z" />
    </svg>
  );
}

export function IconCaretSelector({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m7 14 5 5 5-5H7ZM17 10l-5-5-5 5h10Z" />
    </svg>
  );
}

export function IconSortAlphaAsc({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M6.8 2 4 10h2l.365-1h2.266L9 10h2L8.2 2H6.8ZM16 2v16h-3l4 4 4-4h-3V2h-2ZM7.547 5.264 8.067 7H6.933l.613-1.736ZM4 13v2h4l-4 4.563V21h7v-2H7l4-4.58V13H4Z" />
    </svg>
  );
}

export function IconSortAlphaDesc({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M4 2v2h4L4 8.563V10h7V8H7l4-4.58V2H4Zm12 0v16h-3l4 4 4-4h-3V2h-2ZM6.8 13 4 21h2l.365-1h2.266L9 21h2l-2.8-8H6.8Zm.747 3.264L8.067 18H6.933l.613-1.736Z" />
    </svg>
  );
}

export function IconSortNumericAsc({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M8.75 2 5 3.455v1.613l2-.703V10h2V2h-.25ZM16 2v16h-3l4 4 4-4h-3V2h-2ZM7 13c-1.333 0-2.275.814-2.645 1.553C3.986 15.29 4 16 4 16h2s.014-.291.144-.553c.131-.261.19-.447.856-.447.667 0 .725.186.855.447C7.986 15.71 8 16 8 16c0 .036-.09.33-.389.684-.299.354-.752.753-1.217 1.105a17.276 17.276 0 0 1-1.873 1.225L4 19.297V21h6v-2H8.02c.39-.321.79-.637 1.119-1.027.45-.535.86-1.156.86-1.973 0 0 .015-.709-.355-1.447C9.275 13.814 8.334 13 7 13Z" />
    </svg>
  );
}

export function IconSortNumericDesc({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-4 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2.99994 0C1.66661 0 0.72467 0.81422 0.355413 1.55273C-0.0138437 2.29125 -5.54861e-05 3 -5.54861e-05 3H1.99994C1.99994 3 2.01373 2.70875 2.14448 2.44727C2.27522 2.18578 2.33328 2 2.99994 2C3.66661 2 3.72467 2.18578 3.85541 2.44727C3.98616 2.70875 3.99994 3 3.99994 3C3.99994 3.03572 3.91011 3.32917 3.61127 3.68359C3.31243 4.03802 2.85858 4.43658 2.39448 4.78906C1.46627 5.49403 0.521429 6.01367 0.521429 6.01367L-5.54861e-05 6.29688V8H5.99994V6H4.01948C4.40941 5.67883 4.80938 5.36313 5.13862 4.97266C5.58978 4.43758 5.99994 3.81728 5.99994 3C5.99994 3 6.01373 2.29125 5.64448 1.55273C5.27522 0.81422 4.33328 0 2.99994 0ZM11.9999 0V16H8.99994L12.9999 20L16.9999 16H13.9999V0H11.9999ZM4.74994 11L0.999945 12.4551V14.0684L2.99994 13.3652V19H4.99994V11H4.74994Z" />
    </svg>
  );
}

export function IconSortSizeAsc({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M3 3v2h3V3H3Zm14 0v14h-3l4 4 4-4h-3V3h-2ZM3 7v2h5V7H3Zm0 4v2h7v-2H3Zm0 4v2h9v-2H3Zm0 4v2h11v-2H3Z" />
    </svg>
  );
}

export function IconSortSizeDesc({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M3 3v2h11V3H3Zm14 0v14h-3l4 4 4-4h-3V3h-2ZM3 7v2h9V7H3Zm0 4v2h7v-2H3Zm0 4v2h5v-2H3Zm0 4v2h3v-2H3Z" />
    </svg>
  );
}

export function IconChart({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M4 3v15c0 1.093.907 2 2 2h15v-2H6V3H4Zm16.293 2.293L16 9.586l-3-3-5.707 5.707 1.414 1.414L13 9.414l3 3 5.707-5.707-1.414-1.414Z" />
    </svg>
  );
}

export function IconFolderOpen({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -4 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2 0C.906 0 0 .906 0 2v12c0 1.094.906 2 2 2h16c1.094 0 2-.906 2-2V4c0-1.094-.906-2-2-2h-8L8 0H2Zm0 2h5.172l2 2H18v10H2V2Z" />
    </svg>
  );
}

export function IconFolderClosed({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -4 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M18 2h-8L8 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 12H2V4h16v10Z" />
    </svg>
  );
}

export function IconFile({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-4 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2 0C.906 0 0 .906 0 2v16c0 1.094.906 2 2 2h12c1.094 0 2-.906 2-2V6l-6-6H2Zm0 2h7v5h5v11H2V2Z" />
    </svg>
  );
}

export function IconDocument({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-4 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2 0C.906 0 0 .906 0 2v16c0 1.094.906 2 2 2h12c1.094 0 2-.906 2-2V6l-6-6H2Zm0 2h7v5h5v11H2V2Zm2 8v2h8v-2H4Zm0 4v2h8v-2H4Z" />
    </svg>
  );
}

export function IconEdit({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M15.414 0a.997.997 0 0 0-.707.293l-2 2-1.414 1.414L0 15v4h4L18.707 4.293a.999.999 0 0 0 0-1.414L16.121.293A.997.997 0 0 0 15.414 0Zm0 2.414 1.172 1.172-1.293 1.293-1.172-1.172 1.293-1.293Zm-2.707 2.707 1.172 1.172L3.172 17H2v-1.172L12.707 5.121Z" />
    </svg>
  );
}

export function IconDelete({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-4 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M6 0 5 1H0v2h1v15c0 .522.191 1.055.568 1.432.377.377.91.568 1.432.568h10c.522 0 1.055-.191 1.432-.568.377-.377.568-.91.568-1.432V3h1V1h-5l-1-1H6ZM3 3h10v15H3V3Zm2 2v11h2V5H5Zm4 0v11h2V5H9Z" />
    </svg>
  );
}

export function IconSynchronize({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M9 0 5 4l4 4V5c3.859 0 7 3.14 7 7 0 .88-.17 1.72-.469 2.496l1.516 1.514A8.931 8.931 0 0 0 18 12c0-4.962-4.037-9-9-9V0ZM.953 7.99A8.931 8.931 0 0 0 0 12c0 4.962 4.037 9 9 9v3l4-4-4-4v3c-3.859 0-7-3.14-7-7 0-.88.17-1.72.469-2.496L.953 7.99Z" />
    </svg>
  );
}

export function IconAttach({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-6 -1 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M4 0C1.803 0 0 1.803 0 4v12.5C0 19.526 2.474 22 5.5 22s5.5-2.474 5.5-5.5V5H9v11.5C9 18.444 7.444 20 5.5 20A3.485 3.485 0 0 1 2 16.5V4c0-1.117.883-2 2-2s2 .883 2 2v10.5c0 .287-.213.5-.5.5a.487.487 0 0 1-.5-.5V5H3v9.5C3 15.87 4.13 17 5.5 17S8 15.87 8 14.5V4c0-2.197-1.803-4-4-4Z" />
    </svg>
  );
}

export function IconExternalLink({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2 0C.907 0 0 .907 0 2v14c0 1.093.907 2 2 2h14c1.093 0 2-.907 2-2V9h-2v7H2V2h7V0H2Zm9 0v2h3.586l-9.293 9.293 1.414 1.414L16 3.414V7h2V0h-7Z" />
    </svg>
  );
}

export function IconCopy({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2 0a2 2 0 0 0-2 2v14h2V2h14V0H2Zm4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm0 2h12v12H6V6Z" />
    </svg>
  );
}

export function IconBookmark({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-4 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2.01 0c-1.096 0-2 .903-2 1.998L0 20l8-3 8 3V2c0-1.093-.907-2-2-2H2.01Zm0 2H14v15.113l-6-2.25-5.998 2.25L2.01 2Z" />
    </svg>
  );
}

export function IconMail({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -4 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm0 2h16v1.002L10 8 2 3.002V2Zm0 3.002L10 10l8-4.998V14H2V5.002Z" />
    </svg>
  );
}

export function IconNoteficationOn({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-4 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M8 0a1.5 1.5 0 0 0-1.5 1.5v.7C3.92 2.87 2 5.216 2 8v4.838L1.28 15H0v2h6.27a2 2 0 0 0 .316 2.414A2 2 0 0 0 10 18a2 2 0 0 0-.271-1H16v-2h-1.28L14 12.838V8c0-2.783-1.92-5.13-4.5-5.8v-.7A1.5 1.5 0 0 0 8 0Zm0 4c2.22 0 4 1.78 4 4v5.162L12.611 15H3.39L4 13.162V8c0-2.22 1.78-4 4-4Z" />
    </svg>
  );
}

export function IconNoteficationOff({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M10 0a1.5 1.5 0 0 0-1.5 1.5v.691a6 6 0 0 0-1.414.567l1.51 1.51A3.949 3.949 0 0 1 10 4c2.206 0 4 1.794 4 4v1.672l2 2V8a5.997 5.997 0 0 0-4.5-5.805V1.5A1.5 1.5 0 0 0 10 0ZM1.656.156.25 1.563l4.195 4.195A5.926 5.926 0 0 0 4 8v6l-2 2v1h6.277A1.982 1.982 0 0 0 8 18a2 2 0 0 0 2 2h.002a2 2 0 0 0 2-2c0-.367-.107-.704-.28-1h3.966l3.093 3.094 1.407-1.409L18 16.5l-4-4-7.053-7.053L5.52 4.02 1.656.156ZM6.06 7.371 13.687 15H5.829L6 14.828V8c0-.215.025-.424.059-.629Z" />
    </svg>
  );
}

export function IconView({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-1 -4 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M11 0C3 0 0 8 0 8s3 8 11 8 11-8 11-8-3-8-11-8Zm0 2c5.276 0 7.945 4.267 8.809 5.996C18.944 9.713 16.255 14 11 14c-5.276 0-7.945-4.267-8.809-5.996C3.057 6.287 5.745 2 11 2Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 .001 3.999A2 2 0 0 1 11 6Z" />
    </svg>
  );
}

export function IconHidden({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-1 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2.707.293 1.293 1.707l2.775 2.775c-.539.44-1.02.908-1.449 1.377C.79 7.9 0 10 0 10s3 8 11 8c1.2 0 2.29-.18 3.27-.49a9.85 9.85 0 0 0 1.978-.848l3.045 3.045 1.414-1.414-18-18ZM11 2c-1.2 0-2.29.18-3.27.49l1.66 1.66C9.89 4.05 10.43 4 11 4c5.28 0 7.94 4.27 8.81 6-.33.66-.94 1.7-1.85 2.72l1.42 1.42C21.21 12.1 22 10 22 10s-3-8-11-8ZM5.488 5.902l2.07 2.07C7.2 8.573 7 9.262 7 10c0 .08 0 .17.01.25a3.99 3.99 0 0 0 3.74 3.74c.08.01.17.01.25.01.74 0 1.428-.2 2.027-.559l1.73 1.73c-.649.31-1.368.549-2.148.679-.51.1-1.039.15-1.609.15-5.28 0-7.94-4.27-8.81-6 .33-.66.93-1.7 1.85-2.72.409-.47.9-.938 1.448-1.378Zm5.762.108 3.74 3.74a3.99 3.99 0 0 0-3.74-3.74ZM9.07 9.484l2.446 2.446c-.16.049-.337.07-.516.07-1.1 0-2-.9-2-2 0-.179.021-.357.07-.516Z" />
    </svg>
  );
}

export function IconFilter({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0v2h1l5 8v8h6v-8l5-8h1V0H0Zm3.36 2h11.283L10 9.426V16H8V9.426L3.36 2Z" />
    </svg>
  );
}

export function IconShare({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M15 0c-1.645 0-3 1.355-3 3 0 .19.022.377.057.559L4.922 7.72A2.969 2.969 0 0 0 3 7c-1.645 0-3 1.355-3 3s1.355 3 3 3a2.97 2.97 0 0 0 1.922-.72l7.135 4.16A2.963 2.963 0 0 0 12 17c0 1.645 1.355 3 3 3s3-1.355 3-3-1.355-3-3-3c-.732 0-1.398.28-1.922.723l-7.135-4.164C5.978 10.377 6 10.19 6 10c0-.191-.022-.377-.057-.559l7.135-4.162A2.97 2.97 0 0 0 15 6c1.645 0 3-1.355 3-3s-1.355-3-3-3Zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1ZM3 9c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1Zm12 7c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1Z" />
    </svg>
  );
}

export function IconSearch({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M7 0C3.146 0 0 3.146 0 7s3.146 7 7 7a6.958 6.958 0 0 0 4.574-1.719l.426.426V14l6 6 2-2-6-6h-1.293l-.426-.426A6.958 6.958 0 0 0 14 7c0-3.854-3.146-7-7-7Zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5Z" />
    </svg>
  );
}

export function IconSend({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0v18l20-9L0 0Zm2 3.094L15.127 9 2 14.906v-4.68L11 9 2 7.773v-4.68Z" />
    </svg>
  );
}

export function IconSave({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2 0C.906 0 0 .906 0 2v14c0 1.094.906 2 2 2h14c1.094 0 2-.906 2-2V4l-4-4H2Zm0 2h11.172L16 4.828V16H2V2Zm2 2v3h8V4H4Zm4.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
    </svg>
  );
}

export function IconDownload({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M8.5 0C7.683 0 7 .683 7 1.5V8H2.586L10 15.414 17.414 8H13V1.5c0-.817-.683-1.5-1.5-1.5h-3ZM9 2h2v8h1.586L10 12.586 7.414 10H9V2ZM0 18v2h20v-2H0Z" />
    </svg>
  );
}

export function IconLink({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-1 -6 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M5 0a5 5 0 0 0 0 10h4V8H5a3 3 0 1 1 0-6h4V0H5Zm8 0v2h4a3 3 0 1 1 0 6h-4v2h4a5 5 0 0 0 0-10h-4ZM6 4v2h10V4H6Z" />
    </svg>
  );
}

export function IconLinkBreak({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M5 0a5 5 0 0 0 0 10h4V8H5a3 3 0 1 1 0-6h4V0H5Zm8 0v2h4a3 3 0 1 1 0 6h-4v2h4a5 5 0 0 0 0-10h-4ZM6 4v2h10V4H6Zm10.414 8L15 13.414 17.586 16l-2.588 2.588 1.414 1.414L19 17.414 21.586 20 23 18.586 20.414 16l2.5-2.5-1.414-1.414-2.5 2.5L16.414 12Z" />
    </svg>
  );
}

export function IconLike({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-1 -1 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="m6 10 4-9a3 3 0 0 1 3 3v4h5.66a2 2 0 0 1 2 2.3l-1.38 9a2 2 0 0 1-2 1.7H6m0-11v11m0-11H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"
      />
    </svg>
  );
}

export function IconDislike({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-1 -1 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="m16 12-4 9a3 3 0 0 1-3-3v-4H3.34a2 2 0 0 1-2-2.3l1.38-9a2 2 0 0 1 2-1.7H16m0 11V1m0 11h2.67A2.31 2.31 0 0 0 21 10V3a2.31 2.31 0 0 0-2.33-2H16"
      />
    </svg>
  );
}

export function IconAccount({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2a8 8 0 0 1 8 8 7.954 7.954 0 0 1-1.281 4.33l-.77-.596C16.397 14.537 13.537 14 12 14s-4.398.537-5.95 1.734l-.769.598A7.954 7.954 0 0 1 4 12a8 8 0 0 1 8-8Zm0 1.75A3.254 3.254 0 0 0 8.75 9 3.254 3.254 0 0 0 12 12.25 3.254 3.254 0 0 0 15.25 9 3.254 3.254 0 0 0 12 5.75Zm0 2c.689 0 1.25.561 1.25 1.25s-.561 1.25-1.25 1.25-1.25-.561-1.25-1.25.561-1.25 1.25-1.25ZM12 16c3.1 0 4.768 1.169 5.549 1.754A7.966 7.966 0 0 1 12 20a7.967 7.967 0 0 1-5.549-2.246C7.231 17.169 8.9 16 12 16Zm-5.945 1.34Zm11.857.035c-.11.12-.22.242-.336.355.117-.113.226-.235.336-.355Z" />
    </svg>
  );
}

export function IconTeam({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 2c.827 0 1.5.673 1.5 1.5S12.827 9 12 9s-1.5-.673-1.5-1.5S11.173 6 12 6ZM4.5 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm15 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-15 1.723a.778.778 0 1 1 0 1.555.778.778 0 0 1 0-1.555Zm15 0a.778.778 0 1 1 0 1.555.778.778 0 0 1 0-1.555ZM12 13c-1.475 0-3.874.468-5.445 1.398A5.841 5.841 0 0 0 4.5 14C2.263 14 0 15.398 0 16.932V20h24v-3.068C24 15.398 21.737 14 19.5 14c-.711 0-1.413.155-2.055.398C15.875 13.468 13.475 13 12 13Zm0 2c2.134 0 4.622.961 5 1.566V18H7v-1.434C7.378 15.961 9.866 15 12 15Zm-7.5 1c.198 0 .377.034.559.063-.038.14-.059.286-.059.437V18H2v-.99C2.184 16.69 3.198 16 4.5 16Zm15 0c1.302 0 2.316.69 2.5 1.01V18h-3v-1.5c0-.15-.021-.297-.059-.438.182-.028.361-.062.559-.062Z" />
    </svg>
  );
}

export function IconUsers({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM8 7c.551 0 1 .449 1 1 0 .551-.449 1-1 1-.551 0-1-.449-1-1 0-.551.449-1 1-1Zm8 0c.551 0 1 .449 1 1 0 .551-.449 1-1 1-.551 0-1-.449-1-1 0-.551.449-1 1-1Zm-8 6c-3 0-7 1.464-7 3.5V19h22v-2.5c0-2.036-4-3.5-7-3.5-1.284 0-2.738.283-3.996.75C10.744 13.282 9.287 13 8 13Zm0 2c2.36 0 4.62 1.026 5 1.6v.4H3v-.4c.38-.574 2.64-1.6 5-1.6Zm8 0c2.36 0 4.62 1.026 5 1.6v.4h-6v-.5c0-.482-.23-.93-.611-1.336A8.947 8.947 0 0 1 16 15Z" />
    </svg>
  );
}

export function IconUser({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M9 0C6.803 0 5 1.803 5 4s1.803 4 4 4 4-1.803 4-4-1.803-4-4-4Zm0 2c1.116 0 2 .884 2 2s-.884 2-2 2-2-.884-2-2 .884-2 2-2Zm0 9c-1.745 0-3.813.41-5.55 1.096-.87.343-1.655.75-2.284 1.273C.537 13.892 0 14.6 0 15.5V18h18v-2.5c0-.9-.537-1.608-1.166-2.13-.629-.524-1.414-.931-2.283-1.274C12.813 11.41 10.745 11 9 11Zm0 2c1.414 0 3.346.374 4.818.955.737.29 1.359.637 1.737.951.377.314.445.529.445.594v.5H2v-.5c0-.065.068-.28.445-.594.378-.314 1-.66 1.737-.95C5.654 13.373 7.586 13 9 13Z" />
    </svg>
  );
}

export function IconPhone({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M17.023 12.488c-.63-.015-1.423-.052-1.924-.14a14.67 14.67 0 0 1-1.653-.425 1.017 1.017 0 0 0-1.019.253L10.21 14.38a15.376 15.376 0 0 1-3.798-2.792A15.376 15.376 0 0 1 3.62 7.79l2.204-2.218c.266-.267.365-.659.253-1.019-.142-.458-.329-1.11-.424-1.652-.089-.501-.125-1.294-.141-1.924A1 1 0 0 0 4.51 0H1C.562 0 0 .328 0 1c0 4.539 1.84 8.874 4.966 12.034C8.126 16.16 12.461 18 17 18c.672 0 1-.562 1-1v-3.51a1 1 0 0 0-.977-1.002Z" />
    </svg>
  );
}

export function IconComment({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M2 0C.9 0 .01.9.01 2L.002 13.998c0 1.105.895 2.002 2 2.002H4v4l4-4h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2Zm0 2h16v12H2.002L2 2Z" />
    </svg>
  );
}

export function IconLocation({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-5 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M7 .01C3.144.01.008 3.148.008 7.004c0 4.483 5.967 11.765 6.22 12.072l.772.936.771-.936c.254-.308 6.221-7.59 6.221-12.072C13.992 3.147 10.856.01 7 .01Zm0 2a5 5 0 0 1 4.992 4.994c0 2.705-3.114 7.357-4.992 9.822-1.878-2.463-4.992-7.113-4.992-9.822A5 5 0 0 1 7 2.01ZM7 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
    </svg>
  );
}

export function IconDivider({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-12 -8 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0h1v8H0z" />
    </svg>
  );
}

export function IconSettings({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -2 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m7.666 0-.49 2.523a7.951 7.951 0 0 0-2.244 1.291L2.508 2.98.172 7.02 2.113 8.71A8.006 8.006 0 0 0 2 10c0 .409.04.833.113 1.291v.002L.172 12.981l2.336 4.04 2.422-.834a7.953 7.953 0 0 0 2.246 1.29L7.666 20h4.668l.49-2.523a7.942 7.942 0 0 0 2.244-1.291l2.424.835 2.334-4.04-1.94-1.69c.075-.458.114-.883.114-1.291 0-.408-.039-.832-.113-1.29V8.71l1.941-1.69-2.336-4.04-2.422.833a7.951 7.951 0 0 0-2.246-1.289L12.334 0H7.666Zm1.648 2h1.371l.39 2 1.042.395a5.94 5.94 0 0 1 1.684.964l.863.707 1.922-.66.686 1.186-1.536 1.336.176 1.1v.001c.061.375.088.69.088.971s-.027.596-.088.97l-.178 1.1 1.536 1.336-.686 1.188-1.92-.662-.865.709a5.932 5.932 0 0 1-1.682.964h-.002L11.072 16l-.388 2h-1.37l-.388-2-1.043-.395a5.943 5.943 0 0 1-1.684-.964l-.863-.707-1.922.66-.685-1.186 1.537-1.338-.178-1.095v-.002A6.16 6.16 0 0 1 4 10c0-.281.027-.596.088-.97l.178-1.1-1.537-1.336.685-1.188 1.922.662.863-.709a5.941 5.941 0 0 1 1.684-.964L8.926 4l.388-2ZM10 6c-2.197 0-4 1.803-4 4s1.803 4 4 4 4-1.803 4-4-1.803-4-4-4Zm0 2c1.111 0 2 .889 2 2s-.889 2-2 2-2-.889-2-2 .889-2 2-2Z" />
    </svg>
  );
}

export function IconMap({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m8.969 2.936-5.34 2.136A.999.999 0 0 0 3 6v14a1 1 0 0 0 1.371.928l4.66-1.864 6 2 5.34-2.136A.999.999 0 0 0 21 18V4a1 1 0 0 0-1.371-.928l-4.66 1.864-6-2ZM10 5.386l4 1.335v11.892l-4-1.334V5.387Zm-2 .09v11.846l-3 1.201V6.678l3-1.201Zm11 0v11.846l-3 1.201V6.678l3-1.201Z" />
    </svg>
  );
}

export function IconHome({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M12 2.1 1 12h3v9h7v-6h2v6h7v-9h3L12 2.1Zm0 2.691 6 5.4V19h-3v-6H9v6H6v-8.809l6-5.4Z" />
    </svg>
  );
}

export function IconHomeSelected({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M12 2.1 1 12h3v9h6v-6h4v6h6v-9h3L12 2.1Z" />
    </svg>
  );
}

export function IconPreference({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M10 2c-1.293 0-2.395.843-2.813 2H2v2h5.188C7.604 7.157 8.707 8 10 8c1.645 0 3-1.355 3-3s-1.355-3-3-3Zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1Zm5 0v2h7V4h-7Zm0 5c-1.293 0-2.395.843-2.813 2H2v2h10.188c.417 1.157 1.519 2 2.812 2 1.645 0 3-1.355 3-3s-1.355-3-3-3Zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1Zm5 0v2h2v-2h-2ZM7 16c-1.293 0-2.395.843-2.813 2H2v2h2.188c.417 1.157 1.519 2 2.812 2 1.645 0 3-1.355 3-3s-1.355-3-3-3Zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1Zm5 0v2h10v-2H12Z" />
    </svg>
  );
}

export function IconCalendar({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M6 1v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6ZM5 5h14v2H5V5Zm0 4h14v10H5V9Z" />
    </svg>
  );
}

export function IconInbox({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M5.75 3a1 1 0 0 0-.982.809l-1.75 9A1 1 0 0 0 3 13v6c0 1.093.907 2 2 2h14c1.093 0 2-.907 2-2v-6a1 1 0 0 0-.018-.191l-1.75-9A1 1 0 0 0 18.25 3H5.75Zm.824 2h10.852l1.555 8H15a1 1 0 0 0-.895.553L13.383 15h-2.766l-.722-1.447A1 1 0 0 0 9 13H5.02l1.554-8ZM5 15h3.383l.722 1.447A1 1 0 0 0 10 17h4a1 1 0 0 0 .895-.553L15.617 15H19v4H5v-4Z" />
    </svg>
  );
}

export function IconContext({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z" />
    </svg>
  );
}

export function IconSkipToStart({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -6 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0v12h2V6.354L10 12V6.354L18 12V0l-8 5.646V0L2 5.646V0H0Zm8 3.86v4.28L4.969 6 8 3.86Zm8 0v4.28L12.969 6 16 3.86Z" />
    </svg>
  );
}

export function IconRewind({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -6 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M9 0 .5 6 9 12V0Zm9 0L9.5 6l8.5 6V0ZM7 3.86v4.28L3.969 6 7 3.86Zm9 0v4.28L12.969 6 16 3.86Z" />
    </svg>
  );
}

export function IconPlay({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-7 -6 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0v14l11-7L0 0Zm2 3.643L7.275 7 2 10.357V3.643Z" />
    </svg>
  );
}

export function IconPause({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-7 -5 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0v14h2V0H0Zm8 0v14h2V0H8Z" />
    </svg>
  );
}

export function IconFastForward({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-4 -6 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0v12l8.5-6L0 0Zm9 0v12l8.5-6L9 0ZM2 3.86 5.031 6 2 8.14V3.86Zm9 0L14.031 6 11 8.14V3.86Z" />
    </svg>
  );
}

export function IconEnd({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -6 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0v12l8-5.646V12l8-5.646V12h2V0h-2v5.646L8 0v5.646L0 0Zm2 3.86L5.031 6 2 8.14V3.86Zm8 0L13.031 6 10 8.14V3.86Z" />
    </svg>
  );
}

export function IconStop({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-5 -5 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M0 0v14h14V0H0Zm12 12H2V2h10v10Z" />
    </svg>
  );
}

export function IconFullStop({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-6 -6 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M6 0C2.698 0 0 2.698 0 6s2.698 6 6 6 6-2.698 6-6-2.698-6-6-6Zm0 2c2.221 0 4 1.779 4 4s-1.779 4-4 4-4-1.779-4-4 1.779-4 4-4Z" />
    </svg>
  );
}

export function IconMute({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-3 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M10 0 4 6H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2l6 6V0ZM8 4.828v8.344l-2.586-2.586L4.828 10H2V8h2.828l.586-.586L8 4.828Zm5.707.465-1.414 1.414L14.586 9l-2.293 2.293 1.414 1.414L16 10.414l2.293 2.293 1.414-1.414L17.414 9l2.293-2.293-1.414-1.414L16 7.586l-2.293-2.293Z" />
    </svg>
  );
}

export function IconVolume({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "-2 -3 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M10 0 4 6H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2l6 6V0Zm8.484.516L17.07 1.93a9.983 9.983 0 0 1 0 14.14l1.414 1.414c4.679-4.677 4.678-12.29 0-16.968Zm-2.828 2.828-1.414 1.414a5.983 5.983 0 0 1 0 8.484l1.414 1.414c3.117-3.115 3.116-8.196 0-11.312ZM8 4.828v8.344l-2.586-2.586L4.828 10H2V8h2.828l.586-.586L8 4.828Zm4.828 1.344-1.414 1.414c.79.79.79 2.038 0 2.828l1.414 1.416a4.017 4.017 0 0 0 0-5.658Z" />
    </svg>
  );
}

export function IconNewTag({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "1 1 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m12.172 3-9.584 9.586A1.98 1.98 0 0 0 2 14c0 .535.208 1.038.586 1.414l6.002 6c.378.377.879.586 1.412.586.535 0 1.038-.208 1.414-.586L21 11.828V3h-8.828ZM13 5h6v6l-9 9-6-6 9-9Zm3 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 9v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Z" />
    </svg>
  );
}

export function IconTag({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="m12.172 3-9.586 9.586C2.208 12.964 2 13.466 2 14c0 .534.208 1.036.586 1.414l6 6c.378.378.88.586 1.414.586.534 0 1.036-.208 1.414-.586L21 11.828V3h-8.828ZM13 5h6v6l-9 9-6-6 9-9Zm3 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export function IconTags({
  size = 14,
  color = defaultDesignTokens.palette.neutral.defaultText,
  viewBox = "0 0 24 24",
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
    >
      <path d="M14.783 4 6.62 12.164c-.4.4-.619.93-.619 1.494 0 .565.22 1.097.62 1.496l4.226 4.227c.399.399.932.619 1.496.619.565 0 1.096-.22 1.494-.62L22 11.218V4h-7.217Zm-5.42.293L1.586 12.07c-.378.378-.586.88-.586 1.414 0 .535.208 1.036.586 1.414l5.363 5.366 1.414-1.414L3 13.484l7.777-7.779-1.414-1.412ZM15.611 6H20v4.389l-7.578 7.578h-.162L8.033 13.74v-.162L15.611 6ZM17 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
}
