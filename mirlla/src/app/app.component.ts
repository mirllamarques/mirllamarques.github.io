import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
ngOnInit() {


    var typed = new Typed("#i-am", {
      strings: ["<h2>So...</h2>","<h2>So, I am Woman</h2>", "<h2>So, I am Dev</h2>", "<h2>So, I am...</h2>"],

      smartBackspace: true,

      typeSpeed: 50,

      backSpeed: 50,

      startDelay: 3000,

      backDelay: 2000,

      showCursor: false
    });
}}
