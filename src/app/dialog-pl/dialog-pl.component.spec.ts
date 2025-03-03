import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlComponent } from './dialog-pl.component';

describe('DialogPlComponent', () => {
  let component: DialogPlComponent;
  let fixture: ComponentFixture<DialogPlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogPlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
