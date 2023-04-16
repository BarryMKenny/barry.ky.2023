import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DeathNotice } from "../death-notice";
import { DeathNoticeService } from "../death-notice.service";
import { CountyEnum, getCounty, getCountyName } from "../county/county";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DateFormatter } from "../date/date-formatter";
@Component({
  selector: 'app-death-notice',
  templateUrl: './death-notice.component.html',
  styleUrls: ['./death-notice.component.scss']
})
export class DeathNoticeComponent {

  deathNoticeList: DeathNotice[];
  dataSource: MatTableDataSource<DeathNotice> = new MatTableDataSource();
  deathNoticeSearch: DeathNotice;
  isLoading: boolean = false;
  counties: any = [ getCounty(CountyEnum.Antrim),getCounty(CountyEnum.Armagh),getCounty(CountyEnum.Carlow),
    getCounty(CountyEnum.Cavan),getCounty(CountyEnum.Clare),getCounty(CountyEnum.Cork),getCounty(CountyEnum.Derry),
    getCounty(CountyEnum.Donegal),getCounty(CountyEnum.Down),getCounty(CountyEnum.Dublin),getCounty(CountyEnum.Fermanagh),
    getCounty(CountyEnum.Galway),getCounty(CountyEnum.Kerry),getCounty(CountyEnum.Kildare),getCounty(CountyEnum.Kilkenny),
    getCounty(CountyEnum.Laois),getCounty(CountyEnum.Leitrim),getCounty(CountyEnum.Limerick),getCounty(CountyEnum.Longford),
    getCounty(CountyEnum.Louth),getCounty(CountyEnum.Mayo),getCounty(CountyEnum.Meath),getCounty(CountyEnum.Monaghan),
    getCounty(CountyEnum.Offaly),getCounty(CountyEnum.Roscommon),getCounty(CountyEnum.Sligo),getCounty(CountyEnum.Tipperary),
    getCounty(CountyEnum.Tyrone),getCounty(CountyEnum.Waterford),getCounty(CountyEnum.Westmeath),getCounty(CountyEnum.Wexford),
    getCounty(CountyEnum.Wicklow)];
  displayedColumns: string[] = ['person-name', 'link'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private route: ActivatedRoute,private router: Router,private deathNoticeService: DeathNoticeService) {
    this.deathNoticeSearch = new DeathNotice();
  }

  onSubmit() {
    this.isLoading = true;
    this.deathNoticeList = [];

    let formattedFromDate = DateFormatter.formatYYYYMMDD(this.deathNoticeSearch.dateFrom);
    let formattedToDate = DateFormatter.formatYYYYMMDD(this.deathNoticeSearch.dateTo);
    this.deathNoticeService.findDeathNotices(this.deathNoticeSearch.county, this.deathNoticeSearch.searchText, formattedFromDate, formattedToDate).subscribe(result => {
      this.deathNoticeList = result;
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<DeathNotice>(result);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  isTableVisible(){
    return this.deathNoticeList != null && this.deathNoticeList.length > 0;
  }

  getCountyName(county: any) {
    return getCountyName(county);
  }

}
