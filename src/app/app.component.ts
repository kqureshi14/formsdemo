import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormControl,FormGroup, FormsModule, Validators} from '@angular/forms';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formsdemo';


  loginForm = new FormGroup({
   user: new FormControl('',[Validators.required,Validators.email]),
   password: new FormControl('',[Validators.required,Validators.minLength(7)])

  });

  get user(){
    return this.loginForm.get('user');
  }


  get password(){
    return this.loginForm.get('password');
  }


  loginUser(){
    console.info(this.loginForm.value);
  }


   
  userLogin(item:any){
    console.info(item);
  }

}
