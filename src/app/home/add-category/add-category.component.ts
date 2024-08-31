import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone'

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  imports: [IonContent, IonInput, IonButton],
  standalone: true
})
export class AddCategoryComponent {

  constructor() { }

}
