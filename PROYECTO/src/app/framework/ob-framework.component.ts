import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ob-framework-component',
    templateUrl: './ob-framework.component.html',
    styleUrls: ['./ob-framework.component.css']
})
export class AppObFrameworkComponent implements OnInit {

    constructor(
        private router: Router
    ) {}

    ngOnInit() {
/*         if ( !this.loginService.authUser ) {
            this.router.navigate(['/login']);
        } */
    }
}
