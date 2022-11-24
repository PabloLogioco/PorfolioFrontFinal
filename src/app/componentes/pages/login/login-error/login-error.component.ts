import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css']
})
export class LoginErrorComponent implements OnInit {

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
