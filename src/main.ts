import { Component, ViewEncapsulation } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonComponent],
  template: `
  <div class="container">
    <h1>Hello {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular <br>
    </a>
    
    <cdsButton text="Test demo" icon="cds-ico-bulb" type="secondary"></cdsButton>

</div>
  `,
})
export class App {
  name = 'CDS';
}

bootstrapApplication(App);
