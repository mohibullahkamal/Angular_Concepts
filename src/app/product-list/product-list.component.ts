import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(a) {
    // return a.name + '--> share button clicked..';
    window.alert(a.name + '--> share button clicked...');
  }

  onNotify(x) {
    // return x.name + "--> will be notified..";
    console.log(x.name + " --> will be notified...");
  }

  clickedProduct(x) { 
    return x.clicked = true;
  }

  resetNotify(x) {
    return x.clicked = false;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/