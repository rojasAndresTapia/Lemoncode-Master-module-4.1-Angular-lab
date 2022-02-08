import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from 'src/app/model/user-entity';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss']
})
export class PrivateMenuComponent implements OnInit {
  getUserState = localStorage.getItem('loginState');
  loginState: UserEntity = {
    username: '',
    password: '',
    isLogged: false,
  };


  constructor(private router: Router, private service : AuthService) {
   }

  ngOnInit(): void {
    this.service.currentLoginState.subscribe(loginState => this.loginState = loginState);

  }
  logOut = () => {
    if (this.getUserState) {
      this.service.updateLoginState({
        username: '',
        password: '',
        isLogged: false,
      });
      this.router.navigate(['/home']);
      localStorage.clear();
    }
  }

}


