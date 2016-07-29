import {Injectable} from '@angular/core';
import {Storage, LocalStorage, Events} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Globals} from '../globals/globals';
import 'rxjs/add/operator/map';

@Injectable()
export class User {

  data: any = null;
  storage = new Storage(LocalStorage);

  constructor(
    private events: Events,
    private http: Http,
    private globals: Globals
  ) {
  }

  /**
   *  Create the headers to send to the server
   */
  createAuthHeaders() {
    return this.storage.get('user').then(function(user) {

      // Get user data and build headers
      var userData = JSON.parse(user);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      headers.append("Authorization", 'Bearer ' + userData.access_token);

      return headers;
    }.bind(this));
  }

  refreshTokenExpired(user) {
    console.log('so does this run?');
        let webUrl = 'https://ugihive.azurewebsites.net';
        let params = "grant_type=refresh_token";

        // Make a post to the server to get the token back
        return this.http.post(webUrl + '/Token', params)
            .map(res => res.json())
  }

  /**
   *  Signup a user into the system
   */
  signup(user) {

    // Create the post data
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = `${this.globals.getApiUrl()}Account/Register`;

    // Make the call
    return this.http.post(url, body, options)
      .map(res => res.json());
  }

  logout() {
    this.storage.remove('access_token');
    this.events.publish('user:logout');
  }

  hasLoggedIn() {
    return this.storage.get('user').then((user) => {
      if(user) {
        let userData = JSON.parse(user);
        return true;
      } else {
        return false;
      }
    });
  }

}
