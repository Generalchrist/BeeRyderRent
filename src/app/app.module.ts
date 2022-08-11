import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { SkeletonModule} from 'primeng/skeleton';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import {ListboxModule} from 'primeng/listbox';
import {InputNumberModule} from 'primeng/inputnumber';
import { ApiImagesPipe } from './pipes/api-images.pipe';
import {GalleriaModule} from 'primeng/galleria';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { CarRentComponent } from './components/car-rent/car-rent.component';
import {DataViewModule} from 'primeng/dataview';
import { ChipModule } from 'primeng/chip';
import {FieldsetModule} from 'primeng/fieldset';
import {DividerModule} from 'primeng/divider';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    CarDetailComponent,
    FilterPipePipe,
    ApiImagesPipe,
    CarRentComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SkeletonModule,
    CardModule,
    ButtonModule,
    AccordionModule,
    DropdownModule,
    ListboxModule,
    InputNumberModule,
    GalleriaModule,
    DialogModule,
    DynamicDialogModule,
    DataViewModule,
    ChipModule,
    FieldsetModule,
    DividerModule,
    CalendarModule,
    InputMaskModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
