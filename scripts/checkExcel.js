const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

const p = path.resolve(__dirname, '..', 'tests', 'testData.xlsx');
console.log('Checking path:', p);
if (!fs.existsSync(p)) {
  console.error('File missing');
  process.exit(2);
}
try {
  const wb = xlsx.readFile(p);
  console.log('Workbook sheets:', Object.keys(wb.Sheets));
  process.exit(0);
} catch (e) {
  console.error('xlsx.readFile error:', e && e.message ? e.message : e);
  process.exit(3);
}
