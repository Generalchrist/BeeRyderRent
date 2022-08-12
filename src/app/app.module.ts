import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiImagesPipe } from './pipes/api-images.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarRentComponent } from './components/car-rent/car-rent.component';

import { SkeletonModule} from 'primeng/skeleton';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import {ListboxModule} from 'primeng/listbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {GalleriaModule} from 'primeng/galleria';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DataViewModule} from 'primeng/dataview';
import { ChipModule } from 'primeng/chip';
import {FieldsetModule} from 'primeng/fieldset';
import {DividerModule} from 'primeng/divider';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';

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
    ProfileComponent,
    
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
    InputMaskModule,
    TableModule,
    RatingModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
