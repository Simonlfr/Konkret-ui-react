import React from "react";
import { defaultDesignTokens } from "../../utils/defaultDesignTokens";

export function IconHeartOutlined({
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
            <path d="m10.65 19.8-1.725-1.575a68.355 68.355 0 0 1-4.788-4.813C2.714 11.822 2 10.067 2 8.15c0-1.567.525-2.875 1.575-3.925C4.625 3.175 5.933 2.65 7.5 2.65c.883 0 1.717.188 2.5.563.783.375 1.45.887 2 1.537a5.956 5.956 0 0 1 2-1.537 5.717 5.717 0 0 1 2.5-.563c1.567 0 2.875.525 3.925 1.575C21.475 5.275 22 6.583 22 8.15c0 1.917-.708 3.675-2.125 5.275a59.847 59.847 0 0 1-4.825 4.825l-1.7 1.55a1.89 1.89 0 0 1-1.35.55 1.89 1.89 0 0 1-1.35-.55Zm.4-13.05c-.483-.683-1-1.204-1.55-1.562-.55-.359-1.217-.538-2-.538-1 0-1.833.333-2.5 1s-1 1.5-1 2.5c0 .867.308 1.788.925 2.762.617.975 1.354 1.921 2.213 2.838a38.412 38.412 0 0 0 2.65 2.575c.908.8 1.645 1.458 2.212 1.975a180.24 180.24 0 0 1 2.213-1.975c.908-.8 1.791-1.658 2.65-2.575a19.092 19.092 0 0 0 2.212-2.838c.617-.974.925-1.895.925-2.762 0-1-.333-1.833-1-2.5s-1.5-1-2.5-1c-.783 0-1.45.18-2 .538-.55.358-1.067.879-1.55 1.562a1.138 1.138 0 0 1-.95.5 1.138 1.138 0 0 1-.95-.5Z" />
        </svg>
    );
}

export function IconHeartFilled({
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
            <path d="m10.65 19.8-1.725-1.575a68.355 68.355 0 0 1-4.788-4.813C2.714 11.822 2 10.067 2 8.15c0-1.567.525-2.875 1.575-3.925C4.625 3.175 5.933 2.65 7.5 2.65c.883 0 1.717.188 2.5.563.783.375 1.45.887 2 1.537a5.956 5.956 0 0 1 2-1.537 5.717 5.717 0 0 1 2.5-.563c1.567 0 2.875.525 3.925 1.575C21.475 5.275 22 6.583 22 8.15c0 1.917-.708 3.675-2.125 5.275a59.847 59.847 0 0 1-4.825 4.825l-1.7 1.55c-.383.35-.833.525-1.35.525-.517 0-.967-.175-1.35-.525Z" />
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
            <path d="m12 13.4-4.9 4.9a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7l4.9-4.9-4.9-4.9a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l4.9 4.9 4.9-4.9a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7L13.4 12l4.9 4.9a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7.948.948 0 0 1-.7.275.949.949 0 0 1-.7-.275L12 13.4Z" />
        </svg>
    );
}

export function IconDone({
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
            <path d="M9.55 17.575c-.133 0-.258-.02-.375-.063a.878.878 0 0 1-.325-.212L4.55 13c-.183-.183-.27-.42-.263-.713.009-.291.105-.529.288-.712a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275L9.55 15.15l8.475-8.475c.183-.183.42-.275.712-.275s.53.092.713.275c.183.183.275.42.275.712s-.092.53-.275.713l-9.2 9.2c-.1.1-.208.17-.325.212a1.106 1.106 0 0 1-.375.063Z" />
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
            <path d="M12 20a.968.968 0 0 1-.713-.288A.968.968 0 0 1 11 19v-6H5a.967.967 0 0 1-.713-.287A.968.968 0 0 1 4 12c0-.283.096-.52.287-.713A.967.967 0 0 1 5 11h6V5c0-.283.096-.52.287-.713A.968.968 0 0 1 12 4c.283 0 .52.096.713.287.191.192.287.43.287.713v6h6c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.713A.968.968 0 0 1 19 13h-6v6c0 .283-.096.52-.287.712A.968.968 0 0 1 12 20Z" />
        </svg>
    );
}

export function IconMinus({
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
            <path d="M5.143 13c-.324 0-.595-.096-.814-.287A.91.91 0 0 1 4 12c0-.283.11-.52.329-.713.219-.191.49-.287.814-.287h13.714c.324 0 .595.096.814.287A.91.91 0 0 1 20 12a.91.91 0 0 1-.329.713c-.219.191-.49.287-.814.287H5.143Z" />
        </svg>
    );
}

export function IconChevronBack({
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
            <path d="m13.3 17.3-4.6-4.6a.877.877 0 0 1-.212-.325A1.106 1.106 0 0 1 8.425 12c0-.133.02-.258.063-.375A.878.878 0 0 1 8.7 11.3l4.6-4.6a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7L10.8 12l3.9 3.9a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275Z" />
        </svg>
    );
}

export function IconChevronUp({
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
            <path d="M6.7 14.675a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7l4.6-4.6c.1-.1.208-.17.325-.212.117-.042.242-.063.375-.063s.258.02.375.063a.877.877 0 0 1 .325.212l4.625 4.625a.918.918 0 0 1 .275.675c0 .267-.1.5-.3.7a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275l-3.9-3.9L8.075 14.7a.917.917 0 0 1-.675.275.96.96 0 0 1-.7-.3Z" />
        </svg>
    );
}

