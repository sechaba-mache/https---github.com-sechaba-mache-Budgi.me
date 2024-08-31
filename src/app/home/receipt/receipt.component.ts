import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
  imports: [IonContent],
  standalone: true
})
export class ReceiptComponent {

  constructor() { }

}
