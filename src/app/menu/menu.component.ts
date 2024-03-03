import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ MatMenuModule,
             CardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