export function IconChevronDown({
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
            <path d="M12 14.95c-.133 0-.258-.02-.375-.063a.878.878 0 0 1-.325-.212L6.675 10.05a.892.892 0 0 1-.262-.687.977.977 0 0 1 .287-.688.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l3.9 3.9 3.925-3.925a.892.892 0 0 1 .688-.262.977.977 0 0 1 .687.287.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7l-4.6 4.6c-.1.1-.208.17-.325.212a1.105 1.105 0 0 1-.375.063Z" />
        </svg>
    );
}

export function IconChevronForward({
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
            <path d="M8.7 17.3a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7l3.9-3.9-3.9-3.9a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l4.6 4.6c.1.1.17.208.213.325.041.117.062.242.062.375s-.02.258-.063.375a.876.876 0 0 1-.212.325l-4.6 4.6a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275Z" />
        </svg>
    );
}

export function IconArrowBack({
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
            <path d="m10.875 19.3-6.6-6.6a.877.877 0 0 1-.213-.325A1.107 1.107 0 0 1 4 12c0-.133.02-.258.063-.375a.877.877 0 0 1 .212-.325l6.6-6.6a.977.977 0 0 1 .688-.288.93.93 0 0 1 .712.288c.2.183.304.412.313.687a.93.93 0 0 1-.288.713L7.4 11h11.175c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713a.968.968 0 0 1-.713.287H7.4l4.9 4.9c.183.183.28.417.287.7a.87.87 0 0 1-.287.7c-.183.2-.417.3-.7.3a.988.988 0 0 1-.725-.3Z" />
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
            <path d="M12 20a.968.968 0 0 1-.713-.288A.968.968 0 0 1 11 19V7.825L6.125 12.7c-.2.2-.437.3-.712.3a.973.973 0 0 1-.713-.3.96.96 0 0 1-.3-.7c0-.267.1-.5.3-.7l6.6-6.6c.1-.1.208-.17.325-.212.117-.042.242-.063.375-.063s.262.02.387.063c.125.041.23.112.313.212l6.6 6.6c.2.2.3.433.3.7 0 .267-.1.5-.3.7-.2.2-.438.3-.713.3a.973.973 0 0 1-.712-.3L13 7.825V19c0 .283-.096.52-.287.712A.967.967 0 0 1 12 20Z" />
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
            <path d="M12 19.575c-.133 0-.258-.02-.375-.063a.878.878 0 0 1-.325-.212l-6.6-6.6c-.2-.2-.3-.438-.3-.712 0-.275.1-.513.3-.713.2-.2.433-.3.7-.3.267 0 .5.1.7.3l4.9 4.9v-11.2c0-.283.096-.517.287-.7A.99.99 0 0 1 12 4c.283 0 .52.096.713.287.191.192.287.43.287.713v11.175l4.9-4.9c.2-.2.433-.3.7-.3.267 0 .5.1.7.3.2.2.3.438.3.713 0 .274-.1.512-.3.712l-6.6 6.6c-.1.1-.208.17-.325.212a1.105 1.105 0 0 1-.375.063Z" />
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
            <path d="M11.3 19.3a.992.992 0 0 1-.288-.7.908.908 0 0 1 .263-.7l4.9-4.9H5a.967.967 0 0 1-.713-.287A.967.967 0 0 1 4 12c0-.283.096-.52.287-.713A.968.968 0 0 1 5 11h11.175l-4.9-4.9a.908.908 0 0 1-.263-.7.992.992 0 0 1 .288-.7.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l6.6 6.6c.1.083.17.188.212.313a1.217 1.217 0 0 1 0 .762.877.877 0 0 1-.212.325l-6.6 6.6a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275Z" />
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
            <path d="m12.3 15.3-2.6-2.6c-.1-.1-.175-.208-.225-.325A.942.942 0 0 1 9.4 12c0-.133.025-.258.075-.375.05-.117.125-.225.225-.325l2.6-2.6c.317-.317.68-.388 1.087-.213.409.175.613.488.613.938v5.15c0 .45-.204.763-.613.938-.408.175-.77.104-1.087-.213Z" />
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
            <path d="m11.3 14.3-2.6-2.6c-.317-.317-.388-.68-.213-1.087.175-.409.488-.613.938-.613h5.15c.45 0 .763.204.938.613.175.408.104.77-.213 1.087l-2.6 2.6c-.1.1-.208.175-.325.225A.942.942 0 0 1 12 14.6a.941.941 0 0 1-.375-.075 1.038 1.038 0 0 1-.325-.225Z" />
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
            <path d="M9.425 14c-.45 0-.763-.204-.938-.613-.175-.408-.104-.77.213-1.087l2.6-2.6c.1-.1.208-.175.325-.225A.941.941 0 0 1 12 9.4c.133 0 .258.025.375.075.117.05.225.125.325.225l2.6 2.6c.317.317.387.68.212 1.087-.175.409-.487.613-.937.613h-5.15Z" />
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
            <path d="M11.7 15.3c-.317.317-.68.387-1.087.212-.409-.175-.613-.487-.613-.937v-5.15c0-.45.204-.763.613-.938.408-.175.77-.104 1.087.213l2.6 2.6c.1.1.175.208.225.325.05.117.075.242.075.375a.942.942 0 0 1-.075.375c-.05.117-.125.225-.225.325l-2.6 2.6Z" />
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
            <path d="M8.225 8.325C8.042 8.142 7.95 7.9 7.95 7.6s.092-.542.275-.725L11.3 3.8c.1-.1.208-.17.325-.213a1.218 1.218 0 0 1 .762 0c.125.042.23.113.313.213l3.1 3.1c.183.183.27.42.262.712-.008.292-.104.53-.287.713-.183.183-.425.275-.725.275s-.542-.092-.725-.275L12 6 9.65 8.35c-.183.183-.42.27-.713.262a1.007 1.007 0 0 1-.712-.287ZM12 20.575a.941.941 0 0 1-.375-.075 1.315 1.315 0 0 1-.325-.2l-3.075-3.075c-.183-.183-.275-.425-.275-.725s.092-.542.275-.725c.183-.183.425-.275.725-.275s.542.092.725.275L12 18.1l2.35-2.35c.183-.183.42-.27.713-.262.291.008.529.104.712.287.183.183.275.425.275.725s-.092.542-.275.725L12.7 20.3a1.034 1.034 0 0 1-.7.275Z" />
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
            <path d="M4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h6l2 2h8c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v10c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Z" />
        </svg>
    );
}

