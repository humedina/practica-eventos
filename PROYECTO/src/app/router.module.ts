import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppObFrameworkComponent } from './framework/ob-framework.component';
import { AltaPersonalComponent } from './personal/alta-personal/alta-personal.component';

const APP_ROUTES: Route[] = [
    {
        path: 'registro-clientes', component: AltaPersonalComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouterModule {}
