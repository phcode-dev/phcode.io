import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetPhoenixComponent } from './meet-phoenix.component';

describe('MeetPhoenixComponent', () => {
  let component: MeetPhoenixComponent;
  let fixture: ComponentFixture<MeetPhoenixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetPhoenixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetPhoenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
