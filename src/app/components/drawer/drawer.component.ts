import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon]
})
export class DrawerComponent {
  @ViewChild('drawer') drawer: ElementRef<HTMLDivElement> | undefined;
  drawerClosed = true;

  constructor() { }

  moveDrawer() {
    // TODO: Add Functionality for Drawer Handle
    if(this.drawer) {
      if(this.drawerClosed) {
        this.drawer.nativeElement.style.transform = 'translateY(0)';
        this.drawerClosed = false;
      } else {
        this.drawer.nativeElement.style.transform = 'translateY(-32%)';
        this.drawerClosed = true;
      }
    }
  }
}
