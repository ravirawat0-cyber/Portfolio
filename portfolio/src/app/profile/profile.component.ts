import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroUsers} from "@ng-icons/heroicons/outline";


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatIcon,
    NgIconComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',

})
export class ProfileComponent {

}
