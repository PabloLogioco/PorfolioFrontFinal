import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualiza-bd',
  templateUrl: './actualiza-bd.component.html',
  styleUrls: ['./actualiza-bd.component.css']
})
export class ActualizaBDComponent implements OnInit {

  nIntervId: any;

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.nIntervId = setInterval(() => this.finaliza(), 1000); // 1 seg
  }

  finaliza() {
    clearInterval(this.nIntervId);    // release our intervalID from the variable
    this.nIntervId = null;
    this.router.navigate(['home']);
  }
}
