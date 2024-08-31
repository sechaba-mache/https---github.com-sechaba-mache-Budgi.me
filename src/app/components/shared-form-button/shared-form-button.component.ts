import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-shared-form-button',
  templateUrl: './shared-form-button.component.html',
  styleUrls: ['./shared-form-button.component.scss'],
  imports: [IonButton],
  standalone: true
})
export class SharedFormButtonComponent {

  constructor() { }

}
