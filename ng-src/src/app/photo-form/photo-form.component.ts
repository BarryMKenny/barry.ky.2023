import { Component } from '@angular/core';
import {Photo} from "../photo";
import {ActivatedRoute, Router} from "@angular/router";
import {PhotoService} from "../photo-service.service";

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent {
  photo: Photo;

  constructor(private route: ActivatedRoute,private router: Router,private photoService: PhotoService) {
    this.photo = new Photo();
  }

  onSubmit() {
    this.photoService.save(this.photo).subscribe(result => this.gotoPhotoList());
  }

  gotoPhotoList() {
    this.router.navigate(['/photos']);
  }
}
