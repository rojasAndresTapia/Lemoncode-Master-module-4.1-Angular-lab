import { Component, OnInit } from '@angular/core';
import { UserEntity } from 'src/app/model/user-entity';
import { AuthService } from 'src/app/services/auth.service';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})


export class PublicHeaderComponent implements OnInit {

  getUserState = localStorage.getItem('loginState');

  loginState: UserEntity = {
    username: '',
    password: '',
    isLogged: false,
  };


  constructor(private router: Router, private service : AuthService) {

  }

  ngOnInit(): void {
    const getUserState = localStorage.getItem('loginState');
    this.service.currentLoginState.subscribe(loginState => this.loginState = loginState);
    if (getUserState) {
      this.router.navigate(['/dashboard'])
   ;
    } else {
      return;
    }


  }

}
