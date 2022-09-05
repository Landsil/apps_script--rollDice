/**
This fuction is responsible for just rolling for DMG and checking what was avreage and change to achive target you specified.

*/
function dmgCheck() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  var roll_check = spreadsheet.getSheetByName("roll_check");

  // Lets grab all the dices and handle any errors.
  var d4 = Number(roll_check.getRange("F8").getValues())
  d4 = d4 || 0
  var d6 = Number(roll_check.getRange("F9").getValues());
  d6 = d6 || 0
  var d8 = Number(roll_check.getRange("F10").getValues());
  d8 = d8 || 0
  var d10 = Number(roll_check.getRange("F11").getValues());
  d10 = d10 || 0
  var d12 = Number(roll_check.getRange("F12").getValues());
  d12 = d12 || 0
  var d20 = Number(roll_check.getRange("F13").getValues());
  d20 = d20 || 0
  var target = Number(roll_check.getRange("F15").getValues());
  target = target || 0

  var orMore = 0
  var results = []
  var resultsSum = 0

  const checks = 1000000
  let maxPossible = (d4 * 4) + (d6 * 6) + (d8 * 8) + (d10 * 10) + (d12 * 12) + (d20 * 20)

  // Let's make actuall rolls
  for (let i = 0; i < checks; i++) {
    let rollTotal = 0
    if (d4 > 0) {
      rollSum = rollDice(d4, 4)
    } else { rollSum = 0 }
    rollTotal = rollTotal + rollSum
    if (d6 > 0) {
      rollSum = rollDice(d6, 6)
    } else { rollSum = 0 }
    rollTotal = rollTotal + rollSum
    if (d8 > 0) {
      rollSum = rollDice(d8, 8)
    } else { rollSum = 0 }
    rollTotal = rollTotal + rollSum
    if (d10 > 0) {
      rollSum = rollDice(d10, 10)
    } else { rollSum = 0 }
    rollTotal = rollTotal + rollSum
    if (d12 > 0) {
      rollSum = rollDice(d12, 12)
    } else { rollSum = 0 }
    rollTotal = rollTotal + rollSum
    if (d20 > 0) {
      rollSum = rollDice(d20, 20)
    } else { rollSum = 0 }
    rollTotal = rollTotal + rollSum
    resultsSum = resultsSum + rollTotal

    if (results[rollTotal] === undefined) {
      results[rollTotal] = 0
      results[rollTotal] = results[rollTotal] + 1
    } else { results[rollTotal] = results[rollTotal] + 1 }

    if (rollTotal >= target) {orMore++}

    // console.log(rollTotal)
  }
  // console.log(results)
  // console.log(resultsSum)

  // Posting back to sheet
  roll_check.getRange("G17").setValue(resultsSum / checks)     // Aveare of rolls
  roll_check.getRange("G18").setValue(maxPossible)             // maxPossible roll
  roll_check.getRange("G19").setValue(orMore)             // Achived target or more
  roll_check.getRange("I17").setValue(target / (resultsSum / checks))
  roll_check.getRange("I18").setValue(target / maxPossible)
  if (orMore === 0) {var orMorePer = 0} else {var orMorePer = orMore / checks}
  roll_check.getRange("I19").setValue(orMorePer)

  roll_check.getRange("I17:I19").setNumberFormat("##.###%")

};


function rollDice(dices, sides) {
  let rollSum = 0;
  for (let i = 0; i < dices; i++) {
    rollSum = rollSum + (1 + Math.floor(Math.random() * sides));
    // console.log(rollSum)
  };
  return rollSum
};
