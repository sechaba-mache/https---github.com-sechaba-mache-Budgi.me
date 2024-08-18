import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonInput, IonButton, IonIcon, CommonModule],
  standalone: true
})
export class LoginComponent {
  signUp: boolean = false;

  constructor() { }

  signUpPage() {
    this.signUp = !this.signUp;
  }
}
