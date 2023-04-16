import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2,
  ViewChild
} from '@angular/core';
import {PhotoService} from "../photo-service.service";
import {Photo} from "../photo";
import {MaximizeModule} from "../modules/maximize.module";
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, AfterViewInit {

  @ViewChild("loader") loader: ElementRef;
  constructor(private photoService: PhotoService) {
  }
  photos: Photo[];

  ngOnInit() {
    this.photoService.findAll().subscribe(data => {
      this.photos = data;
    });
  }

  ngAfterViewInit(): void {
    this.loader.nativeElement.addAttribute('hidden',true);
  }
}
