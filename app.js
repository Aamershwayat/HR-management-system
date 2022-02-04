' use strict'


// let allemployeeObject =[ ];
// function Employee (employeeID,fullName,department,level  ){
//     this.employeeID = employeeID;
//     this.fullName = fullName;
//     this.department = department ;
//     this.level = level ;
//     allemployeeObject.push(this) ;
//   }


//   Employee.prototype.render = function(){
//     document.write("<p> Employee : </p>" )
//     document.write(this.fullName  )
//     document.write("<p> salary: </p>" )
//     document.write( senior )
//  }
//  function salary(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }



// let junior=salary(500,1000)
//  console.log(junior) 
//  let midsenior=salary(1000,1500)
//  console.log(midsenior)
//  let senior=salary(1500,2000)
//  console.log(senior)



//  let tamaraEmployee = new Employee(1002,"Tamara Ayoub","Marketing",	"Senior");
//  let lanaEmployee = new Employee(1001,"Lana Ali","Finance",	"Senior");
//  let saifEmployee = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
//  let ghaziEmployee = new Employee(1000,"Ghazi Samer", "Administration ","senior");
//  let omarEmployee = new Employee(1004,"Omar Zaid","Development","Senior");
//  let ranaEmployee = new Employee(1005,"Rana Saleh","Development","Junior");
//  let hadiEmployee = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

 
//  tamaraEmployee.render();
//  lanaEmployee.render();
//  saifEmployee.render();
//  ghaziEmployee.render();
//  omarEmployee.render();
//  ranaEmployee.render();
//  hadiEmployee.render();

 

function randomId (){
  var randomId= Math.ceil(Math.random()*10000)
  return randomId;
}

console.log("Test random:",randomId());

var form=document.getElementById("firstAamerForm");
form.addEventListener('submit',onSubmit);
function onSubmit(event){
  event.preventDefault();
var userName=document.getElementById("user_name").value;
var selectDepartment=document.getElementById("select_dep");
var strSelectDepartment = selectDepartment.options[selectDepartment.selectedIndex].text;
var selectOption=document.getElementById("select_opt");
var strSelectOption= selectOption.options[selectOption.selectedIndex].text;
var selectImage=document.getElementById("img_url").value;
// console.log("userName:",userName,"selectDepartment:",strSelectDepartment,"selectOption:",strSelectOption,":selectImage:",selectImage)

var cardContainer=document.getElementById("card_container");
var card=document.createElement('div');
card.classList.add("card");
cardContainer.appendChild(card);
var image=document.createElement('img');
image.src=selectImage;
var username=document.createElement('p');
username.innerHTML=`Usermame: ${userName}`;
var department=document.createElement('p');
department.innerHTML=`Department: ${strSelectDepartment}`;
var rank=document.createElement("p");
rank.innerHTML=`Rank: ${strSelectOption}`;
var idNumber=document.createElement('p');
idNumber.innerHTML=`ID: ${randomId()}`;

card.appendChild(image);
card.appendChild(username);
card.appendChild(department);
card.appendChild(rank);
card.appendChild(idNumber);

}

