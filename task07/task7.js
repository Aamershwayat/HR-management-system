' use strict'


let allemployeeObject =[ ];
function Employee (employeeID,fullName, department ,level  ){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department ;
    this.level = level ;
    allemployeeObject.push(this) ;
  }


  Employee.prototype.render = function(){
    document.write("<p> Employee : </p>" )
    document.write(this.fullName  )
    document.write("<p> salary: </p>" )
    document.write( senior )
 }
 function salary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



let junior=salary(500,1000)
 console.log(junior) 
 let midsenior=salary(1000,1500)
 console.log(midsenior)
 let senior=salary(1500,2000)
 console.log(senior)



 let tamaraEmployee = new Employee(1002,"Tamara Ayoub","Marketing",	"Senior");
 let lanaEmployee = new Employee(1001,"Lana Ali","Finance",	"Senior");
 let saifEmployee = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
 let ghaziEmployee = new Employee(1000,"Ghazi Samer", "Administration ","senior");
 let omarEmployee = new Employee(1004,"Omar Zaid","Development","Senior");
 let ranaEmployee = new Employee(1005,"Rana Saleh","Development","Junior");
 let hadiEmployee = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

 
 tamaraEmployee.render();
 lanaEmployee.render();
 saifEmployee.render();
 ghaziEmployee.render();
 omarEmployee.render();
 ranaEmployee.render();
 hadiEmployee.render();

 





