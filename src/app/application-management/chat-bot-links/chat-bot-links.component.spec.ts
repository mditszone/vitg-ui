import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotLinksComponent } from './chat-bot-links.component';

describe('ChatBotLinksComponent', () => {
  let component: ChatBotLinksComponent;
  let fixture: ComponentFixture<ChatBotLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBotLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBotLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
