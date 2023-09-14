import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studeny',
  templateUrl: './studeny.component.html',
  styleUrls: ['./studeny.component.css']
})
export class StudenyComponent implements OnInit {
  primeNumbers = 0;
  prime="";
  constructor() { }

  ngOnInit(): void {
  }
  checkPrime(PrimeNumber:string){
    let n1=+PrimeNumber;
    let c=true;
    for(let i =2;i<Math.sqrt(n1);i++){
      if(n1%i==0){
        this.prime="Not a prime number";
        c=false;
      }
    }
    if(c){
      this.prime="Prime Number";
    }
  }

  isItalic = false;
  isTextColorBlue = false;

  toggleStyle() {
    this.isItalic = !this.isItalic;
    this.isTextColorBlue = !this.isTextColorBlue;
    
  }
}
