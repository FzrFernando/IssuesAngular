import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html'
})
export class InicioComponent {

  constructor(private router:Router){}

  goToIssues(){
    this.router.navigate(['/issues']);
  }

  goToAddIssues(){
    this.router.navigate(['/issues/add']);
  }
}
