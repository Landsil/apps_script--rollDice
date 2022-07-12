/**
Interfaces and other things
*/


// Menu options
function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : 'Make the sheet',
    functionName : 'make_sheets'
  },
  {
    name : 'Roll',
    functionName : 'runRolls'
  },
                ];
  sheet.addMenu('Roll Master', entries);
}