export function IconFolderClosed({
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
            <path d="M4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h6l2 2h8c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412H11.175l-2-2H4v12l2.4-8h17.1l-2.575 8.575a1.95 1.95 0 0 1-.738 1.038A1.985 1.985 0 0 1 19 20H4Zm2.1-2H19l1.8-6H7.9l-1.8 6Z" />
        </svg>
    );
}

export function IconFile({
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
            <path d="M6 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 20V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 6 2h7.175a1.975 1.975 0 0 1 1.4.575l4.85 4.85a1.975 1.975 0 0 1 .575 1.4V20c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 22H6Zm7-14V4H6v16h12V9h-4a.968.968 0 0 1-.713-.287A.967.967 0 0 1 13 8Z" />
        </svg>
    );
}

export function IconDocument({
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
            <path d="M9 18h6c.283 0 .52-.096.713-.288A.968.968 0 0 0 16 17a.968.968 0 0 0-.287-.712A.968.968 0 0 0 15 16H9a.967.967 0 0 0-.713.288A.968.968 0 0 0 8 17c0 .283.096.52.287.712.192.192.43.288.713.288Zm0-4h6c.283 0 .52-.096.713-.287A.968.968 0 0 0 16 13a.968.968 0 0 0-.287-.713A.968.968 0 0 0 15 12H9a.967.967 0 0 0-.713.287A.968.968 0 0 0 8 13c0 .283.096.52.287.713.192.191.43.287.713.287Zm-3 8c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 20V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 6 2h7.175a1.975 1.975 0 0 1 1.4.575l4.85 4.85a1.975 1.975 0 0 1 .575 1.4V20c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 22H6Zm7-14V4H6v16h12V9h-4a.968.968 0 0 1-.713-.287A.967.967 0 0 1 13 8Z" />
        </svg>
    );
}

export function IconEdit({
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
            <path d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2 1.4-1.4a1.92 1.92 0 0 1 1.413-.575c.558 0 1.029.192 1.412.575l1.4 1.4c.383.383.583.846.6 1.388a1.807 1.807 0 0 1-.55 1.387L19.3 8.925ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6 4.25 4.25Zm-3.525-.725-.7-.7 1.4 1.4-.7-.7Z" />
        </svg>
    );
}

export function IconDelete({
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
            <path d="M7 21c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 19V6a.968.968 0 0 1-.713-.287A.968.968 0 0 1 4 5c0-.283.096-.52.287-.713A.968.968 0 0 1 5 4h4c0-.283.096-.52.287-.712A.968.968 0 0 1 10 3h4c.283 0 .52.096.713.288.191.191.287.429.287.712h4c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.713A.968.968 0 0 1 19 6v13c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 21H7ZM7 6v13h10V6H7Zm2 10c0 .283.096.52.287.712.192.192.43.288.713.288s.52-.096.713-.288A.968.968 0 0 0 11 16V9a.967.967 0 0 0-.287-.713A.968.968 0 0 0 10 8a.968.968 0 0 0-.713.287A.968.968 0 0 0 9 9v7Zm4 0c0 .283.096.52.287.712.192.192.43.288.713.288s.52-.096.713-.288A.968.968 0 0 0 15 16V9a.967.967 0 0 0-.287-.713A.968.968 0 0 0 14 8a.968.968 0 0 0-.713.287A.967.967 0 0 0 13 9v7Z" />
        </svg>
    );
}

export function IconSynchronize({
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
            <path d="M4.475 14.7a6.838 6.838 0 0 1-.362-1.313A7.974 7.974 0 0 1 4 12.05c0-2.233.775-4.133 2.325-5.7C7.875 4.783 9.767 4 12 4h.175l-.9-.9A.948.948 0 0 1 11 2.4c0-.283.092-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l2.6 2.6c.1.1.17.208.213.325.041.117.062.242.062.375s-.02.258-.063.375a.878.878 0 0 1-.212.325l-2.6 2.6a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7l.9-.9H12c-1.667 0-3.083.588-4.25 1.763C6.583 8.938 6 10.367 6 12.05c0 .333.03.658.088.975.058.317.145.633.262.95a.972.972 0 0 1 .05.537.887.887 0 0 1-.25.488c-.3.3-.62.42-.963.363-.341-.059-.579-.28-.712-.663Zm6.85 7.6-2.6-2.6a.877.877 0 0 1-.213-.325A1.106 1.106 0 0 1 8.45 19c0-.133.02-.258.063-.375a.878.878 0 0 1 .212-.325l2.6-2.6a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275a.949.949 0 0 1 .275.7.948.948 0 0 1-.275.7l-.9.9H12c1.667 0 3.083-.587 4.25-1.762C17.417 15.063 18 13.633 18 11.95c0-.333-.03-.658-.087-.975a5.765 5.765 0 0 0-.263-.95.972.972 0 0 1-.05-.537.887.887 0 0 1 .25-.488c.3-.3.62-.42.962-.362.342.058.58.279.713.662.167.433.288.87.363 1.313.074.441.112.887.112 1.337 0 2.233-.775 4.133-2.325 5.7C16.125 19.217 14.233 20 12 20h-.175l.9.9a.949.949 0 0 1 .275.7.948.948 0 0 1-.275.7.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275Z" />
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
            <path d="M5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h6c.283 0 .52.096.713.288.191.191.287.429.287.712s-.096.52-.287.713A.968.968 0 0 1 11 5H5v14h14v-6c0-.283.096-.52.288-.713A.968.968 0 0 1 20 12c.283 0 .52.096.712.287.192.192.288.43.288.713v6c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5Zm4-6a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7L17.6 5H15a.968.968 0 0 1-.713-.287A.967.967 0 0 1 14 4c0-.283.096-.52.287-.712A.968.968 0 0 1 15 3h5c.283 0 .52.096.712.288.192.191.288.429.288.712v5c0 .283-.096.52-.288.713A.968.968 0 0 1 20 10a.968.968 0 0 1-.712-.287A.967.967 0 0 1 19 9V6.4l-8.625 8.625a.918.918 0 0 1-.675.275.96.96 0 0 1-.7-.3Z" />
        </svg>
    );
}

