import {Component} from '@angular/core'
import {SummaryPage} from '../summary/summary';
import {AboutPage} from '../about/about';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = SummaryPage;
    this.tab2Root = AboutPage;
  }
}
