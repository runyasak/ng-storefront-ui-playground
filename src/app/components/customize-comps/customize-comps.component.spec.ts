import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeCompsComponent } from './customize-comps.component';

describe('CustomizeCompsComponent', () => {
  let component: CustomizeCompsComponent;
  let fixture: ComponentFixture<CustomizeCompsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomizeCompsComponent],
    });
    fixture = TestBed.createComponent(CustomizeCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
