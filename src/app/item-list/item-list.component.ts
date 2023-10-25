import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemApiService } from '../item-api.service';
import { map, Observable } from 'rxjs';
import { ItemComponent } from '../item/item.component';
import { sortFunction } from '../sort.function';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  providers: [ItemApiService],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  itemService = inject(ItemApiService);
  items$: Observable<string[]>;
  @Output() itemClicked = new EventEmitter<string>();

  constructor() {
    this.items$ = this.itemService.fetchItems$()
    .pipe(map((items) => sortFunction(items)));
  }

    onClick(item: string): void {
    this.itemClicked.emit(item);
  }
}
