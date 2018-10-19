import { Component, OnInit, Input } from '@angular/core';
import { DisplayMode } from '../display.enum';
import { Attribute } from '../../attribute';

@Component({
  selector: 'radio-select',
  templateUrl: './radio-select.component.html',
  styleUrls: ['./radio-select.component.css']
})
export class RadioSelectComponent implements OnInit {

  constructor() { }

  @Input() displayMode: DisplayMode;
  @Input() attribute: Attribute;
  private editMode: boolean;
  ngOnInit() {
  }

}
