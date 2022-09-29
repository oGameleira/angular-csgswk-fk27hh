import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from '@angular/common';

@Directive({ selector: '[decimal2]' })
export class Decimal2 implements OnInit {
  private el: HTMLInputElement;
  private value: any;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    setTimeout(() => this.transform(this.el.value), 500);
  }
  transform(value: any) {
    this.value = value;
    if (value && !isNaN(value)) {
      this.el.value = formatNumber(+this.value, 'en-US', '1.2-2');
      const formated = this.el.value.split(',').join('');
      if (formated.indexOf(this.value) >= 0) this.value = formated;
    }
  }
}
