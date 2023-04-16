import {Directive, ElementRef, Renderer2} from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Directive({
  selector: "[maximize]",
  exportAs: "maximize" // <-- Make not of this here
})
export class MaximizeDirective {
  private isMaximizedSubject = new BehaviorSubject(false);


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggle() {
    this.isMaximizedSubject?.getValue() ? this.minimize() : this.maximize();
  }

  maximize() {
    if (this.el) {
      this.isMaximizedSubject.next(true);
      this.renderer.appendChild(this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.el.nativeElement)))).childNodes[0], this.renderer.parentNode(this.el.nativeElement));
      this.renderer.addClass(this.el.nativeElement, "fullscreen");
      this.renderer.addClass(this.el.nativeElement, "overlay");
      this.renderer.removeClass(this.el.nativeElement, "gallery-image");
      this.renderer.removeClass(this.renderer.parentNode(this.el.nativeElement), "gallery-item");
      this.renderer.removeClass(this.renderer.parentNode(this.renderer.parentNode(this.el.nativeElement)), "gallery");
    }
  }

  minimize() {
    if (this.el) {
      this.renderer.appendChild(this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.el.nativeElement))).childNodes[1].childNodes[0], this.renderer.parentNode(this.el.nativeElement));
      this.renderer.removeClass(this.el.nativeElement, "fullscreen");
      this.renderer.removeClass(this.el.nativeElement, "overlay");
      this.renderer.addClass(this.el.nativeElement, "gallery-image");
      this.renderer.addClass(this.renderer.parentNode(this.el.nativeElement), "gallery-item");
    }
  }
}

