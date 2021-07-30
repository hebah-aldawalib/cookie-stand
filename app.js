'use strict';


let hours = ['6 Am', '7 Am', '8 Am', '9 Am', '10 Am', '11 Am', '12 Pm', '1 Pm', '2 Pm', '3 Pm', '4 Pm', '5 Pm', '6 Pm', '7 Pm'];





function random(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;

}




let shops = [];

 

function Shop(location, min, max, avg) {

 

  this.location = location,

  this.minimum = min;

  this.maximum = max;

  this.avg = avg;

  this.randomCust = [];

  this.avgCookies = [];

  shops.push(this);

}

 

let Seattle = new Shop('Seattle', 23, 65, 6.3);

let Tokyo = new Shop('Tokyo', 3, 24, 1.2);

let Dubai = new Shop('Dubai', 11, 38, 3.7);

let Paris = new Shop('Paris', 20, 38, 2.3);

let Lima = new Shop('Lima', 2, 16, 4.6);






Shop.prototype.getRandomCust = function () {

 

  for (let i = 0; i < hours.length; i++) {

 

    this.randomCust.push(random(this.minimum, this.maximum));

  }

};

 

Shop.prototype.avgcookie = function () {

 

  for (let i = 0; i < hours.length; i++) {

 

    this.avgCookies.push(Math.floor(this.randomCust[i]*this.avg));

  }

 

};

let theader;

let trow;

let td;

 

let parent = document.getElementById('sales');

let table = document.createElement('table');

parent.appendChild(table);

function header() {

  trow = document.createElement('tr');

  table.appendChild(trow);

  theader = document.createElement('th');

  trow.appendChild(theader);

  theader.textContent = "";

 

  for (let i = 0; i < 14; i++) {

    theader = document.createElement('th');

    trow.appendChild(theader);

    theader.textContent = hours[i];

 

  }

  theader = document.createElement('th');

  trow.appendChild(theader);

  theader.textContent = 'Daily Location Total';

}

header();

 

Shop.prototype.render = function () {

  trow = document.createElement('tr');

  table.appendChild(trow);

  td = document.createElement('td');

  trow.appendChild(td);

 

  td.textContent = this.location;

  let sum = 0;

  for (let i = 0; i < 14; i++) {

 

    console.log(this.avgCookies[i]);

    td = document.createElement('td');

    trow.appendChild(td);

    td.textContent = this.avgCookies[i];

    sum = sum + this.avgCookies[i];

 

  }

  let totalsum = document.createElement('th');

  trow.appendChild(totalsum);

  totalsum.textContent = sum;

 

};

function footer() {

  

  trow = document.createElement('tr');

  table.appendChild(trow);

  theader = document.createElement('th');

  trow.appendChild(theader);

 

  theader.textContent = 'Totals';

 

  for (let j = 0; j < hours.length; j++) {

 

   

    for (let x = 0; x < shops.length; x++) {

 

    }



  }

  

}

 

for (let i = 0; i < shops.length; i++) {

 

  shops[i].getRandomCust();

  shops[i].avgcookie();

  shops[i].render();

}

footer();