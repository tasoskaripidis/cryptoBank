import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../app/serviceProject/service.service';
import { User } from '../../app/serviceProject/service.service';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  profileUser: User = {
    userId: '',
    userPass: '',
  };

  loginArray: User[] = [];

  constructor(private router: Router, private service: ServiceService) {}

  signBtn() {
    this.service.setUser(this.profileUser);
  }
}
