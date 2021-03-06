function runRolls() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  var roll = spreadsheet.getSheetByName("roll");

  const sides = roll.getRange("B1").getValues();
  const needed = roll.getRange("B2").getValues(); // use 1 if cell is empty
  roll.getRange("A7:E28").setBackground(null);

  let adv = roll.getRange("D2").getValues();
  let adv_b = (adv == 'true')
  let luck = roll.getRange("E2").getValues();
  let luck_b = (luck == 'true')
  let eAcc = roll.getRange("F2").getValues();
  let eAcc_b = (eAcc == 'true')

  let orMore = 1
  let sum = 0

  let results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const max = 1000000
    ;

  for (let i = 0; i < max; i++) {
    if (adv_b && luck_b && eAcc_b) {     // Roll 4 dice if all are true, take best
      let rollCheck = Math.max(Math.floor(
        Math.random() * sides) + 1,
        Math.floor(Math.random() * sides) + 1,
        Math.floor(Math.random() * sides) + 1,
        Math.floor(Math.random() * sides) + 1)
      results[rollCheck] = results[rollCheck] + 1
      // console.log("adv and luck and eAcc")
    }
    else if (adv_b && luck_b && !eAcc_b) {     // Roll 3 dice if 2 are true and eAcc_b is false (explicit just in case)
      let rollCheck = Math.max(
        Math.floor(Math.random() * sides) + 1,
        Math.floor(Math.random() * sides) + 1,
        Math.floor(Math.random() * sides) + 1)
      results[rollCheck] = results[rollCheck] + 1
      // console.log("adv and luck but no eAcc")
    }
    else if (!adv_b && !luck_b && !eAcc_b) {   // Roll 1 dice if all are false
      let rollCheck = Math.floor(Math.random() * sides) + 1
      results[rollCheck] = results[rollCheck] + 1
//       console.log("all off")
    }
    else if (adv_b && eAcc_b && !luck_b) {   // Roll 2 dice if and and eAcc_b true but no luck
      let rollCheck = Math.max(
        Math.floor(Math.random() * sides) + 1,
        Math.floor(Math.random() * sides) + 1)
      results[rollCheck] = results[rollCheck] + 1
      // console.log("adv and eAcc_b but no luck")
    }
    else if (adv_b || luck_b && !eAcc_b) {         // Roll 2 dice if either is true, take better
      let rollCheck_adv = Math.max(Math.floor(Math.random() * sides) + 1, Math.floor(Math.random() * sides) + 1)
      results[rollCheck_adv] = results[rollCheck_adv] + 1
      // console.log("adv or luck but no eAcc")
    }
  };


  for (let r = 1; r < 21; r++) {
    sum = sum + (r * results[r])
    roll.getRange("B" + (7 + r)).setValue(results[r])
    roll.getRange("C" + (7 + r)).setValue(results[r] / max)
    orMore = orMore - (results[(r - 1)] / max)
    roll.getRange("D" + (7 + r)).setValue(orMore)
    roll.getRange("C8:D27").setNumberFormat("##.##%")
    roll.getRange("B4").setValue(sum / max)
  };
  n_row = (+needed) + 7
  roll.getRange("A" + n_row).setBackground("#FDFF81")
  roll.getRange("D" + n_row).setBackground("#50FF3F")

};
