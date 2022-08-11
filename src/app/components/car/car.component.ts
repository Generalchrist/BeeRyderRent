import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';
import { Brand } from 'src/app/models/Brand';
import { Car } from 'src/app/models/Car';
import { CarDetail } from 'src/app/models/CarDetail';
import { Color } from 'src/app/models/Color';
import { FilterOptions } from 'src/app/models/FilterOptions';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dataLoaded = false;
  cars: CarDetail[] = [];
  brands: Brand[] = [];
  colors : Color[] = [];
  modelYears: number[] ;
  models : string[];

  filterText = "";

  filterForm : FormGroup;
  

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private formBuilder: UntypedFormBuilder,
    private brandService: BrandService,
    private colorService:ColorService,
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.getBrands();
    this.getColors();
    this.getCarsModelYears();
    this.createFilterOptions();
    
  }

  createFilterOptions() {
    this.filterForm = this.formBuilder.group({
      brands: [null],
      colors: [null],
      minPrice: [null],
      maxPrice: [null],
      minModelYear: [null],
    });
  };

  getCarsByFilters(){

    let filter = new FilterOptions;
    
    filter.brands = this.filterForm.value.brands?.map(b =>b.id);
    filter.colors = this.filterForm.value.colors?.map(c =>c.id);
    filter.maxPrice = this.filterForm.value.maxPrice;
    filter.minPrice = this.filterForm.value.minPrice;
    filter.minModelYear = this.filterForm.value.minModelYear;

    this.carService.getCarsByFilters(filter).subscribe((response)=>{
      this.cars = response.data;
    });

  }


  getCars(): void {
    this.carService.getCarDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;

    });
  }

  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors = response.data;
  })
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands = response.data;
  })
  }
  getCarsModelYears(){
    this.carService.getCarsModelYears().subscribe((response)=>{
      this.modelYears = response.data;
    });
  }
  reset(){
    this.filterForm.reset();
    this.getCars();
  }



}
