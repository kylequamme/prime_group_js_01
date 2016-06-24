var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var bonus = 0;
var newEmpArray = employees;

for(var i = 0; i < employees.length; i++){
  //employee name
  newEmpArray[i][0] = employees[i][0];
  //bonus percentage
  newEmpArray[i][1] = sti(employees[i]);
  // adjusted annual income + bonus
  newEmpArray[i][2] =  typeof newEmpArray[i][1];
  // total bonus rounded to nearest dollar
  newEmpArray[i][3] = sti(employees[i]);
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
  console.log(employees[i][3]);
  return bonus;
}

function computeBonus(emp , per){
  bonus = checkTenure(emp);
  console.log(bonus);
  bonus += per + checkBaseSalary(emp);
  console.log(bonus);
  bonus = checkTotal(emp);
  console.log(bonus);
  return bonus;
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
    return 13;
  }else{
    return bonus;
  }

}
