import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathNoticeComponent } from './death-notice.component';

describe('DeathNoticeComponent', () => {
  let component: DeathNoticeComponent;
  let fixture: ComponentFixture<DeathNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
