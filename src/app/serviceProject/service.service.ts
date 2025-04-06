import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  userId: string;
  userPass: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private users: User[] = [];
  profileUser: User = {
    userId: '',
    userPass: '',
  };

  constructor(private router: Router) {}

  setUser(profile: User) {
    //  epmty input
    if (profile.userId === '' && profile.userPass === '') {
      alert('sign in');
      return;
    } else {
      // add user
      const theUsers = JSON.parse(localStorage.getItem('users') || '[]');
      this.users.push(profile);
      console.log(this.users);
      localStorage.setItem('users', JSON.stringify(theUsers));
      console.log(theUsers);

      // navigate to login
      this.router.navigate(['/']);
      // clear inputs
      this.profileUser.userId = '';
      this.profileUser.userPass = '';
    }
  }

  getUser(profilelog: User) {
    console.log(profilelog);
    if (profilelog.userId === '' || profilelog.userPass === '') {
      alert('add username password');
      return;
    }
    const theUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (this.users) {
      const prof = this.users.find(
        (el) =>
          el.userId === profilelog.userId && el.userPass === profilelog.userPass
      );

      if (prof) {
        this.router.navigate(['/lay-out']);
      } else {
        alert('not matching');
        this.profileUser.userId === '';
        this.profileUser.userPass === '';
      }
    }
  }
}
