import { Injectable } from '@angular/core';
//importing the login interface
import { login } from '../INTERFACES/login';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  //LOGIN SYSTEM DATA
  //creating the array of the type login and stored data from api in this array
  login_data:login[] = [
    {id: 1,username :"admin",password: "admin"},
    {id: 2,username :"213057",password: "@17Nov2002"},
    {id: 3,username :"213067",password: "@17Nov1002"},
    {id: 4,username :"213087",password: "@17Nov1001"}

  ];
  //creating the function to export this array
  show_login(){
    return this.login_data;//returning the data of the login_data to this function
  }




  
  //MENU SYSTEM DATA
  //WALLET SYSTEM DATA
  //CART SYSTEM DATA
  constructor() { }
}