export function IconCopy({
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
            <path d="M9 18c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 7 16V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 9 2h9c.55 0 1.02.196 1.413.587C19.803 2.98 20 3.45 20 4v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 18H9Zm0-2h9V4H9v12Zm-4 6c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 20V7c0-.283.096-.52.288-.713A.968.968 0 0 1 4 6c.283 0 .52.096.713.287.191.192.287.43.287.713v13h10c.283 0 .52.096.713.288.191.191.287.429.287.712s-.096.52-.287.712A.968.968 0 0 1 15 22H5Z" />
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
            <path d="M5 19a.967.967 0 0 1-.713-.288A.968.968 0 0 1 4 18c0-.283.096-.52.287-.712A.967.967 0 0 1 5 17h1v-7c0-1.383.417-2.612 1.25-3.688.833-1.075 1.917-1.779 3.25-2.112v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 12 2c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C17.583 7.388 18 8.617 18 10v7h1c.283 0 .52.096.712.288.192.191.288.429.288.712s-.096.52-.288.712A.968.968 0 0 1 19 19H5Zm7 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 20h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22Zm-4-5h8v-7c0-1.1-.392-2.042-1.175-2.825C14.042 6.392 13.1 6 12 6s-2.042.392-2.825 1.175C8.392 7.958 8 8.9 8 10v7Z" />
        </svg>
    );
}

export function IconNoteficationOff({
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
            <path d="M5 19a.967.967 0 0 1-.713-.288A.968.968 0 0 1 4 18c0-.283.096-.52.287-.712A.967.967 0 0 1 5 17h1v-7c0-.55.07-1.092.212-1.625A6.1 6.1 0 0 1 6.85 6.85l1.5 1.5A4.025 4.025 0 0 0 8 10v7h6.2L2.1 4.9a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l17 17c.183.183.28.413.288.688a.93.93 0 0 1-.288.712.949.949 0 0 1-.7.275.948.948 0 0 1-.7-.275L16.15 19H5Zm13-3.85-2-2V10c0-1.1-.392-2.042-1.175-2.825C14.042 6.392 13.1 6 12 6c-.45 0-.87.07-1.262.213A4.162 4.162 0 0 0 9.65 6.8L8.2 5.35c.333-.25.692-.48 1.075-.688A4.824 4.824 0 0 1 10.5 4.2v-.7c0-.417.146-.77.438-1.063A1.446 1.446 0 0 1 12 2c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7a5.926 5.926 0 0 1 3.225 2.087C17.575 7.346 18 8.583 18 10v5.15ZM12 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 20h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22Z" />
        </svg>
    );
}

export function IconView({
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
            <path d="M12 16c1.25 0 2.313-.438 3.188-1.313.874-.874 1.312-1.937 1.312-3.187 0-1.25-.438-2.313-1.313-3.188C14.313 7.439 13.25 7 12 7c-1.25 0-2.312.438-3.187 1.313C7.938 9.187 7.5 10.25 7.5 11.5c0 1.25.438 2.313 1.313 3.188C9.688 15.562 10.75 16 12 16Zm0-1.8c-.75 0-1.387-.262-1.912-.787A2.604 2.604 0 0 1 9.3 11.5c0-.75.263-1.387.787-1.912A2.604 2.604 0 0 1 12 8.8c.75 0 1.387.262 1.912.787.525.526.788 1.163.788 1.913s-.262 1.387-.787 1.912A2.604 2.604 0 0 1 12 14.2Zm0 4.8c-2.317 0-4.433-.613-6.35-1.837-1.917-1.226-3.367-2.88-4.35-4.963a.812.812 0 0 1-.1-.313 2.93 2.93 0 0 1 0-.774.812.812 0 0 1 .1-.313c.983-2.083 2.433-3.738 4.35-4.963C7.567 4.614 9.683 4 12 4c2.317 0 4.433.612 6.35 1.838 1.917 1.224 3.367 2.879 4.35 4.962a.81.81 0 0 1 .1.313 2.925 2.925 0 0 1 0 .774.81.81 0 0 1-.1.313c-.983 2.083-2.433 3.738-4.35 4.963C16.433 18.387 14.317 19 12 19Zm0-2a9.544 9.544 0 0 0 5.188-1.488A9.773 9.773 0 0 0 20.8 11.5a9.773 9.773 0 0 0-3.613-4.013A9.544 9.544 0 0 0 12 6a9.545 9.545 0 0 0-5.187 1.487A9.773 9.773 0 0 0 3.2 11.5a9.773 9.773 0 0 0 3.613 4.012A9.544 9.544 0 0 0 12 17Z" />
        </svg>
    );
}

