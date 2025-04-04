import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../app/serviceProject/service.service';
import { User } from '../../app/serviceProject/service.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  profileUser: User = {
    userId: '',
    userPass: '',
  };
  constructor(private route: Router, private service: ServiceService) {}
  logBtn() {
    this.service.getUser(this.profileUser);
  }
}
