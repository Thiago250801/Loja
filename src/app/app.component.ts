import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  goToIndex(){
    this.router.navigate(['/','index'])
  }
  goToCadastrar(){
    this.router.navigate(['/', 'cadastrar'])
  }
  goToProdutos(){
    this.router.navigate(['/', 'produtos'])
  }
}
