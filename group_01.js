var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var stiArray = [];
var bonus = 0;
var newEmpArray = employees;

for(var i = 0; i < employees.length; i++){
  newEmpArray[i][0] = employees[i][0];
  newEmpArray[i][1] = sti(employees[i]);
  newEmpArray[i][2] = parseInt(employees[i][2]) + (parseInt(employees[i][2]) * newEmpArray[i][1]);
  newEmpArray[i][3] = Math.round(parseInt(employees[i][2]) * (newEmpArray[i][1] / 100));
  console.log(newEmpArray[i]);


}



function sti(emp){
  bonus = 0;
  if(emp[3] <= 2){
    computeBonus(emp , 0);
    return bonus;
  }else if(emp[3] === 3){
    computeBonus(emp , 4);
    return bonus;
  }else if(emp[3] === 4){
    computeBonus(emp , 6);
    return bonus;
  }else{
    computeBonus(emp , 10);
    return bonus;
  }
}

function checkTenure(emp){
  if(emp[1].length <= 4){
    return 5;
  }else {
    return 0;
  }
}

function checkBaseSalary(emp){
  if(emp[2] > 65000){
    return -1;
  }else {
    return 0;
  }
}

function checkTotal(emp){
  if(bonus > 13){
    bonus = 13;
    return bonus;
  }
    return bonus;
}

function computeBonus(emp , per){
  bonus = checkTenure(emp);
  bonus += per + checkBaseSalary(emp);
  bonus = checkTotal(emp);
  return bonus;
}
