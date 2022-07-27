import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieverSectionComponent } from './reciever-section.component';

describe('RecieverSectionComponent', () => {
  let component: RecieverSectionComponent;
  let fixture: ComponentFixture<RecieverSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieverSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieverSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
