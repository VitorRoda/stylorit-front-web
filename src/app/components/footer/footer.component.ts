import { Component } from '@angular/core'
import $ from "jquery";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor() { }
  scroll(section) {
    let top = $("#" + section).offset().top - 85
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  }
}
