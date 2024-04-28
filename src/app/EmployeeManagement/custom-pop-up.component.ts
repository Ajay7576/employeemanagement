import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pop-up',
  templateUrl: './custom-pop-up.component.html',
  styleUrls: ['./custom-pop-up.component.scss'],
})
export class CustomPopUpComponent implements OnInit {
  @Input() isVisible?: boolean;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    // Initialize component properties here if needed
  }
}
