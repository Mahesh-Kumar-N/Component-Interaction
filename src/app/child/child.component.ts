import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() valueA?: number;

  @Input() valueB?: number;

  @Output() subtraction: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    if (this.valueA && this.valueB) {
      this.emitMethod(this.valueA - this.valueB);
    }
  }

  emitMethod(arg0: number) {
    this.subtraction.emit(arg0);
  }

  getOutputString(): string {
    return "this is a string from a child component accessed with help of view child";
  }

}
