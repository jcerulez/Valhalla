// utils/softAssertions.ts
    import { expect, Page } from '@playwright/test';

    export class SoftAssertions {
      private errors: Error[] = [];
      private page: Page;

      constructor(page: Page) {
        this.page = page;
      }

      async softExpect<T>(actual: T, matcher: (value: T) => Promise<void>, message?: string) {
        try {
          await matcher(actual);
        } catch (error: any) {
          this.errors.push(error);
          console.error(`Soft assertion failed: ${message || error.message}`);
          // Capture screenshot on soft assertion failure
          const screenshotPath = `test-results/soft-assert-failure-${Date.now()}.png`;
          await this.page.screenshot({ path: screenshotPath });
          console.log(`Screenshot captured: ${screenshotPath}`);
        }
      }

      assertAll() {
        if (this.errors.length > 0) {
          const allErrors = this.errors.map(e => e.message).join('\n');
          throw new Error(`Multiple soft assertions failed:\n${allErrors}`);
        }
      }
    }