import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  editProfileForm: FormGroup = this.fb.group({});
  username: string | undefined;
  private _storage: Storage | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController,
    private animationCtrl: AnimationController,
    private storage: Storage
  ) {}

  async ngOnInit() {
    this._storage = await this.storage.create();
    this.loadProfileData();

    this.editProfileForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      educationLevel: ['', Validators.required],
      birthDate: ['', Validators.required],
    });

    const state = this.router.getCurrentNavigation()?.extras.state as { username: string };
    if (state?.username) {
      this.username = state.username;
      this.editProfileForm.patchValue({ username: this.username });
    }
    this.animatePageEntrance();
  }

  // Restaurado: método para navegar a otras páginas
  navigateTo(page: string) {
    this.router.navigate([page]);
  }
  // Animación al entrar a la página
  animatePageEntrance() {
    const formEl = document.querySelector('.edit-profile-form');
    if (formEl) {
      const animation = this.animationCtrl
        .create()
        .addElement(formEl)
        .duration(1000)
        .fromTo('opacity', '0', '1') // De transparente a visible
        .fromTo('transform', 'translateY(50px)', 'translateY(0)');
      animation.play();
    }
  }
// Animar etiquetas de los campos
animateLabels() {
  const labels = document.querySelectorAll('ion-label');
  if (labels) {
    const animation = this.animationCtrl
      .create()
      .addElement(Array.from(labels))
      .duration(500)
      .fromTo('transform', 'translateX(-10px)', 'translateX(0)')
      .fromTo('opacity', '0.5', '1');
    animation.play();
  }
}
  // Animación al guardar datos
  async animateSaveButton() {
    const saveButton = document.querySelector('.save-button');
    if (saveButton) {
      const animation = this.animationCtrl
        .create()
        .addElement(saveButton)
        .duration(500)
        .keyframes([
          { offset: 0, transform: 'scale(1)', backgroundColor: 'var(--ion-color-primary)' },
          { offset: 0.5, transform: 'scale(1.1)', backgroundColor: 'var(--ion-color-success)' },
          { offset: 1, transform: 'scale(1)', backgroundColor: 'var(--ion-color-primary)' },
        ]);
      animation.play();
    }
  }
  async saveProfileData() {
    if (this.editProfileForm.valid) {
          // Animar etiquetas antes de guardar
    this.animateLabels();
    
    // Simular un pequeño retraso para ver la animación
    setTimeout(async () => {
      await this._storage?.set('userProfile', this.editProfileForm.value);
      const alert = await this.alertCtrl.create({
        header: 'Éxito',
        message: 'Los datos del perfil han sido guardados.',
        buttons: ['OK'],
      });
      await alert.present();
    }, 600); // Tiempo suficiente para la animación
  } else {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'Por favor, completa todos los campos obligatorios.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}

  async loadProfileData() {
    const profile = await this._storage?.get('userProfile');
    if (profile) {
      this.editProfileForm.patchValue(profile);
    }
  }

  async clearProfileData() {
    await this._storage?.remove('userProfile');
    this.editProfileForm.reset();
    this.animateInputs();
  }

  clearForm() {
    this.editProfileForm.reset();
    this.animateInputs();
  }

  animateInputs() {
    const usernameEl = document.getElementById('username');
    const firstNameEl = document.getElementById('firstName');
    const lastNameEl = document.getElementById('lastName');

    if (usernameEl && firstNameEl && lastNameEl) {
      const animation = this.animationCtrl
        .create()
        .addElement(usernameEl)
        .addElement(firstNameEl)
        .addElement(lastNameEl)
        .duration(1000)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)');
      animation.play();
    }
  }

  async showProfileData() {
    if (this.editProfileForm.valid) {
      const alert = await this.alertCtrl.create({
        header: 'Datos del Perfil',
        message: `
          Nombre de Usuario: ${this.editProfileForm.get('username')?.value} <br>
          Nombre: ${this.editProfileForm.get('firstName')?.value} <br>
          Apellido: ${this.editProfileForm.get('lastName')?.value} <br>
          Nivel de Educación: ${this.editProfileForm.get('educationLevel')?.value} <br>
          Fecha de Nacimiento: ${this.editProfileForm.get('birthDate')?.value}
        `,
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos obligatorios.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  cerrarSesion() {
    this.router.navigate(['login']);
  }
}
