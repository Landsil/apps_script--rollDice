/***
This code will make sheet for data input.
https://developers.google.com/apps-script/reference/spreadsheet?hl=en
*/

function make_sheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var roll = spreadsheet.getSheetByName("roll");
  if (roll == undefined) {
    spreadsheet.insertSheet().setName("roll");
    var roll = spreadsheet.getSheetByName("roll");
  }
  roll.getRange("A1").setValue("Sides").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("B1").setValue("20").setHorizontalAlignment("center").setBackground("grey");

  roll.getRange("D1").setValue("Advantage").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("D2").setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox());
  roll.getRange("E1").setValue("Lucky").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("E2").setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox());
  roll.getRange("F1").setValue("Elven Accuracy").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("F2").setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox());

  roll.getRange("A4").setValue("Average").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A2").setValue("Needed").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("B2").setHorizontalAlignment("center").setFontWeight("bold").setBackground("grey");

  roll.setColumnWidth(1, 80);
  roll.setColumnWidth(2, 60);
  roll.setColumnWidth(3, 60);
  roll.getRange("A5:K5").setBorder(null, null, true, null, null, null, "black", SpreadsheetApp.BorderStyle.SOLID_THICK)
  roll.getRange("A6").setValue("Results").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("B6").setValue("Count").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("C6").setValue("%").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("D6").setValue("or more").setHorizontalAlignment("center").setFontWeight("bold");

  roll.getRange("A8").setValue("1").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A9").setValue("2").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A10").setValue("3").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A11").setValue("4").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A12").setValue("5").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A13").setValue("6").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A14").setValue("7").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A15").setValue("8").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A16").setValue("9").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A17").setValue("10").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A18").setValue("11").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A19").setValue("12").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A20").setValue("13").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A21").setValue("14").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A22").setValue("15").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A23").setValue("16").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A24").setValue("17").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A25").setValue("18").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A26").setValue("19").setHorizontalAlignment("center").setFontWeight("bold");
  roll.getRange("A27").setValue("20").setHorizontalAlignment("center").setFontWeight("bold");

  roll.getRange("C8:D27").setHorizontalAlignment("center")

}
