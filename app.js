"use strict";



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function Seattle (name , mincus , maxcus , avgcookie , customerEachHour)
{ 
    this.name=name;
    this.mincus=mincus;
    this.maxcus=maxcus;
    this.avgcookie=avgcookie;
    this.customerEachhour=

}

// let Seattle={
//     name : "Seattle", 
//     mincus : 23 ,
//     maxcus : 65 ,
//     AvgCookie : 6.3 ,
//     customerEachHour :[],
// randmNumberCus : []

// function getRandomInt(max) {

//     return Math.floor(Math.random() * max);
//   }
  
  console.log(getRandomInt());
 
  
  console.log(getRandomInt());
 
  
  console.log(Math.random());
  

}


let Tokyo= {
    name : "Tokyo", 
    mincus :3 ,
    maxcus : 24 ,
    AvgCookie : 1.4 ,
randmNumberCus : []
}


let Dubai= {
    name : "Dubai", 
    mincus :11 ,
    maxcus : 38 ,
    AvgCookie : 3.7 ,
randmNumberCus : []
}


let Paris= {
    name : "Paris", 
    mincus :20 ,
    maxcus : 38 ,
    AvgCookie :2.3 ,
randmNumberCus : []
}


let Lima= {
    name : "Lima", 
    mincus :2 ,
    maxcus : 16 ,
    AvgCookie :4.6  ,
randmNumberCus : []
}



let parent =document.getElementById('parent');
console.log(parent);

let table=document.createElement('table');


parent.appendChild(table);