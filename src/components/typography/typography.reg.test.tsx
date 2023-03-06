import { test } from "@playwright/experimental-ct-react";
import { verifyScreenshot } from "../../utils/screenshotHandler.js";
import { HeadlineLarge } from "./typography";

test.describe("Typography", () => {
  test("HeadlineLarge", async ({ mount }) => {
    const component = await mount(<HeadlineLarge>HeadlineLarge</HeadlineLarge>);
    await verifyScreenshot(component, "typography-headline-large");
  });
});
