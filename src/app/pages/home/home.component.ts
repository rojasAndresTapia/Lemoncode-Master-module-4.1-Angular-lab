import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from 'src/app/model/user-entity';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private service : AuthService) { }

  ngOnInit(): void {
    const getUserState = localStorage.getItem('loginState');
    if (getUserState) {
      this.router.navigate(['/dashboard']);
    }
  }

}
