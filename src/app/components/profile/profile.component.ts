import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/RentalDetail';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  rentals : RentalDetail[];

  user = this.authService.claims;


  constructor(
    private rentalService: RentalService,
    private authService: AuthService,
    private carservice :CarService,

    ) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.rentalService.GetRentalDetailDtoByUserId(this.authService.claims.userId).subscribe(rentals => {
      this.rentals = rentals.data;
    }
    )
  }

  




}
