import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ob-alert-component',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AppObAlertComponent {

    @Input() alertType: string;
    @Input() alertMsg: string;

}
