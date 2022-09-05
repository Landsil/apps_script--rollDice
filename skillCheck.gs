/**
This function is responsible for rolling skill checks with DC and a chance to pass it. It lets you use all fancy advantage feats.
It provides extensive log of results.
*/

function skillCheck() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    var roll_check = spreadsheet.getSheetByName("roll_check");
  
    const sides = roll_check.getRange("B1").getValues();
    const needed = roll_check.getRange("B2").getValues(); // use 1 if cell is empty
    roll_check.getRange("A7:E28").setBackground(null);
  
    let adv = roll_check.getRange("D2").getValues();
    let adv_b = (adv == 'true')
    let luck = roll_check.getRange("E2").getValues();
    let luck_b = (luck == 'true')
    let eAcc = roll_check.getRange("F2").getValues();
    let eAcc_b = (eAcc == 'true')
    let dis = roll_check.getRange("G2").getValues();
    let dis_b = (dis == 'true')
  
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
      else if (!adv_b && !luck_b && !eAcc_b && !dis_b) {   // Roll 1 dice if all are false
        let rollCheck = Math.floor(Math.random() * sides) + 1
        results[rollCheck] = results[rollCheck] + 1
        // console.log("all off")
      }
      else if (adv_b && eAcc_b && !luck_b) {   // Roll 2 dice if adv_b and eAcc_b true but no luck
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
      } else if (dis_b) {
        let rollCheck_dis = Math.min(Math.floor(Math.random() * sides) + 1, Math.floor(Math.random() * sides) + 1)
        results[rollCheck_dis] = results[rollCheck_dis] + 1
      }
  
    };
  
    for (let r = 1; r < 21; r++) {
      sum = sum + (r * results[r])
      roll_check.getRange("B" + (7 + r)).setValue(results[r])
      roll_check.getRange("C" + (7 + r)).setValue(results[r] / max)
      orMore = orMore - (results[(r - 1)] / max)
      roll_check.getRange("D" + (7 + r)).setValue(orMore)
      roll_check.getRange("C8:D27").setNumberFormat("##.##%")
      roll_check.getRange("B4").setValue(sum / max)
    };
    n_row = (+needed) + 7
    roll_check.getRange("A" + n_row).setBackground("#FDFF81")
    roll_check.getRange("D" + n_row).setBackground("#50FF3F")
  };
  
