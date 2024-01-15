import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private element:ElementRef) { }

  private highlight(color:string){
    this.element.nativeElement.style.backgroundColor=color;
  }
  @HostListener ('mouseenter') onMouseEnter(){
    this.highlight('violet')
  }
  @HostListener ('mouseleave') onMouseLeave(){
    this.highlight('')
  }
  @HostListener ('click') onMouseClick(){
    this.highlight('lightblue')
  }
}
