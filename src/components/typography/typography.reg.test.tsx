import React from "react";
import { test } from "@playwright/experimental-ct-react";
import { verifyScreenshot } from "../../utils/screenshotHandler.js";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  BodyXSmall,
  ButtonTypography,
  HeadlineLarge,
  HeadlineMedium,
  HeadlineSmall,
  Label,
  SubtitleLarge,
  SubtitleSmall,
} from "./typography";

test.describe("Typography", () => {
  test("HeadlineLarge", async ({ mount }) => {
    const component = await mount(<HeadlineLarge>HeadlineLarge</HeadlineLarge>);
    await verifyScreenshot(component, "headline-large");
  });

  test("HeadlineMedium", async ({ mount }) => {
    const component = await mount(
      <HeadlineMedium>HeadlineMedium</HeadlineMedium>
    );
    await verifyScreenshot(component, "headline-medium");
  });

  test("HeadlineSmall", async ({ mount }) => {
    const component = await mount(<HeadlineSmall>HeadlineSmall</HeadlineSmall>);
    await verifyScreenshot(component, "headline-small");
  });

  test("SubtitleLarge", async ({ mount }) => {
    const component = await mount(<SubtitleLarge>SubtitleLarge</SubtitleLarge>);
    await verifyScreenshot(component, "subtitle-large");
  });

  test("SubtitleSmall", async ({ mount }) => {
    const component = await mount(<SubtitleSmall>SubtitleSmall</SubtitleSmall>);
    await verifyScreenshot(component, "subtitle-small");
  });

  test("BodyLarge", async ({ mount }) => {
    const component = await mount(<BodyLarge>BodyLarge</BodyLarge>);
    await verifyScreenshot(component, "body-large");
  });

  test("BodyMedium", async ({ mount }) => {
    const component = await mount(<BodyMedium>BodyMedium</BodyMedium>);
    await verifyScreenshot(component, "body-medium");
  });

  test("BodySmall", async ({ mount }) => {
    const component = await mount(<BodySmall>BodySmall</BodySmall>);
    await verifyScreenshot(component, "body-small");
  });

  test("BodyXSmall", async ({ mount }) => {
    const component = await mount(<BodyXSmall>BodyXSmall</BodyXSmall>);
    await verifyScreenshot(component, "body-xsmall");
  });

  test("label", async ({ mount }) => {
    const component = await mount(<Label>label</Label>);
    await verifyScreenshot(component, "label");
  });

  test("ButtonTypography", async ({ mount }) => {
    const component = await mount(
      <ButtonTypography>ButtonTypography</ButtonTypography>
    );
    await verifyScreenshot(component, "button-typography");
  });
});
