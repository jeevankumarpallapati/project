import { style } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustamStyle]'
})
export class CustamStyleDirective {

  constructor(private _element: ElementRef) {
    // this._element.nativeElement.font.style="bold";
    // this._element.nativeElement.font.color="black";
  }
  private custamstyle(color: string) {
    // this._element.nativeElement.font.style = "bold";
    this._element.nativeElement.style.backgroundColor = 'red';
  }
}
