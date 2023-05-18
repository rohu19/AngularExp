import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpsComponent } from './list-sps.component';

describe('ListSpsComponent', () => {
  let component: ListSpsComponent;
  let fixture: ComponentFixture<ListSpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
