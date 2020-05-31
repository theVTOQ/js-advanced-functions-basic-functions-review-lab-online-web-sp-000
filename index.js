// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*"){
  return function(adj = "special"){
    return `You are ${flair}${adj}${flair}!`;
  }
}

const Calculator = {
  function add(num1, num2){
    return num1 + num2
  }

  function subtract(num1, num2){
    return num1 - num2
  }
}
