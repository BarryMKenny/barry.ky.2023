import { Injectable } from '@angular/core';
import { Photo } from "./photo";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photosUrl: string;

  constructor(private http: HttpClient) {
    this.photosUrl = 'http://localhost:8080/photos';
  }

  public findAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl);
  }

  public save(photo: Photo) {
    console.log("Photo: " + photo.filename)
    return this.http.post<Photo>(this.photosUrl, photo);
  }
}
