import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { OptionsService } from '../options.service';
import { Subscription } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-random-option',
  standalone: true,
  imports: [ CommonModule,
             ButtonComponent,
             MatTableModule,
             MatCardModule],
  templateUrl: './random-option.component.html',
  styleUrl: './random-option.component.css'
})
export class RandomOptionComponent implements OnDestroy{

  options: string[] = [];
  selectedOption?: string;
  private optionsSubscription: Subscription;

  constructor (private optionsService: OptionsService) {
    this.optionsSubscription = this.optionsService.currentOptions.subscribe(options => this.options = options);
  }

  showRandomOption() {
    if (this.options.length > 0 ) {
      const randomIndex = Math.floor(Math.random() * this.options.length);
      this.selectedOption = this.options[randomIndex];
      console.log(this.selectedOption);
    }
  }

  ngOnDestroy() {
    this.optionsSubscription.unsubscribe();
  }

}
