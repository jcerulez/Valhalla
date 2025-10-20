import { test, expect } from '@playwright/test';
import { Page, Locator } from '@playwright/test';

export class Locators {
  //readonly page: Page;
  checkbox: Locator;
  tooltipmessage: Locator;
  q2input: string;
  q3input: string;
  q4input: string;
  q5input: string;
  q6inputno: string;
  q6inputyes: string;
  q7input: string;
  q8input: string;
  q9input: string;
  q10input: string;
  q11input: string;
  q13popupOK: Locator;
  q13input: string;
  q14input: string;
  q15input: string;
  q16input: string;
  q17input: string;
  q18input: string;
  q19input: string;
  q20input: string;
  q21input: string;
  q22input: string;
  q23input: string;
  q24input: string;
  q25input: string;
  q26input: string;
  q27input: string;
  q28input: string;
  q29input: string;
  q30input: string;
  q31input: string;
  q32popupOK: Locator;
  q33input: string;
  q34input: string;
  q35input: string;
  q36input: string;
  q36popOK: Locator;
  q37input: string;
  q38input: string;
  q39input: string;
  q40input: string;
  q41input: string;
  q42input: string
  q43input: string;
  q44input: string;
  q45input: string;
  q46input: string;
  inputreviewpopupOK: Locator;

  // Save Report Locators
  email: string;
  confirm_email: string;
  business_name: string;
  password: string;
  saveprogressbutton: Locator;

  
  // Input Review section
  // Officer & Company Profile
  targetmonth: Locator;
  certifiedvalue: Locator;
  businessvalue: Locator;
  returnoninvestment: Locator;
  liabilities: Locator;
  estimatedlegalfee: Locator;
  federalincometax: Locator;
  stateincometax: Locator;

  //Discretionary Expense Adjustments
  ira40k: Locator;
  personalauto: Locator;
  autofuel: Locator;
  officerfamilyinsurance: Locator;
  homeoroffsite: Locator;
  homeoffice: Locator;
  charitablecontributions: Locator;
  duesandsubscriptions: Locator;
  propertytaxes: Locator;
  mealsandentertainment: Locator;
  travel: Locator;
  professionalfees: Locator;
  repairsandmaintenance: Locator;
  creditcardexpense: Locator;
  rebates: Locator;
  nonworkingfamilypayroll: Locator;
  potentialunreportedincome: Locator;
  other: Locator;

  //Personal Financial Data (Additioinal Income)
  retainedbusinessincome: Locator;
  anticipatedmonthlyincome: Locator;
  projectedincome: Locator;

  //Personal Financial Data (Personal Assets)
  liquidinvestments: Locator;
  stockbondvalue: Locator;
  cashvaluelifeinsurance: Locator;
  ownerretirementportfolio: Locator;
  personalequity: Locator;
  realstateequity: Locator;
  businessequity: Locator;
  otherassetsequity: Locator;

  //Net Worth Allocation
  networthbusinessvalue: Locator;
  networthliquidinvestments: Locator;
  stocksbonds: Locator;
  lifeinsurance: Locator;
  retirementportfolio: Locator;
  personalresidence: Locator;
  realestateinvestments: Locator;
  businessinvestments: Locator;
  otherassets: Locator;
  networthbusinessvaluepercentage: Locator;
  networthliquidinvestmentspercentage: Locator;
  totalequity: Locator;
  totalequitypercentage: Locator;
  stocksbondspercentage: Locator;
  lifeinsurancepercentage: Locator;
  retirementportfoliopercentage: Locator;
  personalresidencepercentage: Locator;
  realestateinvestmentspercentage: Locator;
  businessinvestmentspercentage: Locator;
  otherassetspercentage: Locator;


