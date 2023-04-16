import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeathNotice} from "./death-notice";

@Injectable({
  providedIn: 'root'
})
export class DeathNoticeService {

  private readonly deathNoticeUrl: string;
  constructor(private http: HttpClient) {
    this.deathNoticeUrl = 'https://barry.ky/death-notices';
    //this.deathNoticeUrl = 'http://localhost:8080/death-notices';
  }

  public findDeathNotices(county: string, searchText: string, dateFrom: string, dateTo: string): Observable<DeathNotice[]> {
    return this.http.get<DeathNotice[]>(this.deathNoticeUrl + "?county=" + county + "&searchText=" + searchText + "&dateFrom=" + dateFrom + "&dateTo=" + dateTo);
  }
}
