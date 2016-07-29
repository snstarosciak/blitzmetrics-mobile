import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Globals {
  apiUrl: any = 'https://ugihive.azurewebsites.net/api/';
  baseProfileImgUrl: string = 'http://ugigaming.com/new/assets/images/profilepic/';
  baseTopicImgUrl: string = 'http://ugigaming.com/new/assets/images/topicpic/';

  constructor(public http: Http) {}

  getApiUrl() {
    return this.apiUrl;
  }

  getBaseProfileImgUrl() {
    return this.baseProfileImgUrl;
  }

  getBaseTopicImgUrl() {
    return this.baseTopicImgUrl;
  }

}

