import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from 'src/app/model/user-entity';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {
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

    if (getUserState === null) {
      this.router.navigate(['/home'])
    ;
    } else {
      return;
    }
  }

}




