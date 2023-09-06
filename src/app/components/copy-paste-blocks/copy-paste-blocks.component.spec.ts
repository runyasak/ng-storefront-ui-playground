import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyPasteBlocksComponent } from './copy-paste-blocks.component';

describe('CopyPasteBlocksComponent', () => {
  let component: CopyPasteBlocksComponent;
  let fixture: ComponentFixture<CopyPasteBlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CopyPasteBlocksComponent],
    });
    fixture = TestBed.createComponent(CopyPasteBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
