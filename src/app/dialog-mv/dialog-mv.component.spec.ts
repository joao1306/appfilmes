import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMvComponent } from './dialog-mv.component';

describe('DialogMvComponent', () => {
  let component: DialogMvComponent;
  let fixture: ComponentFixture<DialogMvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogMvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