export function IconHidden({
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
            <path d="m16.1 13.3-1.45-1.45c.15-.783-.075-1.517-.675-2.2-.6-.683-1.375-.95-2.325-.8L10.2 7.4c.283-.133.57-.233.863-.3A4.2 4.2 0 0 1 12 7c1.25 0 2.313.437 3.188 1.312.874.875 1.312 1.938 1.312 3.188 0 .333-.033.646-.1.938-.067.291-.167.579-.3.862Zm3.2 3.15-1.45-1.4a10.947 10.947 0 0 0 1.688-1.588A8.898 8.898 0 0 0 20.8 11.5c-.833-1.683-2.03-3.02-3.588-4.013C15.654 6.496 13.917 6 12 6c-.483 0-.958.033-1.425.1a9.624 9.624 0 0 0-1.375.3L7.65 4.85A11.08 11.08 0 0 1 12 4c2.383 0 4.525.63 6.425 1.887 1.9 1.259 3.325 2.896 4.275 4.913a.81.81 0 0 1 .1.313c.017.125.025.254.025.387a1.972 1.972 0 0 1-.125.7 10.896 10.896 0 0 1-3.4 4.25Zm-.2 5.45-3.5-3.45c-.583.183-1.17.32-1.762.413-.592.091-1.205.137-1.838.137-2.383 0-4.525-.63-6.425-1.887-1.9-1.259-3.325-2.896-4.275-4.913a.813.813 0 0 1-.1-.313 2.93 2.93 0 0 1 0-.762.796.796 0 0 1 .1-.3c.35-.75.767-1.442 1.25-2.075A13.291 13.291 0 0 1 4.15 7L2.075 4.9a.933.933 0 0 1-.275-.688c0-.275.1-.512.3-.712a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l17 17c.183.183.28.413.288.688a.93.93 0 0 1-.288.712.948.948 0 0 1-.7.275.949.949 0 0 1-.7-.275ZM5.55 8.4c-.483.433-.925.908-1.325 1.425A9.013 9.013 0 0 0 3.2 11.5c.833 1.683 2.03 3.02 3.588 4.012C8.346 16.505 10.083 17 12 17c.333 0 .658-.02.975-.063.317-.041.642-.087.975-.137l-.9-.95c-.183.05-.358.088-.525.113A3.537 3.537 0 0 1 12 16c-1.25 0-2.312-.438-3.187-1.313C7.938 13.813 7.5 12.75 7.5 11.5c0-.183.013-.358.038-.525.025-.167.062-.342.112-.525L5.55 8.4Z" />
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
            <path d="M18 22a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 15 19c0-.117.008-.238.025-.363s.042-.237.075-.337l-7.05-4.1c-.283.25-.6.446-.95.588-.35.141-.717.212-1.1.212a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 3 12c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 6 9c.383 0 .75.07 1.1.213.35.141.667.337.95.587l7.05-4.1a1.843 1.843 0 0 1-.075-.338A2.738 2.738 0 0 1 15 5c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 18 2c.833 0 1.542.292 2.125.875S21 4.167 21 5s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 8c-.383 0-.75-.07-1.1-.213a3.293 3.293 0 0 1-.95-.587L8.9 11.3c.033.1.058.212.075.337a2.742 2.742 0 0 1 0 .726 1.838 1.838 0 0 1-.075.337l7.05 4.1c.283-.25.6-.446.95-.588.35-.141.717-.212 1.1-.212.833 0 1.542.292 2.125.875S21 18.167 21 19s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 22Zm0-16c.283 0 .52-.096.712-.287A.967.967 0 0 0 19 5a.967.967 0 0 0-.288-.713A.968.968 0 0 0 18 4a.968.968 0 0 0-.712.287A.967.967 0 0 0 17 5c0 .283.096.52.288.713.191.191.429.287.712.287ZM6 13c.283 0 .52-.096.713-.287A.968.968 0 0 0 7 12a.968.968 0 0 0-.287-.713A.967.967 0 0 0 6 11a.967.967 0 0 0-.713.287A.968.968 0 0 0 5 12c0 .283.096.52.287.713.192.191.43.287.713.287Zm12 7c.283 0 .52-.096.712-.288A.968.968 0 0 0 19 19a.968.968 0 0 0-.288-.712A.968.968 0 0 0 18 18a.968.968 0 0 0-.712.288A.968.968 0 0 0 17 19c0 .283.096.52.288.712.191.192.429.288.712.288Z" />
        </svg>
    );
}

