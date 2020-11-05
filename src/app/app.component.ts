import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-fighting-bull';

  printUser(event) {
    console.log(event);
  }

  printError(event) {
    console.error(event);
  }
}
