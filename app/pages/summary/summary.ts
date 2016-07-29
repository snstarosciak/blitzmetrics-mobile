import {Component} from '@angular/core';
import {Platform, Page} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {Bobboline} from '../../directives/bobboline/bobboline';

@Page({
  templateUrl: 'build/pages/summary/summary.html',
  directives: [Bobboline]
})
export class SummaryPage {

  // Initialize some strings
  network: string = 'facebook';

  constructor(
    private nav: NavController,
    private platform: Platform
  ) {
  }
}
