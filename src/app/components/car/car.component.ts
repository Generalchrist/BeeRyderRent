import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;

  constructor(private carService: CarService) {}

  ngOnInit(): void {}

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded=true;
    });
  }
}
