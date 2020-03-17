import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    navLinks = [
        { path: 'calc', label: 'Home' },
        // { path: 'calc', label: 'Calc' },
        // { path: 'calc/:id', label: 'The Game' },
        ];
    constructor() {

    }

    ngOnInit(): void {
    }

}
