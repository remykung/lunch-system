import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import  { OptionsService } from '../options.service';
import { Food } from '../food.interface';

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

  foods: Food[] = [
    { name: 'tea', category: 'beverage' },
    { name: 'coffee', category: 'beverage' },
    { name: 'sushi', category: 'food' },
    { name: 'Croissant', category: 'pastry' },
    // Add more items as needed
  ];

  constructor(private optionsService: OptionsService) {}

  addOption(option: Food) {
    this.optionsService.addOption(option.name);
  }

  removeOption(option: Food) {
    this.optionsService.removeOption(option.name);
  }
}
