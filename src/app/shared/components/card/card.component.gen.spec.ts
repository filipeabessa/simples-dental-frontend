import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardComponent } from "./card.component";
import { ButtonComponent } from "../button/button.component";

import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'zone.js/testing';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent, ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it("should render app-button when buttons prop is passed", () => {
    const buttons = [
      { label: "Button 1", action: () => { } },
      { label: "Button 2", action: () => { } },
    ];
    component.actionButtons = buttons;
    fixture.detectChanges();

    const appButtonElements = fixture.nativeElement.querySelectorAll("app-button");
    expect(appButtonElements.length).toBe(buttons.length);
  });
});

