import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private service : AuthService) { }

  ngOnInit(): void {
    const getUserState = localStorage.getItem('loginState');

    if (getUserState === null) {
      this.router.navigate(['/home']);
    } else {
     return;

    }
  }

}
