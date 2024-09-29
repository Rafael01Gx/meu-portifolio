import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interface/IProjects.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogProjectsComponent } from '../dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-dialog-qrcode',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-qrcode.component.html',
  styleUrl: './dialog-qrcode.component.scss'
})
export class DialogQrcodeComponent  implements OnInit{
  constructor(
    private _dialogRef: MatDialogRef<DialogQrcodeComponent>
  ){

  }


  ngOnInit(): void {

  }

  public closeModal(){
    return this._dialogRef.close();

  }
}