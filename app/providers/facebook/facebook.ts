import {Platform} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class FbProvider {
    constructor( private platform: Platform ) {
        this.platform = platform;
    }

    login() {
        let p = new Promise((resolve, reject) => {
        if(this.platform.is('cordova')) {
            facebookConnectPlugin.login([ 'email' ], (success) => {
                    console.log(JSON.stringify(success));
                    resolve(success);
                },(err) => {
                    console.log(JSON.stringify(err));
                    reject(err);
                });

            } else {
                console.log("Please run me on a device");
                reject('Please run me on a device');
            }
        });
        return p;
    }

    getCurrentUserProfile() {
        let p = new Promise((resolve, reject) => {
            facebookConnectPlugin.api('me?fields=email,name', null,
            (profileData) => {
                console.log(JSON.stringify(profileData));
                resolve(profileData);
            },(err) => {
                console.log(JSON.stringify(err));
                reject(err);
            });
        });
        return p;
    }
}

