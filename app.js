' use strict'

var arrayOfEmployee = [];
var savedData = localStorage.getItem("strArrayOfEmployee");
var parseStrArrayOfEmployee = JSON.parse(savedData);

var cardContainer = document.getElementById("card_container");
if (parseStrArrayOfEmployee!= null) {
  

for (let index = 0; index < parseStrArrayOfEmployee.length; index++) {

  var card = document.createElement('div');
  card.classList.add("card");
  cardContainer.appendChild(card);
  var image = document.createElement('img');
  image.src = parseStrArrayOfEmployee[index].selectImage;
  var username = document.createElement('p');
  username.innerHTML = parseStrArrayOfEmployee[index].userName;
  var department = document.createElement('p');
  department.innerHTML = parseStrArrayOfEmployee[index].strSelectDepartment;
  var rank = document.createElement("p");
  rank.innerHTML = parseStrArrayOfEmployee[index].strSelectOption;
  var idNumber = document.createElement('p');
  idNumber.innerHTML = parseStrArrayOfEmployee[index].idNumber;

  card.appendChild(image);
  card.appendChild(username);
  card.appendChild(department);
  card.appendChild(rank);
  card.appendChild(idNumber);

}

}

var form = document.getElementById("firstAamerForm");

form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  var objectOfEmployee = {};
  event.preventDefault();
  var userName = document.getElementById("user_name").value;
  objectOfEmployee.userName = userName;
  var selectDepartment = document.getElementById("select_dep");
  var strSelectDepartment = selectDepartment.options[selectDepartment.selectedIndex].text;
  objectOfEmployee.strSelectDepartment = strSelectDepartment;
  var selectOption = document.getElementById("select_opt");
  var strSelectOption = selectOption.options[selectOption.selectedIndex].text;
  objectOfEmployee.strSelectOption = strSelectOption;
  var selectImage = document.getElementById("img_url").value;
  objectOfEmployee.selectImage = selectImage
  var minimumSalary = Number(document.getElementById("minSalary").value);
  var maximumSalary = Number(document.getElementById("maxSalary").value);
  objectOfEmployee.salary = salary(minimumSalary, maximumSalary);
  objectOfEmployee.idNumber = randomId();
  arrayOfEmployee.push(objectOfEmployee);
  console.log("arrayOfEmployee:", arrayOfEmployee)
  var strArrayOfEmployee = JSON.stringify(arrayOfEmployee);
  localStorage.setItem("strArrayOfEmployee", strArrayOfEmployee);
  var cardContainer = document.getElementById("card_container");
  var card = document.createElement('div');
  card.classList.add("card");
  cardContainer.appendChild(card);
  var image = document.createElement('img');
  image.src = selectImage;
  var username = document.createElement('p');
  username.innerHTML = `Usermame: ${userName}`;
  var department = document.createElement('p');
  department.innerHTML = `Department: ${strSelectDepartment}`;
  var rank = document.createElement("p");
  rank.innerHTML = `Rank: ${strSelectOption}`;
  var idNumber = document.createElement('p');
  idNumber.innerHTML = `ID: ${randomId()}`;

  card.appendChild(image);
  card.appendChild(username);
  card.appendChild(department);
  card.appendChild(rank);
  card.appendChild(idNumber);
}

function salary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomId() {
  var randomId = Math.ceil(Math.random() * 10000)
  return randomId;
}