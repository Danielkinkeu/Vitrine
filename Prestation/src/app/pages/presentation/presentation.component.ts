import { Component } from '@angular/core';
import { Projet1Component } from '../../components/projet1/projet1.component';
import { Projet2Component } from '../../components/projet2/projet2.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [
    Projet1Component,
    Projet2Component,
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

}
