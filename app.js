'use strict';

// i was helped from someone.


let hours = ['6 Am', '7 Am', '8 Am', '9 Am', '10 Am', '11 Am', '12 Pm', '1 Pm', '2 Pm', '3 Pm', '4 Pm', '5 Pm', '6 Pm', '7 Pm'];

 

//  from w3Schooles

function Random(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

    

}

 

let Seattle={

    name : "Seattle", 

    mincus : 23 ,

    maxcus : 65 ,

    AvgCookie : 6.3 ,

    randmNumberCus : [],

    avgCookieHour :[],

 

getRandmNumberCus: function () {

    for (let i = 0; i < hours.length; i++) {

 

        

 

        this.randmNumberCus.push(Random(this.mincus, this. maxcus));

 

    }

},

getAvgcookieHour: function () {

    for (let i = 0; i < hours.length; i++) {

        this.avgCookieHour.push(Math.floor(this.randmNumberCus[i] * this.AvgCookie));

 

    }

}

}




let parent;

let h3;

let ul;

let li;

 

Seattle.Render=function(){

 parent = document.getElementById("sales");

 h3=document.createElement("h3");

parent.appendChild(h3);

h3.textContent="Seattle";

 

 ul=document.createElement("ul");

 parent.appendChild(ul);

 for (let i = 0; i < hours.length; i++) {

    li=document.createElement("li");

ul.appendChild(li);

 

li.textContent=`${hours[i]}  ${this.avgCookieHour[i]}   Cookies`    

     

 }





}

 

Seattle.getRandmNumberCus();

Seattle.getAvgcookieHour();

Seattle.Render();






let Tokyo ={

    name : "Tokyo", 

    mincus :3 ,

    maxcus :24 ,

    AvgCookie : 1.2 ,

    randmNumberCus : [],

    avgCookieHour :[],

 

getRandmNumberCus: function () {

    for (let i = 0; i < hours.length; i++) {

 

        

 

        this.randmNumberCus.push(Random(this.mincus, this. maxcus));

 

    }

},

getAvgcookieHour: function () {

    for (let i = 0; i < hours.length; i++) {

        this.avgCookieHour.push(Math.floor(this.randmNumberCus[i] * this.AvgCookie));

 

    }

}

}






 

Tokyo.Render=function(){

 parent = document.getElementById("sales");

 h3=document.createElement("h3");

parent.appendChild(h3);

h3.textContent="Tokyo";

 

 ul=document.createElement("ul");

 parent.appendChild(ul);

 for (let i = 0; i < hours.length; i++) {

    li=document.createElement("li");

ul.appendChild(li);

 

li.textContent=`${hours[i]}  ${this.avgCookieHour[i]}   Cookies`    

     

 }





}

 

Tokyo.getRandmNumberCus();

Tokyo.getAvgcookieHour();

Tokyo.Render();



let Dubai ={

    name : "Dubai", 

    mincus :11 ,

    maxcus :38 ,

    AvgCookie : 3.7 ,

    randmNumberCus : [],

    avgCookieHour :[],

 

getRandmNumberCus: function () {

    for (let i = 0; i < hours.length; i++) {

 

        

 

        this.randmNumberCus.push(Random(this.mincus, this. maxcus));

 

    }

},

getAvgcookieHour: function () {

    for (let i = 0; i < hours.length; i++) {

        this.avgCookieHour.push(Math.floor(this.randmNumberCus[i] * this.AvgCookie));

 

    }

}

}






 

Dubai.Render=function(){

 parent = document.getElementById("sales");

 h3=document.createElement("h3");

parent.appendChild(h3);

h3.textContent="Dubia";

 

 ul=document.createElement("ul");

 parent.appendChild(ul);

 for (let i = 0; i < hours.length; i++) {

    li=document.createElement("li");

ul.appendChild(li);

 

li.textContent=`${hours[i]}  ${this.avgCookieHour[i]}   Cookies`    

     

 }





}

 

Dubai.getRandmNumberCus();

Dubai.getAvgcookieHour();

Dubai.Render();



let Paris ={

    name : "Paris", 

    mincus :3 ,

    maxcus :24 ,

    AvgCookie : 1.2 ,

    randmNumberCus : [],

    avgCookieHour :[],

 

getRandmNumberCus: function () {

    for (let i = 0; i < hours.length; i++) {

 

        

 

        this.randmNumberCus.push(Random(this.mincus, this. maxcus));

 

    }

},

getAvgcookieHour: function () {

    for (let i = 0; i < hours.length; i++) {

        this.avgCookieHour.push(Math.floor(this.randmNumberCus[i] * this.AvgCookie));

 

    }

}

}






 

Paris.Render=function(){

 parent = document.getElementById("sales");

 h3=document.createElement("h3");

parent.appendChild(h3);

h3.textContent="Paris";

 

 ul=document.createElement("ul");

 parent.appendChild(ul);

 for (let i = 0; i < hours.length; i++) {

    li=document.createElement("li");

ul.appendChild(li);

 

li.textContent=`${hours[i]}  ${this.avgCookieHour[i]}   Cookies`    

     

 }





}

 

Paris.getRandmNumberCus();

Paris.getAvgcookieHour();

Paris.Render();





let Lima ={

    name : "Lima", 

    mincus :3 ,

    maxcus :24 ,

    AvgCookie : 1.2 ,

    randmNumberCus : [],

    avgCookieHour :[],

 

getRandmNumberCus: function () {

    for (let i = 0; i < hours.length; i++) {

 

        

 

        this.randmNumberCus.push(Random(this.mincus, this. maxcus));

 

    }

},

getAvgcookieHour: function () {

    for (let i = 0; i < hours.length; i++) {

        this.avgCookieHour.push(Math.floor(this.randmNumberCus[i] * this.AvgCookie));

 

    }

}

}






 

Lima.Render=function(){

 parent = document.getElementById("sales");

 h3=document.createElement("h3");

parent.appendChild(h3);

h3.textContent="Lima";

 

 ul=document.createElement("ul");

 parent.appendChild(ul);

 for (let i = 0; i < hours.length; i++) {

    li=document.createElement("li");

ul.appendChild(li);

 

li.textContent=`${hours[i]}  ${this.avgCookieHour[i]}   Cookies`    

     

 }





}

 

Lima.getRandmNumberCus();

Lima.getAvgcookieHour();

Lima.Render();










// let names=[Seattle,Tokyo,];

// for (let i = 0; i <names.length; i++) {

//     console.log(names[i])

//    names[i].getRandmNumberCus();

//    names[i].getAvgcookieHour();

//     names[i].Render();

 

    

// }










// let Tokyo= {

//     name : "Tokyo", 

//     mincus :3 ,

//     maxcus : 24 ,

//     AvgCookie : 1.4 ,

// randmNumberCus : [],

// avgCookieHour :[],

// }

 

// let Dubai= {

//     name : "Dubai", 

//     mincus :11 ,

//     maxcus : 38 ,

//     AvgCookie : 3.7 ,

// randmNumberCus : [],

// avgCookieHour :[],

// }

 

// let Paris= {

//     name : "Paris", 

//     mincus :20 ,

//     maxcus : 38 ,

//     AvgCookie :2.3 ,

// randmNumberCus : [],

// avgCookieHour :[],

// }

 

// let Lima= {

//     name : "Lima", 

//     mincus :2 ,

//     maxcus : 16 ,

//     AvgCookie :4.6  ,

// randmNumberCus : [],

// avgCookieHour :[],

// }

 