  constructor(page: Page) {
    this.checkbox = page.locator('label[class="check-box"]');
    this.tooltipmessage = page.locator('div[class="w-full sm:w-full text-[16px] font-normal font-poppins leading-snug"]');

    this.q2input = '#price';
    this.q3input = '#price';
    this.q4input = '#price';
    this.q5input = '#price';
    this.q6inputno = '#price';
    this.q6inputyes = '#price';
    this.q7input = '#price';
    this.q8input = '#price';
    this.q9input = '#month';
    this.q10input = '#price';
    this.q11input = '#price';
    this.q13popupOK = page.locator('body > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)');
    this.q13input = '#price';
    this.q14input = '#price';
    this.q15input = '#price';
    this.q16input = '#price';
    this.q17input = '#price';
    this.q18input = '#price';
    this.q19input = '#price';
    this.q20input = '#price';
    this.q21input = '#price';
    this.q22input = '#price';
    this.q23input = '#price';
    this.q24input = '#price';
    this.q25input = '#price';
    this.q26input = '#price';
    this.q27input = '#price';
    this.q28input = '#price';
    this.q29input = '#price';
    this.q30input = '#price';
    this.q31input = '#VGA_question31';
    this.q32popupOK = page.locator('body > div:nth-child(21) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)');
    this.q33input = '#price';
    this.q34input = '#price';
    this.q35input = '#price';
    this.q36input = '#VGA_question36';
    this.q36popOK = page.locator('body > div:nth-child(21) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)');
    this.q37input = '#price';
    this.q38input = '#price';
    this.q39input = '#price';
    this.q40input = '#price';
    this.q41input = '#price';
    this.q42input = '#VGA_question42';
    this.q43input = '#price';
    this.q44input = '#price';
    this.q45input = '#price';
    this.q46input = '#price';
    this.inputreviewpopupOK = page.locator('div[class="mt-5 sm:mt-6 items-center flex justify-center gap-x-4"] button[type="button"]');

    // Input Review section
    // Officer & Company Profile
    this.targetmonth = page.locator('span[class="mr-2 "]');
    this.certifiedvalue = page.locator(':text-is("Certified Value") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.businessvalue = page.locator(':text-is("Business Value") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.returnoninvestment = page.locator(':text-is("Return on investment assumption") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.liabilities = page.locator(':text-is("Liabilities to be paid off") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.estimatedlegalfee = page.locator(':text-is("Estimated legal, accounting, M&A fees") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.federalincometax = page.locator(':text-is("Federal Income Tax Rate") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.stateincometax = page.locator(':text-is("State Income Tax Rate") + td > div > span[class="mr-2 text-[#04407E]"]');

    //Discretionary Expense Adjustments
    this.ira40k = page.locator(':text-is("IRA/401(k)/pension contributions") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.personalauto = page.locator(':text-is("Personal auto(s)") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.autofuel = page.locator(':text-is("Auto fuel for personal/family") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.officerfamilyinsurance = page.locator(':text-is("Officer & family auto, health, life insurance") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.homeoroffsite = page.locator(':text-is("Home or offsite office") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.homeoffice = page.locator(':text-is("Home office (including cell phone & utilities)") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.charitablecontributions = page.locator(':text-is("Charitable contributions, donations & gifts") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.duesandsubscriptions = page.locator(':text-is("Dues & subscriptions") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.propertytaxes = page.locator(':text-is("Property taxes & insurance") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.mealsandentertainment = page.locator(':text-is("Meals & entertainment") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.travel = page.locator(':text-is("Travel (non-business)") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.professionalfees = page.locator(':text-is("Professional fees (tax, legal, coaching, etc.)") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.repairsandmaintenance = page.locator(':text-is("Repairs & maintenance") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.creditcardexpense = page.locator(':text-is("Credit card expenses") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.rebates = page.locator(':text-is("Rebates (credit cards, supplier, etc. income)") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.nonworkingfamilypayroll = page.locator(':text-is("Non-working family members on payroll") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.potentialunreportedincome = page.locator(':text-is("Potential unreported income") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.other = page.locator(':text-is("Other") + td > div > span[class="mr-2 text-[#04407E]"]');

    //Personal Financial Data (Additioinal Income)
    this.retainedbusinessincome = page.locator(':text-is("Retained business property net income") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.anticipatedmonthlyincome = page.locator(':text-is("Anticipated monthly social security income") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.projectedincome = page.locator(':text-is("Projected income from other sources") + td > div > span[class="mr-2 text-[#04407E]"]'); 

    //Personal Financial Data (Personal Assets)
    this.liquidinvestments = page.locator(':text-is("Liquid investments & cash accounts") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.stockbondvalue = page.locator(':text-is("Stock and bond portfolio value") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.cashvaluelifeinsurance = page.locator(':text-is("Cash value of life insurance") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.ownerretirementportfolio = page.locator(':text-is("Owner/Spouse retirement portfolio value") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.personalequity = page.locator(':text-is("Personal residence equity") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.realstateequity = page.locator(':text-is("Real estate investment equity") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.businessequity = page.locator(':text-is("Business investment equity") + td > div > span[class="mr-2 text-[#04407E]"]');
    this.otherassetsequity = page.locator(':text-is("Other assets equity") + td > div > span[class="mr-2 text-[#04407E]"]');

    //Net Worth Allocation
    this.networthbusinessvalue = page.locator(':right-of(:text-is("Business Value"))');
    this.networthliquidinvestments = page.locator(':right-of(:text-is("Liquid Investments & Cash"))');
    this.stocksbonds = page.locator(':right-of(:text-is("Stocks & Bonds"))');
    this.lifeinsurance = page.locator(':right-of(:text-is("Life Insurance"))');
    this.retirementportfolio = page.locator(':right-of(:text-is("Retirement Portfolio"))');
    this.personalresidence = page.locator(':right-of(:text-is("Personal Residence"))');
    this.realestateinvestments = page.locator(':right-of(:text-is("Real Estate Investments"))');
    this.businessinvestments = page.locator(':right-of(:text-is("Business Investments"))');
    this.otherassets = page.locator(':right-of(:text-is("Other Assets"))');

    this.networthbusinessvaluepercentage = page.locator('tbody tr:nth-child(1) td:nth-child(3)');
    this.networthliquidinvestmentspercentage = page.locator('tbody tr:nth-child(2) td:nth-child(3)');
    this.stocksbondspercentage = page.locator('tbody tr:nth-child(3) td:nth-child(3)');
    this.lifeinsurancepercentage = page.locator('tbody tr:nth-child(4) td:nth-child(3)');
    this.retirementportfoliopercentage = page.locator('tbody tr:nth-child(5) td:nth-child(3)');
    this.personalresidencepercentage = page.locator('tbody tr:nth-child(6) td:nth-child(3)');
    this.realestateinvestmentspercentage = page.locator('tbody tr:nth-child(7) td:nth-child(3)');
    this.businessinvestmentspercentage = page.locator('tbody tr:nth-child(8) td:nth-child(3)');
    this.otherassetspercentage = page.locator('tbody tr:nth-child(9) td:nth-child(3)');

    this.totalequity = page.locator('td[class="p-2 font-semibold "]');
    this.totalequitypercentage = page.locator('td[class="p-2 font-semibold  rounded-br-md"]');

    // Save Report Locators
    this.email = "#email";
    this.confirm_email = "#confirmEmail";
    this.business_name = "#businessName";
    this.password = "#password";
    this.saveprogressbutton = page.locator('button[type="submit"]');

  }

}