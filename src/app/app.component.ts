import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ComplexFormComponent } from './complex-form/complex-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComplexFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'angular-testes';
}
