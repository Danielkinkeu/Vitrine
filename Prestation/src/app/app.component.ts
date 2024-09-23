import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { Projet1Component } from './components/projet1/projet1.component';
import { Projet2Component } from './components/projet2/projet2.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    Projet1Component,
    Projet2Component,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
