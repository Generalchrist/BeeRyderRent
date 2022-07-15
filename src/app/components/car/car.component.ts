import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/Car';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dataLoaded = false;
  filterText = "";
  cars: Car[] = [];

  filterForm : FormGroup;
  

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      }

      else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      }
      else {
        this.getCars();
      }
    });
  }

  createFilterOptions() {
    this.filterForm = this.formBuilder.group({
      brandId: [null],
      colorId: [null],
      minPrice: [null],
      maxPrice: [null],
      minModelYear: [null]
    });
  };

  getCarsByFilters(){
    this.carService.getCarsByFilters(this.filterForm.value).subscribe((response) => {
      if(response.success){
        this.cars = response.data;
        this.dataLoaded = true;
      }
      
    })
  }
  getCars(): void {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(car:Car){
    if(car.id===1){
      this.toastrService.error("satmiyorum kardesim bu arabayi alamazsin" )
    }else{
      this.cartService.addToCart(car);
      this.toastrService.success(car.description + " Added to Rental Cart")
    }
  }
}
