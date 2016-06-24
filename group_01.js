var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var bonus = 0;
var newEmpArray = employees;


for(var i = 0; i < employees.length; i++){
  var employeeNumber = employees[i][1];
  var employeeName = employees[i][0];
  var baseSalary = parseInt(employees[i][2]);
  var reviewScore = parseInt(employees[i][3]);
  var uglyPercent = (sti(employees[i]) / 100);
  // employee name
  newEmpArray[i][0] = employeeName;
  // bonus percent
  newEmpArray[i][1] = sti(employees[i]);
  // adjusted annual income + bonus
  newEmpArray[i][2] = baseSalary + (baseSalary * uglyPercent);
  // total bonus rounded to nearest dollar
  newEmpArray[i][3] = Math.round(baseSalary * uglyPercent);
  console.log(newEmpArray[i]);
}



function sti(emp){
  bonus = 0;
  if(emp[3] <= 2){
    computeBonus(emp , 0);
  }else if(emp[3] === 3){
    computeBonus(emp , 4);
  }else if(emp[3] === 4){
    computeBonus(emp , 6);
  }else{
    computeBonus(emp , 10);
  }
  return bonus;
}

function computeBonus(emp , percent){
  bonus = checkTenure(emp , employeeNumber);
  bonus += percent + checkBaseSalary(emp);
  bonus = checkTotal(bonus);
}

function checkTenure(emp , empNum){
  if(empNum.length <= 4){
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

function checkTotal(bonus){
  if(bonus > 13){
    return 13;
  }else{
    return bonus;
  }

}
