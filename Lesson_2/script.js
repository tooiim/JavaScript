function promptFunction() {
  const firstName = prompt('Напишите ваше имя?');
  const age = prompt('Сколько вам лет?');

  if (age < 20) {
      alert(`Привет, ${firstName}!`);
  } else if (age >= 20 && age < 45) {
      alert(`Здравствуй, ${firstName}!`);
  } else if (age >= 45) {
      alert(`Здравствуйте, ${firstName}!`);
  } else {
      alert('Возраст введён неверно.');
  }

}

promptFunction();


let students = [];
let studentName;

while (true) {
    studentName = prompt("Имя студента");
    
    if (studentName === null) {
        break;
    }
    
    students.push(studentName);
}
let result = students.join(", ") + ".";

console.log(result);


function checkCart(quantity, totalPrice, promoCode) {
  let finalPrice = totalPrice;

  if (quantity > 20) {
    finalPrice *= 0.9;
} else if (quantity > 10) {
    finalPrice *= 0.95; 
}

if (totalPrice > 10000) {
    finalPrice -= 1000; 
}

if (promoCode.toLowerCase() === "methed") {
    finalPrice *= 0.85;
}

return parseFloat(finalPrice.toFixed(2));

}

checkCart();


