import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CategoryCardLongComponent } from 'src/app/components/category-card-long/category-card-long.component';
import { DrawerComponent } from 'src/app/components/drawer/drawer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, DrawerComponent, CategoryCardLongComponent],
})
export class HomePage {
  constructor() {}
}
