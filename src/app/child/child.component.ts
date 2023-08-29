import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() nameData: any; //using input decorator
  @Input() surnameData: any;
  @Input() objData: any;

  @Output() dataupdateevent = new EventEmitter<string>(); //we define this to use output-decorator. child to parent data transfer.

  welcome: any;

  constructor(private service: SessionService) {
    this.listArr = this.service.getData();
  }

  ngOnInit() {
    this.welcome = sessionStorage.getItem('name');
  }

  listArr = [{ name: '', surname: '' }];

  updateList(obj: any) {
    this.listArr.push(obj);
    return obj.name + ' is added.';
  }
}
