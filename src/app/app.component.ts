import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(ChildComponent) viewData!: ChildComponent; //using viewchild() decorator
  title = 'Parent';
  inputName = '';
  inputName2 = '';
  inputObj = { name: '', surname: '' };
  response: any;

  constructor(private service: SessionService) {
    sessionStorage.setItem('name', 'Coperate-World');
  }

  TransferData(name: any, surname: any) {
    //here we can put 2 or more files too.
    this.inputObj = { name: name, surname: surname }; //here we can use both things in one.
    this.service.saveData(this.inputObj); //input object will triggered here.
  }

  parentTitle: string = 'Parent';

  updateTitle(title: any) {
    //lets bind it in app.html
    this.parentTitle = title;
  }
}
