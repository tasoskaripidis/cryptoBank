import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lay-out',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './lay-out.component.html',
  styleUrl: './lay-out.component.css',
})
export class LayOutComponent {}
