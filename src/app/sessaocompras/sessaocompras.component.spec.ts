import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaocomprasComponent } from './sessaocompras.component';

describe('SessaocomprasComponent', () => {
  let component: SessaocomprasComponent;
  let fixture: ComponentFixture<SessaocomprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessaocomprasComponent]
    });
    fixture = TestBed.createComponent(SessaocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
