
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Http} from "@angular/http";

import {Card} from "./card";

@Injectable()
export class CardService {


    constructor(private http: Http) {
    }

    getCards(): Observable<any> {
      return this.getCardIcons();
    }

    getCardIcons(): Observable<any> {
      return this.http.get(prefixRepo('../../assets/data/cards.json'))
        .map((res)=> {
          let icons = res.json();
          return icons.map(icon => new Card(guid(), this.iconTemplate(icon)));
        });
    }

    iconTemplate(icon) {
      return '<i class="' + icon + ' icon" aria-hidden="true"></i>';
    }

}

/** Generate unique ID */
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

var prefixRepo = (path) => {
  return 'memory' + path;
};
