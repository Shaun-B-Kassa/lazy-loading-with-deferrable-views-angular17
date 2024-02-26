import { Component } from '@angular/core';
import { NavComponent } from '../../core/nav/nav.component';
import { ContactComponent } from '../../core/contact/contact.component';
import { DetailsComponent } from '../../user/details/details.component';
import { ProjectsComponent } from '../../user/projects/projects.component';
import { ProjectsSkeletonComponent } from '../../user/projects-skeleton/projects-skeleton.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NavComponent, ContactComponent, DetailsComponent, ProjectsComponent, ProjectsSkeletonComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

}
