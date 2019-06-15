import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-materials';
  isChecked = true;

  onChange($event){
    console.log($event);
  }

  colors = [
    { id: 1, name: 'Green' },
    { id: 2, name: 'Blue'},
    { id: 3, name: 'Orange'},
    ]
    defaultColor = 1;
  }
