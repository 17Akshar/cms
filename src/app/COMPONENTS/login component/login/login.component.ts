import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//importing the login interface
import { login } from 'src/app/INTERFACES/login';
//importing the main service
import { MainService } from 'src/app/SERVICES/main.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router,private main :MainService) { }//creating the instance of main service
  //accessing the login data from the service in login component
  data:login[] = [];
  username_array:string[]=[];
  password_array:string[]=[]
  ngOnInit(): void {
    this.data = this.main.show_login();
    //seperating the username and password
    this.data.forEach((ua)=>{
      this.username_array.push(ua.username);//storing the username in username_array
      this.password_array.push(ua.password);//storinf the password in password array
    })
  }

  //creating the variables to store data
  username :string = "";
  password : string = "";

  //STORING THE VALUE OF THE INPUT FIELDS(username,password)
  GoToHome(user:string,pass:string){
    //assigning values
    this.username = user;
    this.password = pass;
    this.validate();
  }
  //creating the variables to store index
  uname:number=0;//index of usernmae
  passcode :number =0;//index of password
  Validate:boolean = false;
  validate()
  {
    this.uname= this.username_array.indexOf(this.username)//finding the element and storing the index
    this.passcode = this.password_array.indexOf(this.password)//finding the element and storing the index

    //comparing the index of username &password
    if(this.uname == this.passcode){
      this.route.navigate(['./home']);//if matched then route to home page
    }
    else{
      // alert("ENTER THE VALID CREDENTIALS")//else throw alert
      this.Validate = true
    }
  }

}
