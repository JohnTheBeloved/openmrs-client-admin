import { Component, OnInit, Input } from '@angular/core';
import { DisplayMode } from '../display.enum';
import { Attribute } from 'src/app/attribute';

@Component({
  selector: 'list-select',
  templateUrl: './list-select.component.html',
  styleUrls: ['./list-select.component.css']
})
export class ListSelectComponent implements OnInit {

  @Input() displayMode: DisplayMode;
  @Input() attribute: Attribute;
  private editMode: boolean;
  constructor() { }

  ngOnInit() {
    this.editMode = this.displayMode === DisplayMode.EDIT;
  }

}
