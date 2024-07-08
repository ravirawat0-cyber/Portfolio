import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgIcon, NgIconComponent, provideIcons} from "@ng-icons/core";
import {ionLogoAngular} from "@ng-icons/ionicons";
import {tablerBrandAzure, tablerBrandCucumber, tablerBrandMysql, tablerBrandTypescript} from "@ng-icons/tabler-icons";
import {
  simpleAmazonaws,
  simpleCss3, simpleFirebase,
  simpleHtml5,
  simpleMaterialdesign,
  simplePostman, simplePython,
  simpleSwagger,
  simpleTailwindcss
} from "@ng-icons/simple-icons";
import {MatButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatIcon,
    NgIcon,
    NgIconComponent,
    MatButton,
    MatTooltip
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [provideIcons({
    ionLogoAngular,
    tablerBrandTypescript,
    tablerBrandAzure,
    tablerBrandMysql,
    tablerBrandCucumber,
    simpleSwagger,
    simplePostman,
    simpleHtml5,
    simpleCss3,
    simpleTailwindcss,
    simpleMaterialdesign,
    simplePython,
    simpleFirebase,
    simpleAmazonaws
  })]
})
export class AboutComponent {

}
