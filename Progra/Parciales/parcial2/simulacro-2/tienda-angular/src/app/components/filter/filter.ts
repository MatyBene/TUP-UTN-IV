import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter {
  searchTerm: string = '';
  
  // Usando el nuevo signal-based output de Angular 20
  searchChange = output<string>();

  onSearch() {
    this.searchChange.emit(this.searchTerm);
  }

  onClear() {
    this.searchTerm = '';
    this.searchChange.emit('');
  }
}
