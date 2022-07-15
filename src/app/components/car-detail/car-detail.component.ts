import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/Car';
import { CarDetail } from 'src/app/models/CarDetail';
import { CarImage } from 'src/app/models/CarImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[];
  carDetail: CarDetail;
  dataLoaded = false;
  carImages: CarImage[] = [];
  


  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private cartService:CartService,
    private toastrService:ToastrService,
  ) {}

  ngOnInit(): void {

    


    this.activatedRoute.params.subscribe((params) => {
      if(params['carId']){
        this.getCarDetailsById(params['carId']);
      }else{
        this.getCarDetails();
      }

    });
  }

  getCarDetails() {
    this.carDetailService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsById(id: number) {
    this.carDetailService.getCarDetailsById(id).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }



}
