import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service'
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {userid:'', userpwd:''};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  sendlogin(): void{
    this.apiService
      .sendlogin(this.login)
      .subscribe(data=>{
        console.log(data);
      })
  }

}
