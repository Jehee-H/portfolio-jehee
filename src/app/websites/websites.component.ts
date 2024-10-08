import { Component } from '@angular/core';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrl: './websites.component.scss'
})
export class WebsitesComponent {
  public webExampleList = [
    { name: 'FlexboxDefense', beschreibung: 'Dies ist die Beschreibung von Objekt 1.', website: "youtube.com" },
    { name: 'ConfigNow', beschreibung: 'Dies ist die Beschreibung von Objekt 2.', website: "youtube.com" },
    { name: 'THM CMS Typo3 Projekt', beschreibung: 'Dies ist die Beschreibung von Objekt 3.', website: "https://team-f.abija.de/"},

  ];

  public webExperienceList = [
    { topic: 'Frontend', name: ['Angular', 'React'] },
    { topic: 'Backend', name: ['Express', 'Python', 'PHP'] },
    { topic: 'Content Management System', name: ['Typo3'] }
  ];


  numbers: number[] = [1, 2, 3, 4, 5];

  constructor() { }
}
