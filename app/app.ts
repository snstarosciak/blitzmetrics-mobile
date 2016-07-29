import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {User} from './providers/user/user';
import {Globals} from './providers/globals/globals';
import {LoginPage} from './pages/login/login';
import {TabsPage} from './pages/tabs/tabs';
import {IntroLoadingPage} from './pages/intro-loading/intro-loading';

@Component({
  templateUrl: 'build/app.html',
})

export class BlitzMetricsMobile {

  private rootPage: any = IntroLoadingPage;
  loggedIn = false;

  constructor(
    private platform:Platform,
    private user: User
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  // Run after the app has initiated
  ngAfterViewInit(){
    setTimeout(() => {
      this.user.hasLoggedIn().then(function(value) {

        // If the user is logged in, redirect them to the feed
        if(value) {
          this.rootPage = TabsPage;
        } else {
          // Set this back to the login page when you're done
          //this.rootPage = LoginPage;
          this.rootPage = TabsPage;
        }
      }.bind(this));
    }, 50);
  }
}

ionicBootstrap(BlitzMetricsMobile, [User, Globals], {
  tabbarPlacement: 'bottom',
  mode: 'ios'
});
