import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('child', {static: false}) childRef: ChildComponent | undefined;

  /**
   * Holds the value 1
   */
  value1!: number

  /**
   * Holds the value 2
   */
  value2!: number

  /**
   * Flag to enable the child component
   */
  enableChildComponent = false;

  title = 'component-communication';

  viewChildString?: string;

  ngAfterViewInit() {
    this.getChildAccess();
  }

  getChildAccess() {
    let a = this.childRef as ChildComponent;
    this.viewChildString = a.getOutputString();
  }

  /**
   * Holds the subtracted value of value1 & value2 from child component.
   */
  subtractionValue!: number;

  getSum(): void {
    this.enableChildComponent = !this.enableChildComponent;
  }

  valueFromOutput(value: number): void {
    this.subtractionValue = value;
  }
}
