import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ReactiveFormsModule,FormControl,FormGroup, FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formsdemo';


  loginForm = new FormGroup({
   user: new FormControl(''),
   password: new FormControl('')

  });

  loginUser(){
    console.info(this.loginForm.value);
  }
   

  userLogin(item:any){
    console.info(item);

  }

}
