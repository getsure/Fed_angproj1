import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Create the new <div> element and the text inside it
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('new div inserted before the element!');
    this.renderer.appendChild(div, text);

    // Add the CSS class to the <div>
    this.renderer.addClass(div, 'myclass');

    // Insert the new <div> before the host element
    const parent = this.renderer.parentNode(this.el.nativeElement);
    this.renderer.insertBefore(parent, div, this.el.nativeElement);

    // Remove the existing host element
    //this.renderer.removeChild(parent, this.el.nativeElement);
  }
}

   