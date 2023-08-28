import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() nameData : any;
  @Input() surnameData : any;
  @Input() objData : any;

  constructor(){}



}
