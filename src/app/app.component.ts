import { Component } from '@angular/core';
import { StorageService } from './storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'data binding in angular';

  handleEvent() {
    console.log('button click event binding')
  }


}
