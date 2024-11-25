import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.email && this.password) {
      // Guarda los datos del usuario en localStorage (simulación)
      const user = { email: this.email, password: this.password };
      localStorage.setItem('user', JSON.stringify(user));

      console.log('Usuario registrado:', user);

      // Redirige al login después del registro
      this.router.navigate(['/home']);
    } else {
      console.log('Formulario inválido');
    }
  }
}
