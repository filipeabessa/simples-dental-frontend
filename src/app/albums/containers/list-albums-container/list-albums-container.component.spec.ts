import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlbumsContainerComponent } from './list-albums-container.component';

describe('ListAlbumsContainerComponent', () => {
  let component: ListAlbumsContainerComponent;
  let fixture: ComponentFixture<ListAlbumsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAlbumsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAlbumsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
