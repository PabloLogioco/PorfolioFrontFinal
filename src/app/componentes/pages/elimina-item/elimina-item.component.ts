import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elimina-item',
  templateUrl: './elimina-item.component.html',
  styleUrls: ['./elimina-item.component.css']
})
export class EliminaItemComponent implements OnInit {

  nIntervId: any;

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.nIntervId = setInterval(() => this.finaliza(), 3000); // 3 seg
  }
  
  finaliza() {
    clearInterval(this.nIntervId);
    // release our intervalID from the variable
    this.nIntervId = null;
    this.router.navigate(['home']);
  }
}