export function IconSearch({
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
            <path d="m18.9 20.3-5.6-5.6A6.096 6.096 0 0 1 9.5 16c-1.817 0-3.354-.63-4.612-1.887C3.629 12.854 3 11.317 3 9.5c0-1.817.63-3.354 1.888-4.612C6.146 3.629 7.683 3 9.5 3c1.817 0 3.354.63 4.613 1.888C15.37 6.146 16 7.683 16 9.5a6.096 6.096 0 0 1-1.3 3.8l5.625 5.625a.918.918 0 0 1 .275.675c0 .267-.1.5-.3.7a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275ZM9.5 14c1.25 0 2.313-.438 3.188-1.313C13.562 11.813 14 10.75 14 9.5c0-1.25-.438-2.313-1.313-3.188C11.813 5.438 10.75 5 9.5 5c-1.25 0-2.313.438-3.188 1.313S5 8.25 5 9.5c0 1.25.438 2.313 1.313 3.188C7.188 13.562 8.25 14 9.5 14Z" />
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
            <path d="M5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h11.175a1.975 1.975 0 0 1 1.4.575l2.85 2.85a1.975 1.975 0 0 1 .575 1.4V19c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5ZM19 7.85 16.15 5H5v14h14V7.85ZM12 18c.833 0 1.542-.292 2.125-.875A2.893 2.893 0 0 0 15 15c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 12 12c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 9 15c0 .833.292 1.542.875 2.125A2.893 2.893 0 0 0 12 18Zm-5-8h7c.283 0 .52-.096.713-.287A.967.967 0 0 0 15 9V7a.967.967 0 0 0-.287-.713A.968.968 0 0 0 14 6H7a.968.968 0 0 0-.713.287A.968.968 0 0 0 6 7v2c0 .283.096.52.287.713.192.191.43.287.713.287ZM5 7.85V19 5v2.85Z" />
        </svg>
    );
}

export function IconDownload({
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
            <path d="M12 15.575c-.133 0-.258-.02-.375-.063a.877.877 0 0 1-.325-.212l-3.6-3.6a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7.183-.183.42-.28.712-.288.292-.008.53.08.713.263L11 12.15V5c0-.283.096-.52.287-.713A.968.968 0 0 1 12 4c.283 0 .52.096.713.287.191.192.287.43.287.713v7.15l1.875-1.875c.183-.183.42-.27.713-.263.291.009.529.105.712.288a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7l-3.6 3.6c-.1.1-.208.17-.325.212a1.106 1.106 0 0 1-.375.063ZM6 20c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 18v-2c0-.283.096-.52.287-.713A.967.967 0 0 1 5 15c.283 0 .52.096.713.287.191.192.287.43.287.713v2h12v-2c0-.283.096-.52.288-.713A.968.968 0 0 1 19 15c.283 0 .52.096.712.287.192.192.288.43.288.713v2c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 20H6Z" />
        </svg>
    );
}

export function IconLink({
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
            <path d="M7 17c-1.383 0-2.563-.488-3.538-1.463C2.487 14.563 2 13.383 2 12s.487-2.563 1.462-3.537C4.438 7.488 5.617 7 7 7h3c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.968.968 0 0 1 10 9H7c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 4 12c0 .833.292 1.542.875 2.125A2.893 2.893 0 0 0 7 15h3c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.712A.968.968 0 0 1 10 17H7Zm2-4a.967.967 0 0 1-.713-.287A.968.968 0 0 1 8 12c0-.283.096-.52.287-.713A.967.967 0 0 1 9 11h6c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.968.968 0 0 1 15 13H9Zm5 4a.968.968 0 0 1-.713-.288A.968.968 0 0 1 13 16c0-.283.096-.52.287-.713A.968.968 0 0 1 14 15h3c.833 0 1.542-.292 2.125-.875A2.893 2.893 0 0 0 20 12c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 17 9h-3a.968.968 0 0 1-.713-.287A.967.967 0 0 1 13 8c0-.283.096-.52.287-.713A.968.968 0 0 1 14 7h3c1.383 0 2.563.487 3.538 1.463C21.512 9.438 22 10.617 22 12s-.488 2.563-1.462 3.537C19.562 16.512 18.383 17 17 17h-3Z" />
        </svg>
    );
}

