import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef<HTMLElement>) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.transform='scale(1.03)';
    this.element.nativeElement.style.border='2px solid #3b82f6';
    this.element.nativeElement.style.transition='all 0.2s ease';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.transform='scale(0.9)';
    this.element.nativeElement.style.border='1px solid #ddd';
    }
}
