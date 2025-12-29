import { Component } from '@angular/core';
import { CardLink } from '../../components/card-link/card-link';
import { NavBar } from '../../components/nav-bar/nav-bar';

@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [CardLink, NavBar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
