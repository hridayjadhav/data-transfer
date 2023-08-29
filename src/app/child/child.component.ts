import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() nameData : any;   //using input decorator
  @Input() surnameData : any;
  @Input() objData : any;

  @Output() dataupdateevent = new EventEmitter<string>();     //we define this to use output-decorator. child to parent data transfer.
  

  constructor(){}

  

  listArr = [{"name" : "Hriday", "surname" : "Jadhav"}]

  updateList (obj:any){
    this.listArr.push(obj);
    return obj.name + " is added.";
  }





}
