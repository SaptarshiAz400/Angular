import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatergoryComponent } from './edit-catergory.component';

describe('EditCatergoryComponent', () => {
  let component: EditCatergoryComponent;
  let fixture: ComponentFixture<EditCatergoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCatergoryComponent]
    });
    fixture = TestBed.createComponent(EditCatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
