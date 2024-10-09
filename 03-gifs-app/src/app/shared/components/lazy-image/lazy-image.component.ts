import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';


  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if( !this.url ) throw new Error('Url Property is required');
  }

  onLoad() {
    console.log('Image loaded');
    this.hasLoaded = true;
  }
}
