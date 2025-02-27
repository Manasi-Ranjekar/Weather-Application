import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ RightContainerComponent, LeftContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherApp';
}
