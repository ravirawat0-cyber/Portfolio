import { Component } from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {ionBagRemoveSharp, ionBook} from "@ng-icons/ionicons";
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    NgIcon,
    MatProgressBar
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  providers: [provideIcons({ionBook, ionBagRemoveSharp})]
})
export class ResumeComponent {

}
