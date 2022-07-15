import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/CarImage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css'],
})
export class CarimageComponent implements OnInit {
  carImages: CarImage[] = [];
  defaultPath = "https://localhost:44371"

  constructor(
    private carImageService: CarimageService,
    private activatedRoute: ActivatedRoute,
    private carService:CarService
  ) {}

  ngOnInit(): void {

      this.getCarImagesByCarId(1)
      

  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages=response.data;
    });
  }

  getImagePath(image:CarImage){
    console.log(this.defaultPath + image.imagePath)
    return this.defaultPath + image.imagePath;

  }

  getCurrentImageClass(image:CarImage){
    if (this.carImages[0]==image) {
      return "carousel-item active"
    }
    else{
      return "carousel-item"
    }
  }

  getButtonClass(image: CarImage) {
    if ((image = this.carImages[0])) {
      return 'active';
    } else {
      return '';
    }
  }


  getActiveCssClass(carImage:CarImage)
  {
    if(carImage==this.carImages[0]) return "active"

    return ""
  }

}
