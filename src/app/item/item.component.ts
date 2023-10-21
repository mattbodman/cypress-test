import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountPipe } from '../count.pipe';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, CountPipe],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input({ required: true }) item!: string;
}
