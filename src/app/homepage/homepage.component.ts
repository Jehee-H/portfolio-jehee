import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {


  public webExampleList = [
    { name: 'FlexboxDefense', beschreibung: 'Dies ist die Beschreibung von Objekt 1.' },
    { name: 'ConfigNow', beschreibung: 'Dies ist die Beschreibung von Objekt 2.' },
    { name: 'LOL', beschreibung: 'Dies ist die Beschreibung von Objekt 3.' },
    { name: 'ASD', beschreibung: 'Dies ist die Beschreibung von Objekt 3.' },
    { name: 'TEST', beschreibung: 'Dies ist die Beschreibung von Objekt 3.' },
  ];



}
