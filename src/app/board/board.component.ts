import { Component } from '@angular/core';
import { RandomOptionComponent } from '../random-option/random-option.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ RandomOptionComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

}
