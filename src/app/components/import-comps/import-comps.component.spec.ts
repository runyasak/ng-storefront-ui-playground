import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCompsComponent } from './import-comps.component';

describe('ImportCompsComponent', () => {
  let component: ImportCompsComponent;
  let fixture: ComponentFixture<ImportCompsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImportCompsComponent],
    });
    fixture = TestBed.createComponent(ImportCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
