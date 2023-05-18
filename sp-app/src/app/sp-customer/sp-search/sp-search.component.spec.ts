import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpSearchComponent } from './sp-search.component';

describe('SpSearchComponent', () => {
  let component: SpSearchComponent;
  let fixture: ComponentFixture<SpSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
