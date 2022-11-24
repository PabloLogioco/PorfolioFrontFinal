import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-out',
  templateUrl: './login-out.component.html',
  styleUrls: ['./login-out.component.css']
})
export class LoginOutComponent implements OnInit {

  nIntervId: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.nIntervId = setInterval(() => this.finaliza(), 3000); // 3 seg.
  }

  private finaliza() {
    clearInterval(this.nIntervId);
    // release our intervalID from the variable
    this.nIntervId = null;
    this.router.navigate(['home']);
  }
}
