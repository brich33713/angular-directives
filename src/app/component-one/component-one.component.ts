import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styles: [`
    .dontDisplay {
      display: none;
    }
  `]
})
export class ComponentOneComponent implements OnInit {

  constructor() { }

  display: boolean = true;
  actionArray: Array<any> = [];

  ngOnInit(): void {
  }

  buttonClick(){
    this.display = !this.display;
    this.actionArray.push("button pushed");
  }


}