export function IconLinkBreak({
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
            <path d="m15.825 13-2-2h2c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713a.968.968 0 0 1-.713.287Zm3.425 3.45-1.5-1.55a3.116 3.116 0 0 0 1.613-1.063A2.834 2.834 0 0 0 20 12c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 17 9h-3a.967.967 0 0 1-.713-.288A.967.967 0 0 1 13 8c0-.283.096-.52.287-.713A.967.967 0 0 1 14 7h3c1.383 0 2.563.48 3.538 1.437C21.512 9.396 22 10.583 22 12c0 .95-.25 1.83-.75 2.637a4.712 4.712 0 0 1-2 1.813Zm-.15 5.45-17-17a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l17 17a.948.948 0 0 1 .275.7.949.949 0 0 1-.275.7.949.949 0 0 1-.7.275.948.948 0 0 1-.7-.275ZM10 17H7c-1.383 0-2.563-.488-3.538-1.463C2.487 14.563 2 13.383 2 12c0-1.167.354-2.196 1.062-3.088A4.954 4.954 0 0 1 5.75 7.15L7.6 9H7c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 4 12c0 .833.292 1.542.875 2.125A2.893 2.893 0 0 0 7 15h3c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.712A.968.968 0 0 1 10 17Zm1.6-4H8.175a.968.968 0 0 1-.713-.287.968.968 0 0 1-.287-.713c0-.283.096-.52.287-.713A.967.967 0 0 1 8.175 11h1.45l1.975 2Z" />
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
            <path d="M5.85 17.1c.85-.65 1.8-1.163 2.85-1.538A9.737 9.737 0 0 1 12 15c1.15 0 2.25.188 3.3.563 1.05.374 2 .887 2.85 1.537a7.73 7.73 0 0 0 1.363-2.325A7.838 7.838 0 0 0 20 12c0-2.217-.78-4.104-2.337-5.662C16.104 4.779 14.217 4 12 4s-4.104.78-5.662 2.338C4.779 7.896 4 9.783 4 12c0 .983.162 1.908.487 2.775.325.867.78 1.642 1.363 2.325ZM12 13c-.983 0-1.813-.338-2.488-1.012C8.837 11.313 8.5 10.483 8.5 9.5c0-.983.338-1.813 1.012-2.487C10.188 6.338 11.017 6 12 6c.983 0 1.813.338 2.488 1.013.675.675 1.012 1.504 1.012 2.487 0 .983-.338 1.813-1.012 2.488C13.813 12.663 12.983 13 12 13Zm0 9a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 12 22Zm0-2c.883 0 1.717-.13 2.5-.387a7.53 7.53 0 0 0 2.15-1.113 7.53 7.53 0 0 0-2.15-1.113A7.933 7.933 0 0 0 12 17c-.883 0-1.717.13-2.5.387A7.53 7.53 0 0 0 7.35 18.5a7.53 7.53 0 0 0 2.15 1.113A7.933 7.933 0 0 0 12 20Zm0-9c.433 0 .792-.142 1.075-.425.283-.283.425-.642.425-1.075 0-.433-.142-.792-.425-1.075C12.792 8.142 12.433 8 12 8c-.433 0-.792.142-1.075.425-.283.283-.425.642-.425 1.075 0 .433.142.792.425 1.075.283.283.642.425 1.075.425Z" />
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
            <path d="M1 18a.967.967 0 0 1-.713-.288A.968.968 0 0 1 0 17v-.575c0-.733.367-1.32 1.1-1.763C1.833 14.221 2.8 14 4 14c.217 0 .42.008.612.025s.38.042.563.075a3.544 3.544 0 0 0-.513 1.075A4.486 4.486 0 0 0 4.5 16.4V18H1Zm6 0a.967.967 0 0 1-.713-.288A.968.968 0 0 1 6 17v-.6c0-1.083.554-1.962 1.662-2.637 1.109-.675 2.555-1.013 4.338-1.013 1.8 0 3.25.338 4.35 1.012 1.1.675 1.65 1.555 1.65 2.638v.6c0 .283-.096.52-.288.712A.968.968 0 0 1 17 18H7Zm12.5 0v-1.6c0-.433-.058-.842-.175-1.225a4.213 4.213 0 0 0-.5-1.075c.183-.033.37-.058.563-.075.191-.017.395-.025.612-.025 1.2 0 2.167.22 2.9.662.733.442 1.1 1.03 1.1 1.763V17c0 .283-.096.52-.288.712A.968.968 0 0 1 23 18h-3.5ZM12 14.75c-.95 0-1.8.13-2.55.387-.75.259-1.192.546-1.325.863h7.75c-.15-.333-.596-.625-1.338-.875-.741-.25-1.587-.375-2.537-.375ZM4 13c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 0 1 2 11c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 9c.55 0 1.02.196 1.412.588C5.804 9.979 6 10.45 6 11c0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 4 13Zm16 0c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 0 1 18 11c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 20 9c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412 0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0 1 20 13Zm-8-1a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 9 9c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 12 6c.833 0 1.542.292 2.125.875S15 8.167 15 9s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 12 12Zm0-4a.968.968 0 0 0-.713.287A.967.967 0 0 0 11 9c0 .283.096.52.287.713.192.191.43.287.713.287s.52-.096.713-.287A.967.967 0 0 0 13 9a.967.967 0 0 0-.287-.713A.968.968 0 0 0 12 8Z" />
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
            <path d="M2 20a.967.967 0 0 1-.712-.288A.968.968 0 0 1 1 19v-1.8c0-.567.146-1.087.438-1.563.291-.475.679-.837 1.162-1.087a14.843 14.843 0 0 1 3.15-1.163A13.76 13.76 0 0 1 9 13c1.1 0 2.183.13 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.476.438.996.438 1.563V19c0 .283-.096.52-.288.712A.968.968 0 0 1 16 20H2Zm16.525 0c.15-.117.267-.262.35-.438a1.35 1.35 0 0 0 .125-.587V17c0-.733-.204-1.438-.613-2.113-.408-.675-.987-1.254-1.737-1.737a12.515 12.515 0 0 1 4.5 1.4c.6.333 1.058.704 1.375 1.112.317.409.475.855.475 1.338v2c0 .283-.096.52-.288.712A.968.968 0 0 1 22 20h-3.475ZM9 12c-1.1 0-2.042-.392-2.825-1.175C5.392 10.042 5 9.1 5 8s.392-2.042 1.175-2.825C6.958 4.392 7.9 4 9 4s2.042.392 2.825 1.175C12.608 5.958 13 6.9 13 8s-.392 2.042-1.175 2.825C11.042 11.608 10.1 12 9 12Zm10-4c0 1.1-.392 2.042-1.175 2.825C17.042 11.608 16.1 12 15 12c-.183 0-.417-.02-.7-.063a6.128 6.128 0 0 1-.7-.137 5.947 5.947 0 0 0 1.037-1.775C14.88 9.375 15 8.7 15 8s-.12-1.375-.363-2.025A5.947 5.947 0 0 0 13.6 4.2a3.04 3.04 0 0 1 .7-.163c.233-.024.467-.037.7-.037 1.1 0 2.042.392 2.825 1.175C18.608 5.958 19 6.9 19 8ZM3 18h12v-.8a.973.973 0 0 0-.5-.85c-.9-.45-1.808-.787-2.725-1.012a11.6 11.6 0 0 0-5.55 0c-.917.225-1.825.562-2.725 1.012a.973.973 0 0 0-.5.85v.8Zm6-8c.55 0 1.02-.196 1.412-.588C10.804 9.021 11 8.55 11 8c0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0 0 9 6c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0 0 7 8c0 .55.196 1.02.588 1.412C7.979 9.804 8.45 10 9 10Z" />
        </svg>
    );
}

