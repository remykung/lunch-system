import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ MatCardModule,
             CommonModule,
             ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  foods = ['tea', 'coffee', 'sushi'];

}
