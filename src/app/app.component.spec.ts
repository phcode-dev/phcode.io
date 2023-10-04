import { MockRouter } from './testing/mocks/router.mock';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('AppComponent', () => {
  // tslint:disable-next-line: no-object-literal-type-assertion
  const fakeActivatedRoute = {
    // tslint:disable-next-line: no-object-literal-type-assertion
    snapshot: { data: { title: 'home' } as Data },
    firstChild: {
      // tslint:disable-next-line: no-object-literal-type-assertion
      snapshot: { data: { title: 'home' } as Data },
    },
  } as ActivatedRoute;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
      ],
      declarations: [AppComponent],
      providers: [
        { provide: Router, useClass: MockRouter },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should TEST #ngOninit', () => {
    const act = {
      snapshot: { data: { title: 'users' } as Data },
    } as ActivatedRoute;
    component.activatedRoute = act;
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
