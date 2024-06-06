import { Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ResumeComponent} from "./resume/resume.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ProjectsComponent} from "./projects/projects.component";

export const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'project', component: ProjectsComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];
