import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPannelClass.enum';
import { IProjects } from '../../interface/IProjects.interface';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/logo_SFND.png',
      alt: 'Logo Laboratório AMM',
      title: 'Sistema Web de Gestão e Automação de Demandas para Laboratório Metalúrgico',
      width: '50px',
      height: '55px',
      description: `<p>Este projeto tem como objetivo desenvolver um <strong>Aplicativo Web de Gestão de Laboratório Metalúrgico</strong>,
       utilizando o framework <strong>Angular 18</strong>, que garante escalabilidade e desempenho.
        A solução foi construída para atender à gestão de demandas dentro de um laboratório metalúrgico,
         com uma estrutura de níveis de usuários, como <strong>operador</strong> e <strong>administrador</strong>.
          Através da interface intuitiva, o administrador pode gerenciar as demandas geradas pelos usuários, atribuindo tarefas aos operadores e,
           após a execução, aprovar as demandas, gerando relatórios de forma automática.</p> <h5>Tecnologias Utilizadas:</h5>
            <ul>
            <li><strong>Angular 18:</strong> Framework front-end de alta performance e escalabilidade, ideal para a criação de aplicações dinâmicas e responsivas.</li>
             <li><strong>ApexCharts.js:</strong>
              Biblioteca para geração de gráficos interativos, permitindo a visualização clara de dados e métricas relevantes para a gestão do laboratório.</li>
               <li><strong>jsPDF:</strong> Biblioteca para gerar relatórios em PDF automaticamente, facilitando o processo de documentação e entrega de resultados aos usuários.</li>
                <li><strong>API REST:</strong> Comunicação com uma API backend, permitindo integração de funcionalidades como autenticação de usuários e gerenciamento de demandas.</li>
                 <li><strong>JWT (JSON Web Token):</strong> Implementação de um sistema de autenticação seguro para garantir que apenas usuários autorizados acessem funcionalidades específicas do sistema.</li>
                  </ul> <h5>Objetivos e Benefícios:</h5>
                   <ul> <li><strong>Gerenciamento de Demandas:</strong>
                    O sistema permite que os usuários enviem demandas que podem ser visualizadas e atribuídas pelos administradores aos operadores, garantindo a organização e a eficiência no processo.</li>
                     <li><strong>Fluxo de Aprovação e Relatórios:</strong> Após os operadores concluírem as demandas, os administradores podem aprová-las automaticamente, gerando relatórios em PDF para documentar o processo.</li>
                      <li><strong>Visualização de Dados:</strong> A integração com a biblioteca ApexCharts.js permite que os administradores e operadores visualizem gráficos e relatórios interativos, facilitando a análise de dados e a tomada de decisões.</li>
                       <li><strong>Escalabilidade:</strong> A utilização de Angular 18 assegura que o sistema seja altamente escalável, atendendo a um grande número de usuários e interações sem comprometer a performance.</li>
                        <li><strong>Segurança:</strong> A autenticação baseada em JWT garante que o acesso ao sistema seja restrito, com controles específicos para cada nível de usuário.</li>
                         <li><strong>Facilidade de Manutenção:</strong> A arquitetura modular e as tecnologias modernas utilizadas permitem que a aplicação seja facilmente mantida e atualizada conforme novas funcionalidades e requisitos surgem.</li> </ul>`,
      links: [
        {
          name: 'Conheça o repositório github do projeto',
          href: 'https://github.com/Rafael01Gx/AppWebLaboratorio-Frontend',
        },
      ],
    },
    {
      src: 'assets/img/projects/nodejs-icon-logo-png-transparent.png',
      alt: 'Logo NodeJs',
      title: 'Projeto API Rest - Gestão de Laboratório Industrial',
      width: '55px',
      height: '55px',
      description: `

    <p>Este projeto visa desenvolver uma <strong>API Rest escalável e segura</strong>, utilizando Node.js para atender às necessidades de um <strong>AppWeb de gestão de laboratório industrial</strong>. A solução foi construída seguindo o padrão de arquitetura <strong>MVC</strong>, garantindo organização, facilidade de manutenção e expansão para novas funcionalidades.</p>

    <h5>Tecnologias Utilizadas:</h5>
    <ul>
      <li><strong>Node.js:</strong> Ambiente de execução assíncrono, ideal para lidar com múltiplas requisições simultâneas e garantir performance.</li>
      <li><strong>Express.js:</strong> Framework minimalista para estruturar as rotas e middlewares da API de forma eficiente.</li>
      <li><strong>MongoDB:</strong> Banco de dados NoSQL, que proporciona flexibilidade e escalabilidade no armazenamento de dados.</li>
      <li><strong>Mongoose (ODM):</strong> Facilita a interação com o MongoDB, proporcionando uma gestão eficiente dos dados.</li>
      <li><strong>JSON Web Token (JWT):</strong> Implementado para garantir uma autenticação segura, permitindo o controle de acesso à API.</li>
      <li><strong>Nodemailer:</strong> Integrado para envio de e-mails automáticos, como notificações e relatórios aos usuários do sistema.</li>
    </ul>

    <h5>Objetivos e Benefícios:</h5>
    <ul>
      <li><strong>Arquitetura MVC:</strong> Modulariza a aplicação, separando a lógica de negócios, a interface e os dados, facilitando a manutenção e a implementação de novas funcionalidades.</li>
      <li><strong>Segurança:</strong> O uso de JWT assegura que apenas usuários autenticados possam acessar recursos sensíveis da API.</li>
      <li><strong>Escalabilidade:</strong> MongoDB e a arquitetura MVC permitem que a API seja facilmente adaptada ao crescimento do laboratório, atendendo a novas demandas e usuários.</li>
      <li><strong>Facilidade de Manutenção:</strong> A estrutura modular e as ferramentas escolhidas tornam o código fácil de manter e expandir, sem impactar o desempenho do sistema.</li>
      <li><strong>Integração com E-mails:</strong> O Nodemailer permite o envio automático de notificações, como relatórios e atualizações, melhorando a comunicação com os usuários.</li>
    </ul>
    `,
      links: [
        {
          name: 'Conheça o repositório github do projeto',
          href: 'https://github.com/Rafael01Gx/AppWebLaboratorio-Backend',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects | null) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
      minWidth: '70lvw',
      maxWidth: '95lvw'
    });
  }
}
