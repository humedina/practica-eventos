// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './router.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { AppObFrameworkComponent } from './framework/ob-framework.component'
import { AppObAlertComponent } from './framework/alert/alert.component';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { BlockUIModule } from 'ng-block-ui';
import { AltaPersonalComponent } from './personal/alta-personal/alta-personal.component';
import { EmpleadoService } from './services/empleado-service';

@NgModule({
  declarations: [
    AppComponent,
    AppObFrameworkComponent,
    AppObAlertComponent,
    AltaPersonalComponent,

  ],
  imports: [
    BrowserModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRouterModule,
    NgbModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    BlockUIModule.forRoot({
      message: 'Procesando, espere un momento...',
      delayStart: 100,
      delayStop: 1000
    }),
  ],
  providers: [
    DatePipe,
    DatePipe,
    EmpleadoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
