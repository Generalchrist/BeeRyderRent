import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/CarImage';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css'],
})
export class CarimageComponent implements OnInit {
  carImages: CarImage[] = [];
  defaultPath = "https://localhost:64300/"

  constructor(
    private carImageService: CarimageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages=response.data;
    });
  }
  getDefaultPath(){
    return this.defaultPath;
  }

  getCurrentImageClass(image:CarImage){
    if (this.carImages[0]==image) {
      return "carousel-item active"
    }
    else{
      return "carousel-item"
    }
  }

  getImagePath(image:CarImage){
    return this.defaultPath + image.ImagePath
  }
  getButtonClass(image: CarImage) {
    if ((image = this.carImages[0])) {
      return 'active';
    } else {
      return '';
    }
  }
}
