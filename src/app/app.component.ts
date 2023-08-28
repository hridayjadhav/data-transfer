import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ChildComponent) view ! : ChildComponent
  title = 'data-transfer';
  inputName = '';
  inputName2 = '';
  inputObj = {"name":'', "surname":''};
  TransferData(name:any, surname:any){
    this.inputName = name; 
    this.inputName2 = surname;   //here we can put 2 or more files too.
    this.inputObj = {"name":name, "surname":surname};   //here we can use both things in one.
  }
}
