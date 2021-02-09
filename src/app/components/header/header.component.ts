import { Component, Input, ViewChild, ElementRef } from '@angular/core'
import $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() config = {}

  @ViewChild('menu') menu: ElementRef


  constructor() {
  }

  scroll(section) {
    let top = $("#" + section).offset().top - 85
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  }

  getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
}
