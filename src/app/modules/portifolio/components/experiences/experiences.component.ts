import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Fullstack | NodeJs',
        p: 'Est | 2024 - Presente',
      },
      text:`Com muita dedicação ao desenvolvimento FullStack com NodeJs, minhas habilidades técnicas se destacam por criar soluções elegantes e eficientes. Minhas experiências incluem:`,
      ul:`<li>NodeJs: Desenvolvimento robusto e escalável.</li>
      <li>Express: Criação de servidores eficientes.</li>
      <li>Handlebars: Renderização fluida de páginas dinâmicas.</li>
      <li>Sequelize e MySQL: Administração de bancos de dados relacionais com integridade e alta performance.</li>
      <li>MongoDB e Mongoose: Manipulação ágil e eficiente de dados NoSQL.</li>
      <li>APIs: Desenvolvimento e integração seguindo as melhores práticas para garantir segurança, eficiência e fácil manutenção.</li>
    ` ,
    text2:`<p>Cada desafio é uma oportunidade para aplicar e expandir meu conhecimento, sempre buscando soluções inovadoras e eficazes. Vamos transformar ideias em realidade, com tecnologia de ponta e uma visão focada em excelência.</p>`
  },
  {
    summary: {
      strong: 'Front-end',
      p: 'Est | 2024 - Presente',
    },
    text: `Com muita dedicação ao desenvolvimento Front-end, minhas habilidades técnicas se destacam por criar interfaces elegantes e funcionais. Minhas experiências incluem:`,
    ul: `<li>CSS e HTML5: Criação de layouts modernos e responsivos.</li>
        <li>BootsTrap: Desenvolvimento ágil e estilizado de páginas web.</li>
        <li>JavaScript e DOM: Manipulação dinâmica e interativa de elementos da página.</li>
        <li>Outras Soluções: Aplicação de frameworks e ferramentas diversas para otimização do front-end.</li>`,
    text2: `<p>Encaro cada linha de código como uma peça de um quebra-cabeça que transforma uma estrutura simples em uma interface envolvente e cativante. Mergulho fundo nos desafios para encontrar soluções criativas e inovadoras, sempre com o objetivo de proporcionar a melhor experiência ao usuário.` 
  }
  ,
  {
    summary: {
      strong: 'Framework Angular',
      p: 'Est | 2024 - Presente',
    },
    text: `Minha experiência no desenvolvimento com Angular está focada em compreender e utilizar plenamente o framework Angular18 para criar aplicações robustas e eficientes. Minhas experiências incluem:`,
    ul: `<li>Criar aplicações básicas/intermediárias com o Angular.</li>
        <li>Desenvolver projetos escaláveis no Angular.</li>
        <li>Padronização de projetos Angular de fácil manutenção.</li>
        <li>Implementar soluções que garantem uma excelente experiência de usuário.</li>`,
    text2: `<p>Encaro cada projeto como uma oportunidade para aprofundar meu conhecimento e habilidades em Angular. Dedico-me a entender as nuances do framework, sempre buscando a maestria.</p>`
  }
  ,
  ]);
}
