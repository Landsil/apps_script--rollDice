/***
This code will make sheet for data input/output
https://developers.google.com/apps-script/reference/spreadsheet?hl=en
*/

function make_sheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var roll_check = spreadsheet.getSheetByName("roll_check");
  if (roll_check == undefined) {
    spreadsheet.insertSheet().setName("roll_check");
    var roll_check = spreadsheet.getSheetByName("roll_check");
  }
  roll_check.getRange("A1").setValue("Sides").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("B1").setValue("20").setHorizontalAlignment("center").setBackground("#90EE90");

  roll_check.getRange("D1").setValue("Advantage").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("D2").setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox());
  roll_check.getRange("E1").setValue("Lucky").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("E2").setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox());
  roll_check.getRange("F1").setValue("Elven Accuracy").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("F2").setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox());
  roll_check.getRange("G1").setValue("Disadvantage").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("G2").setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox());

  roll_check.getRange("A4").setValue("Average").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A2").setValue("DC").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("B2").setHorizontalAlignment("center").setFontWeight("bold").setBackground("#90EE90");

  roll_check.setColumnWidth(1, 80);
  roll_check.setColumnWidth(2, 60);
  roll_check.setColumnWidth(3, 60);
  roll_check.setColumnWidth(4, 80);
  roll_check.setColumnWidth(5, 80);
  roll_check.setColumnWidth(6, 120);
  roll_check.setColumnWidth(8, 120);
  roll_check.setColumnWidth(9, 80);
  roll_check.getRange("A5:K5").setBorder(null, null, true, null, null, null, "black", SpreadsheetApp.BorderStyle.SOLID_THICK)
  roll_check.getRange("A6").setValue("Results").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("B6").setValue("Count").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("C6").setValue("%").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("D6").setValue("or more").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("F6").setValue("count").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("G6").setValue("dice").setHorizontalAlignment("center").setFontWeight("bold");

  roll_check.getRange("A8").setValue("1").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A9").setValue("2").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A10").setValue("3").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A11").setValue("4").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A12").setValue("5").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A13").setValue("6").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A14").setValue("7").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A15").setValue("8").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A16").setValue("9").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A17").setValue("10").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A18").setValue("11").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A19").setValue("12").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A20").setValue("13").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A21").setValue("14").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A22").setValue("15").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A23").setValue("16").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A24").setValue("17").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A25").setValue("18").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A26").setValue("19").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("A27").setValue("20").setHorizontalAlignment("center").setFontWeight("bold");

  roll_check.getRange("F8").setValue("0").setHorizontalAlignment("center").setBackground("#90EE90");
  roll_check.getRange("F9").setValue("0").setHorizontalAlignment("center").setBackground("#90EE90");
  roll_check.getRange("F10").setValue("0").setHorizontalAlignment("center").setBackground("#90EE90");
  roll_check.getRange("F11").setValue("0").setHorizontalAlignment("center").setBackground("#90EE90");
  roll_check.getRange("F12").setValue("0").setHorizontalAlignment("center").setBackground("#90EE90");
  roll_check.getRange("F13").setValue("0").setHorizontalAlignment("center").setBackground("#90EE90");
  roll_check.getRange("F15").setValue("0").setHorizontalAlignment("center").setBackground("#90EE90");

  roll_check.getRange("F17").setValue("average roll").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("F18").setValue("max possible").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("F19").setValue("T or more in 1mil").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("H17").setValue("T is % of av").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("H18").setValue("T is % of max").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("H19").setValue("% with T or more").setHorizontalAlignment("center").setFontWeight("bold");

  roll_check.getRange("G8").setValue("4").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("G9").setValue("6").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("G10").setValue("8").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("G11").setValue("10").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("G12").setValue("12").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("G13").setValue("20").setHorizontalAlignment("center").setFontWeight("bold");
  roll_check.getRange("G15").setValue("Target (T)").setHorizontalAlignment("center").setFontWeight("bold");

  roll_check.getRange("C8:I50").setHorizontalAlignment("center")

}
