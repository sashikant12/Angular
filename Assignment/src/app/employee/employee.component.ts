import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // result=0;
  // res:any=0;
  usernameDb="Sashi@1234";
  passwordDb="Qwerty@1234";
  checking="";
  constructor() { }
  // onAddition(num1:any,num2:any){
    
  //   let n1=+num1;
  //   let n2=+num2;
    
  //   // this.result=num1+num2;
  //   this.result=n1+n2;
  // }
  check(username:string,password:string){
    if(this.usernameDb==username&& this.passwordDb==password){
      this.checking = "Login";
    }
    else{
      this.checking = "Not Login Try again";
    }
  }
  ngOnInit(): void {
  }

}
