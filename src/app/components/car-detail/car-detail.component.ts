import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Car } from 'src/app/models/Car';
import { CarDetail } from 'src/app/models/CarDetail';
import { CarImage } from 'src/app/models/CarImage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { CartService } from 'src/app/services/cart.service';
import { backendUrl } from 'src/app/services/service-constants.service';
import { CarRentComponent } from '../car-rent/car-rent.component';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [DialogService]
})
export class CarDetailComponent implements OnInit {
  
  dataLoaded = false;
  currentCar : CarDetail;
  url = backendUrl;
  
  attributes : any[] = [];
  
  rentDate: string = "";
  returnDate: string = "";

  ref: DynamicDialogRef
  minDate: Date;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private cartService:CartService,
    private toastrService:ToastrService,
    private dialogueService:DialogService
    
  ) {}

  ngOnInit(): void {

    this.minDate = new Date()
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCurrentCar(params["carId"])
      }
    })
  }


  getCurrentCar(carId: number) {
    this.carService.getCarDetail(carId).subscribe(result => {
      if (result.success) {
        this.currentCar = result.data;
        this.getAttributes()
        this.dataLoaded = true;
      }
    });
  }

  getAttributes(){
    this.attributes.push({key: "Brand", value: this.currentCar.brandName})
    this.attributes.push({key: "Model", value: this.currentCar.model})
    this.attributes.push({key: "Color", value: this.currentCar.colorName})
    this.attributes.push({key: "Year", value: this.currentCar.modelYear})
    this.attributes.push({key: "Daily Price", value: this.currentCar.dailyPrice + '$'})
  }

  rent(car:CarDetail){
    this.ref = this.dialogueService.open(CarRentComponent, {
      header: 'Rent Car',
      width: '70%',
      contentStyle: { 'overflow': 'auto' },
      data: car
    });
  }


}
