import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { RandomOptionComponent } from './random-option/random-option.component';
import { BoardComponent } from './board/board.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            ButtonComponent,
            MenuComponent,
            CardComponent,
            RandomOptionComponent,
            BoardComponent
           ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lunch-system';
}
