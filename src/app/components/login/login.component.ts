import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { clippingParents } from '@popperjs/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform:FormGroup;

  constructor(
      private fb:FormBuilder, 
      private authService: AuthService, 
      private router: Router) {}
      
  ngOnInit(): void {
    this.createLoginForm();
    
  }
  createLoginForm() {
      this.loginform = this.fb.group({
        email: ['',Validators.required],
        password: ['',Validators.required]
    });
  }

  login() {
    this.authService.login(this.loginform.value)    
}


}
