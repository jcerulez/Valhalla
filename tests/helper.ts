import { Page } from '@playwright/test';
import {Data} from './data';
import { Locators } from './locators';

export async function navigation (page: Page) {
    let data: Data;
    let locators: Locators;
    data = new Data();
    locators = new Locators(page);


    // Click button 'BEGIN HERE' from homescreen.
    await page.getByRole('button', { name: data.beginhere }).click();
    await page.getByRole('button', { name: data.nextbutton }).click();
    await locators.checkbox.check();
    await page.getByRole('button', { name: data.agreeandstart }).click(); 
}

export async function insertCharacter(originalString: string, charToInsert: string, position: number): Promise<string> {
  if (position < 0 || position > originalString.length) {
    throw new Error("Position out of bounds.");
  }
  return originalString.slice(0, position) + charToInsert + originalString.slice(position);
  }
  

export async function parseStringToNumber(str: string): Promise<number> {
    
    const num = parseFloat(str);
    if (isNaN(num)) {
      throw new Error("Invalid number format");
    }
    return Number(num.toFixed(2));
  }

export async function formatNumberWithCommas(num: string): Promise<string> {

    const x =  await parseStringToNumber(num);
    const y = Math.round(x);
    const z = y.toString();

    const trimmedString = z.trim();
    const decimalIndex = trimmedString.indexOf('.');
    let digitCountBeforeDecimal = 0;
    let final: string = '';

    if (decimalIndex !== -1) {
    // Slice the string from the start up to the decimal point
    digitCountBeforeDecimal = trimmedString.slice(0, decimalIndex).length;
    } else {
    // If no decimal, the count is the length of the whole string
    digitCountBeforeDecimal = trimmedString.length;
    }

    console.log(`The number of digits before the decimal is: ${digitCountBeforeDecimal}`);

    if (digitCountBeforeDecimal < 5) {

      final =  await insertCharacter(z, ',', 1);
    } else if (digitCountBeforeDecimal < 6) {

      final =  await insertCharacter(z, ',', 2);
    }

    return final;
  }

  export async function getpercentvalue(partialValue: string, totalValue: string): Promise<string> {
    const part = await parseStringToNumber(partialValue);
    const total = await parseStringToNumber(totalValue);
    const percent = (part / total) * 100;
    return Math.round(Number(percent.toFixed(2))).toString();
  }

  export function getFormattedDateTime(): string {
  const now = new Date();
  const year = now.getFullYear();
  // Months are 0-indexed, so add 1
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
}