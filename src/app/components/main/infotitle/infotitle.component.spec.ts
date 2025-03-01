import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotitleComponent } from './infotitle.component';

describe('InfotitleComponent', () => {
  let component: InfotitleComponent;
  let fixture: ComponentFixture<InfotitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfotitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfotitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
