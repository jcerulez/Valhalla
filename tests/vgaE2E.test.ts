import { test, expect } from '@playwright/test';
import {Data} from './data';
import { Locators } from './locators';
import  * as helper from './helper';
import { testData } from './testdata';
import { stat } from 'fs';
import { parse } from 'path';
import { formatNumberWithCommas } from './helper';
import { SoftAssertions } from './utils';

test.describe('VGA', () => {
  let data: Data;
  let locators: Locators;
  let tdata: testData;
  
  test.beforeEach(async ({ page }) => {
    data = new Data();
    locators = new Locators(page);
    tdata = new testData();

    await page.goto(data.url);
  });

test('End-to-End', async ({ page }) => {

  const soft = new SoftAssertions(page);
  
  // Click button 'BEGIN HERE' from homescreen and navigate to Question 1.
  await helper.navigation(page);

  await page.getByRole('button', { name: tdata.question1 }).click();
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 2.
  await expect(page).toHaveURL(data.urlQuestionnaire2);

  await page.fill(locators.q2input, tdata.question2);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 3.
  await expect(page).toHaveURL(data.urlQuestionnaire3);

  await page.fill(locators.q3input, tdata.question3);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 4.
  await expect(page).toHaveURL(data.urlQuestionnaire4);

  await page.fill(locators.q4input, tdata.question4);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 5.
  await expect(page).toHaveURL(data.urlQuestionnaire5);

  await page.fill(locators.q3input, tdata.question5);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 6.
  await expect(page).toHaveURL(data.urlQuestionnaire6);

  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: tdata.question6 }).click();
  await page.evaluate(() => {window.scrollBy(0, 500);}); // Scrolls down by 500 pixels
  //await page.waitForTimeout(5000);
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: data.nextbutton }).click();

  if (tdata.question6 === 'Yes') {
    // Expect page directly navigated to Question 6/Yes.
    await expect(page).toHaveURL(data.urlQuestionnaire6yes);
  } else {
    // Expect page directly navigated to Question 6/No.
    await expect(page).toHaveURL(data.urlQuestionnaire6no);
  }

  await page.waitForLoadState('networkidle');
  if (tdata.question6 === 'Yes') {
    await page.fill(locators.q6inputyes, tdata.question6yn);
    await page.getByRole('button', { name: data.nextbutton }).click();
  } else {      
  await page.fill(locators.q6inputno, tdata.question6yn);
  await page.getByRole('button', { name: data.nextbutton }).click();
  }

  // Expect page directly navigated to Question 7.
  await expect(page).toHaveURL(data.urlQuestionnaire7);

  await page.fill(locators.q7input, tdata.question7);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 8.
  await expect(page).toHaveURL(data.urlQuestionnaire8);

  await page.waitForLoadState('networkidle');
  await page.fill(locators.q8input, tdata.question8);
  await page.getByRole('button', { name: data.nextbutton }).click();  
  
  // Expect page directly navigated to Question 9.
  await expect(page).toHaveURL(data.urlQuestionnaire9);

  await page.waitForLoadState('networkidle');
  await page.fill(locators.q9input, tdata.question9);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 10.
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(data.urlQuestionnaire10);

  await page.fill(locators.q10input, tdata.question10);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 11.
  await expect(page).toHaveURL(data.urlQuestionnaire11);

  await page.fill(locators.q11input, tdata.question11);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 12.
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(data.urlQuestionnaire12);
  
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: tdata.question12 }).click();
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 13 popup.
  await page.waitForTimeout(2000);
  await expect(locators.q13popupOK).toBeVisible();
  await locators.q13popupOK.click();

  // Expect page directly navigated to Question 13.
  await expect(page).toHaveURL(data.urlQuestionnaire13);

  await page.fill(locators.q13input, tdata.question13);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 14.
  await expect(page).toHaveURL(data.urlQuestionnaire14);

  await page.fill(locators.q14input, tdata.question14);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 15.
  await expect(page).toHaveURL(data.urlQuestionnaire15);

  await page.fill(locators.q15input, tdata.question15);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 16.
  await expect(page).toHaveURL(data.urlQuestionnaire16);

  await page.fill(locators.q16input, tdata.question16);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 17.
  await expect(page).toHaveURL(data.urlQuestionnaire17);

  await page.fill(locators.q17input, tdata.question17);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 18.
  await expect(page).toHaveURL(data.urlQuestionnaire18);

  await page.fill(locators.q18input, tdata.question18);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 19.
  await expect(page).toHaveURL(data.urlQuestionnaire19);

  await page.fill(locators.q19input, tdata.question19);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 20.
  await expect(page).toHaveURL(data.urlQuestionnaire20);

  await page.fill(locators.q20input, tdata.question20);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 21.
  await expect(page).toHaveURL(data.urlQuestionnaire21);

  await page.fill(locators.q21input, tdata.question21);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 22.
  await expect(page).toHaveURL(data.urlQuestionnaire22);

  await page.fill(locators.q22input, tdata.question22);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 23.
  await expect(page).toHaveURL(data.urlQuestionnaire23);

  await page.fill(locators.q23input, tdata.question23);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 24.
  await expect(page).toHaveURL(data.urlQuestionnaire24);

  await page.fill(locators.q24input, tdata.question24);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 25.
  await expect(page).toHaveURL(data.urlQuestionnaire25);

  await page.fill(locators.q25input, tdata.question25);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 26.
  await expect(page).toHaveURL(data.urlQuestionnaire26);

  await page.fill(locators.q26input, tdata.question26);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 27.
  await expect(page).toHaveURL(data.urlQuestionnaire27);

  await page.fill(locators.q27input, tdata.question27);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 28.
  await expect(page).toHaveURL(data.urlQuestionnaire28);

  await page.fill(locators.q28input, tdata.question28);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 29.
  await expect(page).toHaveURL(data.urlQuestionnaire29);

  await page.fill(locators.q29input, tdata.question29);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 30.
  await expect(page).toHaveURL(data.urlQuestionnaire30);

  await page.fill(locators.q30input, tdata.question30);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 31.
  await expect(page).toHaveURL(data.urlQuestionnaire31);

  await page.fill(locators.q31input, tdata.question31);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  
  // Expect page directly navigated to Additional Income popup.
  await expect(locators.q32popupOK).toBeVisible();

  // Expect page directly navigated to Question 32.
  await locators.q32popupOK.click();
  await expect(page).toHaveURL(data.urlQuestionnaire32);

  await page.getByRole('button', { name: data.yesbutton }).click();
  await page.getByRole('button', { name: data.nextbutton }).click();    

  // Expect page directly navigated to Question 33.
  await expect(page).toHaveURL(data.urlQuestionnaire33);

  await page.fill(locators.q33input, tdata.question33);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 34.
  await expect(page).toHaveURL(data.urlQuestionnaire34);

  await page.fill(locators.q34input, tdata.question34);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 35.
  await expect(page).toHaveURL(data.urlQuestionnaire35);

  await page.fill(locators.q35input, tdata.question35);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 36.
  await expect(page).toHaveURL(data.urlQuestionnaire36);

  await page.fill(locators.q36input, tdata.question36);
  await page.getByRole('button', { name: data.nextbutton }).click();    
  
  // Expect page directly navigated to Question 36 popup.
  await expect(locators.q36popOK).toBeVisible();

  // Expect page directly navigated to Question 37.
  await locators.q36popOK.click();
  await expect(page).toHaveURL(data.urlQuestionnaire37);
  
  await page.waitForTimeout(2000);
  await page.fill(locators.q37input, tdata.question37);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 38.
  await expect(page).toHaveURL(data.urlQuestionnaire38);

  await page.fill(locators.q38input, tdata.question38);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 39.
  await expect(page).toHaveURL(data.urlQuestionnaire39);

  await page.fill(locators.q39input, tdata.question39);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 40.
  await expect(page).toHaveURL(data.urlQuestionnaire40);

  await page.fill(locators.q40input, tdata.question40);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 41.
  await expect(page).toHaveURL(data.urlQuestionnaire41);

  await page.fill(locators.q41input, tdata.question41);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 42.
  await expect(page).toHaveURL(data.urlQuestionnaire42);

  await page.fill(locators.q42input, tdata.question42);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 43.
  await expect(page).toHaveURL(data.urlQuestionnaire43);

  await page.fill(locators.q43input, tdata.question43);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 44.
  await expect(page).toHaveURL(data.urlQuestionnaire44);

  await page.fill(locators.q44input, tdata.question44);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 45.
  await expect(page).toHaveURL(data.urlQuestionnaire45);

  await page.fill(locators.q45input, tdata.question45);
  await page.getByRole('button', { name: data.nextbutton }).click();

  // Expect page directly navigated to Question 46.
  await expect(page).toHaveURL(data.urlQuestionnaire46);

  await page.fill(locators.q46input, tdata.question46);
  await page.getByRole('button', { name: data.nextbutton }).click();
  
  // Expect page directly navigated to Input Review popup.
  await expect(locators.inputreviewpopupOK).toBeVisible();

  // Expect page directly navigated to Input Review.
  await locators.inputreviewpopupOK.click();
  await expect(page).toHaveURL(data.urlInputReview);


  // Expect mapping values are correct in Input Review section.
  // Officer & Company Profile

  await page.evaluate(() => {window.scrollBy(0, 500);});
  await expect.soft(locators.targetmonth).toHaveText(tdata.question2);
  await expect.soft(locators.certifiedvalue).toHaveText(tdata.question6);
  const modifiedtdata6yn = helper.insertCharacter(tdata.question6yn, ',', 1);
  await expect.soft(locators.businessvalue).toHaveText('$' + await modifiedtdata6yn);
  await expect.soft(locators.returnoninvestment).toHaveText(tdata.question7 + '%');
  const modifiedtdata8 = helper.insertCharacter(tdata.question8, ',', 1);
  await expect.soft(locators.liabilities).toHaveText('$' + await modifiedtdata8);
  await expect.soft(locators.estimatedlegalfee).toHaveText(tdata.question9 + '%');
  await expect.soft(locators.federalincometax).toHaveText(tdata.question10 + '%');
  await expect.soft(locators.stateincometax).toHaveText(tdata.question11 + '%');


  // Discretionary Expense Adjustments

  await page.evaluate(() => {window.scrollBy(0, 1000);});
  await soft.softExpect(locators.ira40k, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question13).toLocaleString('en-US'));});
  await soft.softExpect(locators.personalauto, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question14).toLocaleString('en-US'));});
  await soft.softExpect(locators.autofuel, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question15).toLocaleString('en-US')); });
  await soft.softExpect(locators.officerfamilyinsurance, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question16).toLocaleString('en-US')); });
  await soft.softExpect(locators.homeoroffsite, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question17).toLocaleString('en-US')); });
  await soft.softExpect(locators.homeoffice, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question18).toLocaleString('en-US'));});
  await soft.softExpect(locators.charitablecontributions, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question19).toLocaleString('en-US')); });
  await soft.softExpect(locators.duesandsubscriptions, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question20).toLocaleString('en-US')); });
  await soft.softExpect(locators.propertytaxes, async (element) => {await expect(element).toHaveText('$' + Number(tdata.question21).toLocaleString('en-US')); });
  await soft.softExpect(locators.mealsandentertainment, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question22).toLocaleString('en-US')); });
  await soft.softExpect(locators.travel, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question23).toLocaleString('en-US')); });
  await soft.softExpect(locators.professionalfees, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question24).toLocaleString('en-US')); });
  await soft.softExpect(locators.repairsandmaintenance, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question25).toLocaleString('en-US')); });
  await soft.softExpect(locators.creditcardexpense, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question26).toLocaleString('en-US'));});
  await soft.softExpect(locators.rebates, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question27).toLocaleString('en-US')); });
  await soft.softExpect(locators.nonworkingfamilypayroll, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question28).toLocaleString('en-US')); });
  await soft.softExpect(locators.potentialunreportedincome, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question29).toLocaleString('en-US')); });
  await soft.softExpect(locators.other, async (element) => { await expect(element).toHaveText('$' + Number(tdata.question30).toLocaleString('en-US')); });
  
  //Personal Financial Data (Addtional Income)

  await page.evaluate(() => {window.scrollBy(0, 1000);});
  await expect.soft(locators.retainedbusinessincome).toHaveText('$' + Number(tdata.question33).toLocaleString('en-US'));
  await expect.soft(locators.anticipatedmonthlyincome).toHaveText('$' + Number(tdata.question34).toLocaleString('en-US'));
  await expect.soft(locators.projectedincome).toHaveText('$' + Number(tdata.question35).toLocaleString('en-US'));

  //Personal Financial Data (Personal Assets)

  await expect.soft(locators.liquidinvestments).toHaveText('$' + Number(tdata.question37).toLocaleString('en-US'));
  await expect.soft(locators.stockbondvalue).toHaveText('$' + Number(tdata.question38).toLocaleString('en-US'));
  await expect.soft(locators.cashvaluelifeinsurance).toHaveText('$' + Number(tdata.question39).toLocaleString('en-US'));
  await expect.soft(locators.ownerretirementportfolio).toHaveText('$' + Number(tdata.question40).toLocaleString('en-US'));
  await expect.soft(locators.personalequity).toHaveText('$' + Number(tdata.question43).toLocaleString('en-US'));
  await expect.soft(locators.realstateequity).toHaveText('$' + Number(tdata.question44).toLocaleString('en-US'));
  await expect.soft(locators.businessequity).toHaveText('$' + Number(tdata.question45).toLocaleString('en-US'));
  await expect.soft(locators.otherassetsequity).toHaveText('$' + Number(tdata.question46).toLocaleString('en-US'));

  // Navigate to Net Worth Allocation section.

  await page.getByRole('button', { name: data.nextbutton }).click();
  await expect(page).toHaveURL(data.urlNetWorthAllocation);

  // Net Worth Allocation
  // Check if values are correct in Net Worth Allocation section.

  await page.evaluate(() => {window.scrollBy(0, 500);});
  await expect.soft(locators.networthbusinessvalue.first()).toHaveText('$' + Math.round(Number(tdata.question6yn)).toLocaleString('en-US'));
  await expect.soft(locators.networthliquidinvestments.first()).toHaveText('$' + Math.round(Number(tdata.question37)).toLocaleString('en-US'));
  await expect.soft(locators.stocksbonds.first()).toHaveText('$' + Math.round(Number(tdata.question38)).toLocaleString('en-US'));
  await expect.soft(locators.lifeinsurance.first()).toHaveText('$' + Math.round(Number(tdata.question39)).toLocaleString('en-US'));
  await expect.soft(locators.retirementportfolio.first()).toHaveText('$' + Math.round(Number(tdata.question40)).toLocaleString('en-US'));
  await expect.soft(locators.personalresidence.first()).toHaveText('$' + Math.round(Number(tdata.question43)).toLocaleString('en-US'));
  await expect.soft(locators.realestateinvestments.first()).toHaveText('$' + Math.round(Number(tdata.question44)).toLocaleString('en-US'));
  await expect.soft(locators.businessinvestments.first()).toHaveText('$' + Math.round(Number(tdata.question45)).toLocaleString('en-US'));
  await expect.soft(locators.otherassets.first()).toHaveText('$' + Math.round(Number(tdata.question46)).toLocaleString('en-US'));
  
  const totalnetworth = Math.round(Number(tdata.question6yn)) + Math.round(Number(tdata.question37)) + Math.round(Number(tdata.question38)) + Math.round(Number(tdata.question39)) + Math.round(Number(tdata.question40)) + Math.round(Number(tdata.question43)) + Math.round(Number(tdata.question44)) + Math.round(Number(tdata.question45)) + Math.round(Number(tdata.question46));
  await expect.soft(locators.totalequity).toHaveText('$' + totalnetworth.toLocaleString('en-US'));

  await expect.soft(locators.networthbusinessvaluepercentage).toHaveText(await helper.getpercentvalue(tdata.question6yn, totalnetworth.toString()) + '%');
  await expect.soft(locators.networthliquidinvestmentspercentage).toHaveText(await helper.getpercentvalue(tdata.question37, totalnetworth.toString()) + '%');
  await expect.soft(locators.stocksbondspercentage).toHaveText(await helper.getpercentvalue(tdata.question38, totalnetworth.toString()) + '%');
  await expect.soft(locators.lifeinsurancepercentage).toHaveText(await helper.getpercentvalue(tdata.question39, totalnetworth.toString()) + '%');
  await expect.soft(locators.retirementportfoliopercentage).toHaveText(await helper.getpercentvalue(tdata.question40, totalnetworth.toString()) + '%');
  await expect.soft(locators.personalresidencepercentage).toHaveText(await helper.getpercentvalue(tdata.question43, totalnetworth.toString()) + '%');
  await expect.soft(locators.realestateinvestmentspercentage).toHaveText(await helper.getpercentvalue(tdata.question44, totalnetworth.toString()) + '%');
  await expect.soft(locators.businessinvestmentspercentage).toHaveText(await helper.getpercentvalue(tdata.question45, totalnetworth.toString()) + '%');
  await expect.soft(locators.otherassetspercentage).toHaveText(await helper.getpercentvalue(tdata.question46, totalnetworth.toString()) + '%');
  
  await expect.soft(locators.totalequitypercentage).toHaveText('100%');

  // Navigate to Customized Report section 1.

  await page.getByRole('button', { name: data.nextbutton }).click();
  await expect.soft(page).toHaveURL(data.urlCustomizeReport1);

  // Navigate to Customized Report section 2 (Company Logo).

  await page.getByRole('button', { name: data.nextbutton }).click();
  await expect.soft(page).toHaveURL(data.urlCustomizeReport2);

  // Navigate to Summary.

  await page.getByRole('button', { name: data.nextbutton }).click();
  await expect.soft(page).toHaveURL(data.urlSummaryReport);
  await page.getByRole('button', { name: data.savebutton }).click();
  await page.getByRole('button', { name: data.registerbutton }).click();

  // Expect Summary Report to be saved successfully.

  await page.fill(locators.email, tdata.testemail);
  await page.fill(locators.confirm_email, tdata.testemail);
  await page.fill(locators.business_name, tdata.testbusinessname);
  await page.fill(locators.password, tdata.testpassword);
  await locators.saveprogressbutton.click();

  await expect.soft(page.getByRole('button', { name: data.accessbutton })).toBeVisible(); // Check if 'Access Report' button is visible after saving.

  // Click 'Access Your Saved Report' button.
  await page.getByRole('button', { name: data.accessbutton }).click();

  // Expect to navigate to Dashboard.
  await expect.soft(page).toHaveURL(data.urlDashboard);
  await expect.soft(page.getByText(tdata.testbusinessname)).toBeVisible(); // Check if the saved report is listed in the dashboard.

  await page.getByText(tdata.testbusinessname).click();
  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure report is displayed.
  await expect.soft(page.getByText(data.reporttype, {exact: true})).toBeVisible(); // Verify the report type is correct.

  soft.assertAll();
  
  });
});