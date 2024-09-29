import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { EDialogPanelClass } from '../../enum/EDialogPannelClass.enum';
import { IProjects } from '../../interface/IProjects.interface';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  
#dialog = inject(MatDialog);

  public arrayProjects= signal<IProjects[]>([
   /* {
      src: 'assets/img/projects/vfull.png',
      alt: 'Vida FullStack',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: 'Descrição ...',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
  */]);

  public openDialog(data: IProjects|null){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
