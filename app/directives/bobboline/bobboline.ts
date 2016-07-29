import {Component, Input, ViewChild} from '@angular/core';
import {Platform, Page, NavController} from 'ionic-angular';

declare var Bobbograph: any;

@Component({
  selector: 'bobboline',
  templateUrl: 'build/directives/bobboline/bobboline.html'
})
export class Bobboline {
  @ViewChild('bobboline') bobboparent;
  @Input() data: any;

  // Initialize some strings
  Bobboline: any;

  constructor() {}

  ngAfterViewInit() {

    //new Bobbograph( this.bobboparent.nativeElement, "1, 5, 1, 2, 1, 3, 2", {
    //new Bobbograph( '#bobboline', [1,3,5,2,1], {});
  }
}
