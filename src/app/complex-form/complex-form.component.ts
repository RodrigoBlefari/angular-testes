import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.sass'],
  standalone: true,
  imports: [FormsModule],
})

export class ComplexFormComponent {
  formData: any = {};

  onSubmit() {
    // Aqui você pode adicionar a lógica para processar o envio do formulário
  }
}
