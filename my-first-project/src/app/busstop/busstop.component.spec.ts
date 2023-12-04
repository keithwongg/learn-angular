import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusstopComponent } from './busstop.component';

describe('BusstopComponent', () => {
  let component: BusstopComponent;
  let fixture: ComponentFixture<BusstopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusstopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusstopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
