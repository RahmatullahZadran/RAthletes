import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreDataComponent } from './firestore-data.component';

describe('FirestoreDataComponent', () => {
  let component: FirestoreDataComponent;
  let fixture: ComponentFixture<FirestoreDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirestoreDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirestoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
