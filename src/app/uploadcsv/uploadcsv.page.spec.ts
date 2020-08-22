import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadcsvPage } from './uploadcsv.page';

describe('UploadcsvPage', () => {
  let component: UploadcsvPage;
  let fixture: ComponentFixture<UploadcsvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadcsvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadcsvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
