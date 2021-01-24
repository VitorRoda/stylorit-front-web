import { Component, Input, ViewChild, ElementRef } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input() config = {}

    @ViewChild('menu') menu: ElementRef

    constructor() { }


}
