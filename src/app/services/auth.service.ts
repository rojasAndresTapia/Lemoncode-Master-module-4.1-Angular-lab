import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserEntity } from '../model/user-entity';


@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  public loginSource = new BehaviorSubject<UserEntity>({
    username:'',
    password:'',
    isLogged: false,
  });

  currentLoginState = this.loginSource.asObservable();


  constructor() {

  }


  updateLoginState(loginState: UserEntity) {
    this.loginSource.next(loginState);
    localStorage.setItem('loginState', JSON.stringify(loginState));
    }

  }

