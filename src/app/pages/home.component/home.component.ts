import { Component } from '@angular/core';
import { CardLink } from '../../componets/card-link/card-link';

@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [CardLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
