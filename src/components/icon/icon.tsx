import React from "react";
import { useColorPalette } from "../../providers/colorProvider";

export function IconHeartOutlined({
  size = 14,
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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

export function IconActionClose({
  size = 14,
  color = useColorPalette().neutral.defaultText,
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

export function IconActionDone({
  size = 14,
  color = useColorPalette().neutral.defaultText,
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

export function IconActionUnavailable({
  size = 14,
  color = useColorPalette().neutral.defaultText,
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

export function IconActionPlus({
  size = 14,
  color = useColorPalette().neutral.defaultText,
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

export function IconActionMinus({
  size = 14,
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
  color = useColorPalette().neutral.defaultText,
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
