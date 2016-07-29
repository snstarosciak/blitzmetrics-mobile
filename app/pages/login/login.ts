import {Page, Platform, NavController, Storage, LocalStorage, Events, Alert, Loading} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { Facebook } from 'ionic-native';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  loading: any;
  storage = new Storage(LocalStorage);
  user = '';
  constructor(
    private nav: NavController,
    private platform: Platform,
    private events: Events
  ) {
  }

  login() {
    this.presentLoading();
    if(this.platform.is('cordova')) {
      Facebook.login(["email"]).then((result) => {
        this.storage.set('user', JSON.stringify(result));
        this.events.publish('user:login');
        this.nav.push(TabsPage);
        this.loading.dismiss();
      })
   }
  }

  /**
   *  Loading animation
   */
  presentLoading() {
    this.loading = Loading.create({
      content: "",
    });
    this.nav.present(this.loading);
  }
}
