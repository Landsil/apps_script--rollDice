/**
Up to date version at: https://github.com/Landsil/apps_script--rollDice/tree/main
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
    name : 'Roll 20',
    functionName : 'skillCheck'
  },
    {
    name : 'Roll DMG',
    functionName : 'dmgCheck'
  },
                ];
  sheet.addMenu('Roll Master', entries);
}
