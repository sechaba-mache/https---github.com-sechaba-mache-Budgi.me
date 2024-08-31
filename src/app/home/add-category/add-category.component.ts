import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone'
import { SharedFormButtonComponent } from 'src/app/components/shared-form-button/shared-form-button.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  imports: [IonContent, IonInput, IonButton, SharedFormButtonComponent],
  standalone: true
})
export class AddCategoryComponent {

  constructor() { }

}
