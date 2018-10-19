import { Component, OnInit, Input } from '@angular/core';
import { DisplayMode } from '../display.enum';
import { Attribute } from 'src/app/attribute';

@Component({
  selector: 'multi-list-select',
  templateUrl: './multi-list-select.component.html',
  styleUrls: ['./multi-list-select.component.css']
})
export class MultiListSelectComponent implements OnInit {

  @Input() displayMode: DisplayMode;
  @Input() attribute: Attribute;
  private editMode: boolean;
  constructor() { }

  ngOnInit() {
  }

}
