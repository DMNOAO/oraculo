import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
    });
  }

  // Obtener controles del formulario
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Manejar inicio de sesión
  async onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Simular validación con un usuario registrado en localStorage
      const registeredUser = JSON.parse(localStorage.getItem('user') || '{}');

      if (registeredUser.email === email && registeredUser.password === password) {
        console.log('Inicio de sesión exitoso');
        sessionStorage.setItem('user', JSON.stringify(registeredUser));
        this.router.navigate(['/home']);
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Correo o contraseña incorrectos.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    } else {
      console.log('Formulario inválido');
    }
  }
}
