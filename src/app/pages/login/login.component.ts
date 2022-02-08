import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserEntity } from '../../model/user-entity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginState: UserEntity = {
    username: '',
    password: '',
    isLogged: false,
  };
  authservice: any;
  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {
    const getUserState = localStorage.getItem('loginState');
    this.service.currentLoginState.subscribe(
      (loginState) => (this.loginState = loginState)
    );
  }

  newUserState = () => {
    if (
      this.loginState.password === '12345678' &&
      this.loginState.username === 'master8@lemoncode.net'
    ) {
      this.service.updateLoginState({
        username: this.loginState.username,
        password: this.loginState.password,
        isLogged: true,
      });
      this.router.navigate(['/dashboard']);
    } else {
      this.service.updateLoginState({
        username: this.loginState.username,
        password: this.loginState.password,
        isLogged: false,
      });
      alert('Wrong info, try again');
    }
  };
}
