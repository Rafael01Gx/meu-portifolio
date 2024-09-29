import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogQrcodeComponent } from '../dialog/dialog-qrcode/dialog-qrcode.component';
import { EDialogPanelClass } from '../../enum/EDialogPannelClass.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  #dialog = inject(MatDialog);
  public openDialog( ){
    this.#dialog.open(DialogQrcodeComponent,{
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
