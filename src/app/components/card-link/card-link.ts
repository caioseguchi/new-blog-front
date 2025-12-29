import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-link.html',
  styleUrl: './card-link.css',
})
export class CardLink {
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;
}