export function IconUser({
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
            <path d="M12 12c-1.1 0-2.042-.392-2.825-1.175C8.392 10.042 8 9.1 8 8s.392-2.042 1.175-2.825C9.958 4.392 10.9 4 12 4s2.042.392 2.825 1.175C15.608 5.958 16 6.9 16 8s-.392 2.042-1.175 2.825C14.042 11.608 13.1 12 12 12Zm6 8H6c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 18v-.8c0-.567.146-1.087.438-1.563.291-.475.679-.837 1.162-1.087a14.843 14.843 0 0 1 3.15-1.163A13.76 13.76 0 0 1 12 13c1.1 0 2.183.13 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.163 1.087.291.476.437.996.437 1.563v.8c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 20ZM6 18h12v-.8a.973.973 0 0 0-.5-.85c-.9-.45-1.808-.787-2.725-1.012a11.6 11.6 0 0 0-5.55 0c-.917.225-1.825.562-2.725 1.012a.973.973 0 0 0-.5.85v.8Zm6-8c.55 0 1.02-.196 1.412-.588C13.804 9.021 14 8.55 14 8c0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0 0 12 6c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0 0 10 8c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588Z" />
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
            <path d="m22 22-4-4H4c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 16V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 4 2h16c.55 0 1.02.196 1.413.587C21.803 2.98 22 3.45 22 4v18ZM4 4v12h14.825L20 17.175V4H4Z" />
        </svg>
    );
}

export function IconLocation({
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
            <path d="M12 12c.55 0 1.02-.196 1.412-.588.392-.391.588-.862.588-1.412 0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0 0 12 8c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0 0 10 10c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588Zm0 7.35c2.033-1.867 3.542-3.563 4.525-5.088C17.508 12.738 18 11.383 18 10.2c0-1.817-.58-3.304-1.738-4.462C15.104 4.579 13.683 4 12 4c-1.683 0-3.104.58-4.263 1.737C6.58 6.896 6 8.383 6 10.2c0 1.183.492 2.538 1.475 4.063.983 1.524 2.492 3.22 4.525 5.087ZM12 22c-2.683-2.283-4.688-4.404-6.013-6.363C4.662 13.68 4 11.867 4 10.2c0-2.5.804-4.492 2.412-5.975C8.021 2.742 9.883 2 12 2s3.98.742 5.587 2.225C19.197 5.708 20 7.7 20 10.2c0 1.667-.663 3.48-1.988 5.438C16.688 17.595 14.683 19.716 12 22Z" />
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
            <path d="m9.25 22-.4-3.2a3.79 3.79 0 0 1-.613-.3 8.266 8.266 0 0 1-.562-.375L4.7 19.375l-2.75-4.75 2.575-1.95a2.387 2.387 0 0 1-.025-.338v-.675c0-.108.008-.22.025-.337L1.95 9.375l2.75-4.75 2.975 1.25c.183-.133.375-.258.575-.375.2-.117.4-.217.6-.3l.4-3.2h5.5l.4 3.2c.217.083.42.183.612.3.192.117.38.242.563.375l2.975-1.25 2.75 4.75-2.575 1.95c.017.117.025.23.025.338v.675c0 .108-.017.22-.05.337l2.575 1.95-2.75 4.75-2.95-1.25a6.842 6.842 0 0 1-.575.375c-.2.117-.4.217-.6.3l-.4 3.2h-5.5Zm2.8-6.5c.967 0 1.792-.342 2.475-1.025A3.372 3.372 0 0 0 15.55 12c0-.967-.342-1.792-1.025-2.475A3.373 3.373 0 0 0 12.05 8.5c-.983 0-1.813.342-2.488 1.025A3.393 3.393 0 0 0 8.55 12c0 .967.337 1.792 1.012 2.475.676.683 1.505 1.025 2.488 1.025Zm0-2c-.417 0-.77-.146-1.063-.438A1.446 1.446 0 0 1 10.55 12c0-.417.146-.77.438-1.063a1.446 1.446 0 0 1 1.062-.437c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062 0 .417-.146.77-.438 1.063a1.447 1.447 0 0 1-1.062.437ZM11 20h1.975l.35-2.65c.517-.133.996-.33 1.438-.588.441-.258.845-.57 1.212-.937l2.475 1.025.975-1.7-2.15-1.625c.083-.233.142-.48.175-.738a6.153 6.153 0 0 0 0-1.575 3.535 3.535 0 0 0-.175-.737l2.15-1.625-.975-1.7-2.475 1.05a5.556 5.556 0 0 0-1.213-.962 5.607 5.607 0 0 0-1.437-.588L13 4h-1.975l-.35 2.65c-.517.133-.996.33-1.438.587-.441.259-.845.571-1.212.938L5.55 7.15l-.975 1.7 2.15 1.6c-.083.25-.142.5-.175.75s-.05.517-.05.8c0 .267.017.525.05.775s.092.5.175.75l-2.15 1.625.975 1.7 2.475-1.05c.367.383.77.704 1.212.962.442.259.921.455 1.438.588L11 20Z" />
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
            <path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm0 2c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 19v-9a1.986 1.986 0 0 1 .8-1.6l6-4.5a2.11 2.11 0 0 1 .575-.3c.2-.067.408-.1.625-.1.217 0 .425.033.625.1s.392.167.575.3l6 4.5A1.985 1.985 0 0 1 20 10v9c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 21h-5v-6h-2v6H6Z" />
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
            <path d="M12 20c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 18c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 12 16c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 20Zm0-6c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 10 12c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 12 10c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 12 14Zm0-6c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 10 6c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 12 4c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 12 8Z" />
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
