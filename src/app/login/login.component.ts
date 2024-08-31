import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { SharedFormButtonComponent } from '../components/shared-form-button/shared-form-button.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonInput, IonButton, IonIcon, CommonModule, SharedFormButtonComponent],
  standalone: true
})
export class LoginComponent {
  signUp: boolean = false;

  constructor() { }

  signUpPage() {
    this.signUp = !this.signUp;
  }
}
