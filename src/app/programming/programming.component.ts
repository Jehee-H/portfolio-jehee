import { Component } from '@angular/core';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrl: './programming.component.scss'
})
export class ProgrammingComponent {

  public progExampleList = [
    { name: 'Java', pfad: '../../assets/programming/Java-Logo.svg',  },
    { name: 'Python', pfad: '../../assets/programming/Java-Logo.svg', },
    { name: 'JavaScript ', pfad: '../../assets/programming/Java-Logo.svg', },
    { name: 'C#', pfad: '../../assets/programming/Logo_C_sharp.svg',},

  ];

}
