import styled, { css } from "styled-components";

export const headlineLargeCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 57px;
  line-height: 140%;
  letter-spacing: -0.25px;
`;

export const HeadlineLarge = styled.h1`
  ${headlineLargeCss}
`;

export const headlineMediumCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  font-variant: small-caps;
  line-height: 140%;
`;

export const HeadlineMedium = styled.h2`
  ${headlineMediumCss}
`;

export const headlineSmallCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  font-variant: small-caps;
  line-height: 140%;
`;

export const HeadlineSmall = styled.h3`
  ${headlineSmallCss}
`;

export const SubtitleLargeCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.1px;
`;

export const SubtitleLarge = styled.h4`
  ${SubtitleLargeCss}
`;

export const SubtitleSmallCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.1px;
`;

export const SubtitleSmall = styled.h5`
  ${SubtitleSmallCss}
`;

export const BodyLargeCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.5px;
`;

export const BodyLarge = styled.span`
  ${BodyLargeCss}
`;

export const BodyMediumCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.25px;
`;

export const BodyMedium = styled.span`
  ${BodyMediumCss}
`;

export const BodySmallCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.4px;
`;

export const BodySmall = styled.span`
  ${BodySmallCss}
`;

export const BodyXSmallCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: 0.4px;
`;

export const BodyXSmall = styled.span`
  ${BodyXSmallCss}
`;

export const labelCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;

  letter-spacing: 0.5px;
  font-variant: small-caps;
`;

export const Label = styled.label`
  ${labelCss}
`;

export const buttonTypographyCss = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
`;

export const ButtonTypography = styled.span`
  ${buttonTypographyCss}
`;
