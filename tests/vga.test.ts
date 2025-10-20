import { test, expect } from '@playwright/test';
import {Data} from './data';
import { Locators } from './locators';
import { navigation } from './helper';

test.describe('VGA', () => {
  let data: Data;
  let locators: Locators;
  
  test.beforeEach(async ({ page }) => {
    data = new Data();
    locators = new Locators(page);
    await page.goto(data.url);
  });

test('Homescreen', async ({ page }) => {
  
  // Expect report_name to contain "Value Gap Analysis".
  await expect(page.getByText(data.report_name, { exact: true})).toBeVisible();

  // Expect button shows 'Access Reports'.
  await expect(page.getByRole('button', { name: data.accessbutton })).toBeVisible();

  // Expect button shows 'BEGIN HERE'.
  await expect(page.getByRole('button', { name: data.beginhere })).toBeVisible();

  // Click button 'BEGIN HERE'.
  await page.getByRole('button', { name: data.beginhere }).click();

  // Expect page directly navigated to introduction section.
  await expect(page).toHaveURL(data.urlIntro);

  
});

test('Introduction', async ({ page }) => {

  // Click button 'BEGIN HERE'.
  await page.getByRole('button', { name: data.beginhere }).click();

  // Expect page directly navigated to introduction section.
  await expect(page).toHaveURL(data.urlIntro);

  // Expect button shows 'Access Reports'.
  await expect(page.getByRole('button', { name: data.accessbutton })).toBeVisible();
  
  // Expect report_name to contain "Value Gap Analysis".
  await expect(page.getByText(data.report_name, { exact: true})).toBeVisible();

  // Expect paragraph displayed.
  await expect(page.getByText(data.introheader, {exact: true})).toBeVisible();
  await expect(page.getByText(data.introparag1, {exact: true})).toBeVisible();
  await expect(page.getByText(data.introparag2, {exact: true})).toBeVisible();
  await expect(page.getByText(data.introparag3, {exact: true})).toBeVisible();
  await expect(page.getByText(data.introlist1, {exact: true})).toBeVisible();
  await expect(page.getByText(data.introlist2, {exact: true})).toBeVisible();
  await expect(page.getByText(data.introlist3, {exact: true})).toBeVisible();
  await expect(page.getByText(data.introlist4, {exact: true})).toBeVisible();

  // Expect button shows 'Next'.
  await expect(page.getByRole('button', { name: data.nextbutton })).toBeVisible();

  // Clicking 'Next' button.
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to commitment section.
  await expect(page).toHaveURL(data.urlcommitment);

});

test('Commitment', async ({ page }) => {

  // Click button 'BEGIN HERE' from homescreen.
  await page.getByRole('button', { name: data.beginhere }).click();

  // Clicking 'Next' button from introduction.
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to commitment section.
  await expect(page).toHaveURL(data.urlcommitment);
  
  // Expect report_name to contain "Value Gap Analysis".
  await expect(page.getByText(data.report_name, { exact: true})).toBeVisible();

  // Expect button shows 'Access Reports'.
  await expect(page.getByRole('button', { name: data.accessbutton})).toBeVisible();

  // Expect page directly navigated to commitment section.
  await expect(page.getByText(data.commitment, {exact: true})).toBeVisible();

  // Expect paragraph displayed.
  await expect(page.getByText(data.commitparag1, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitparag2, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitparag3, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitparag4, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitparag5, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitgeninfo, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitgeninfo_parag1, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitgeninfo_parag2, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitgeninfo_parag3, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitnotaxadvice, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitnotaxadvice_parag, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitnofinancialadvice, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitnofinancialadvice_parag, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitnolegaladvice, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitnolegaladvice_parag, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitnoopinionofvalue, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commitnoopinionofvalue_parag, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commityourcommitmenttous, {exact: true})).toBeVisible();
  await expect(page.getByText(data.commityourcommitmenttous_parag, {exact: true})).toBeVisible();
  await expect(page.getByText(data.committermsnandconditions, {exact: true})).toBeVisible();

  // Expect button shows 'Back'.
  await expect(page.getByRole('button', { name: data.backbutton })).toBeVisible(); 

  // Expect button shows 'Agree and Start'.
  await expect(page.getByRole('button', { name: data.agreeandstart })).toBeVisible();

  // Expect checkbox to be visible.
  await expect(locators.checkbox).toBeVisible();
  await locators.checkbox.check();
  await expect(locators.checkbox).toBeChecked();

  // Clicking 'Agree and Start' button.
  await page.getByRole('button', { name: data.agreeandstart }).click();

  // Expect page directly navigated to Question 1.
  await expect(page).toHaveURL(data.urlQuestionnaire1);

});

test('Q1', async ({ page }) => {

  // Click button 'BEGIN HERE' from homescreen and navigate to Question 1.
  await navigation(page);

  // Expect page directly navigated to Question 1.
  await expect.soft(page).toHaveURL(data.urlQuestionnaire1);
    
  // Expect button shows 'Save Reports'.
  await expect.soft(page.getByRole('button', { name: data.savebutton })).toBeVisible();

  // Expect report_name to contain "Value Gap Analysis".
  await expect.soft(page.getByText(data.report_name, { exact: true})).toBeVisible();
  
  // Expect question contains string.
  await expect.soft(page.getByText(data.Q1, { exact: true})).toBeVisible();

  // Expect button shows 'Yes' and 'No'.
  await expect.soft(page.getByRole('button', { name: data.yesbutton })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: data.nobutton })).toBeVisible();

  // Expect button shows 'Back' and 'Next.
  await expect.soft(page.getByRole('button', { name: data.backbutton })).toBeVisible(); 
  await expect.soft(page.getByRole('button', { name: data.nextbutton })).toBeVisible();

  // Expect tooltip button 'More Details' to be visible.
  await expect.soft(page.getByRole('button', { name: data.moredetailsbutton })).toBeVisible();
  await page.getByRole('button', { name: data.moredetailsbutton }).click();

  // Expect tooltip button name changed to 'Hide Details'.
  await expect.soft(page.getByRole('button', { name: data.hidedetailsbutton })).toBeVisible(); 

  // Expect tooltip message to be visible.
  await expect.soft(locators.tooltipmessage).toContainText(data.Q1tooltipmessage);
  await expect.soft(locators.tooltipmessage).toContainText(data.Q1tooltipmessage2);
  await expect.soft(locators.tooltipmessage).toContainText(data.Q1tooltipmessage3);
  await expect.soft(locators.tooltipmessage).toContainText(data.Q1tooltipmessage4);

  // Expect tooltip message to be hidden after clicking 'Hide Details' button.
  await page.getByRole('button', { name: data.hidedetailsbutton }).click();
  await expect.soft(page.getByText(data.Q1tooltipmessage, { exact: true })).toBeHidden();
  await expect.soft(page.getByText(data.Q1tooltipmessage2, { exact: true })).toBeHidden();
  await expect.soft(page.getByText(data.Q1tooltipmessage3, { exact: true })).toBeHidden();
  await expect.soft(page.getByText(data.Q1tooltipmessage4, { exact: true })).toBeHidden();

  // Click 'Next' button without selecting 'Yes' or 'No'.
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect error message to be visible.
  await expect.soft(page.getByText(data.no_options_selected, { exact: true })).toBeVisible();

  // Expect 'Next' button is disabled until selecting 'Yes' or 'No' option.
  await expect.soft(page.getByRole('button', { name: data.nextbutton })).toBeDisabled();

  // Selecting 'No' option then clicking 'Next'.
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 2.
  await expect.soft(page).toHaveURL(data.urlQuestionnaire2);

});

});
