import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAdminHomeComponent } from './no-admin-home.component';

describe('NoAdminHomeComponent', () => {
  let component: NoAdminHomeComponent;
  let fixture: ComponentFixture<NoAdminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAdminHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
