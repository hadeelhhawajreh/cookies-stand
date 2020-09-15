'use strict';
var cities=[];
var hours = [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm '];
function getRandomNumber(min, max) {
  var random = Math.random(); // 0 - 1
  random = (random * (max - min + 1)) + min; // less than or equal max
  random = Math.floor(random); // remove fractions
  return random;
}

function City(name, minCus, maxCus, avgCookies) {
  this.name = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookies = avgCookies;
  this.total = 0;
  this.numofcook = [];
  this.arr = [];
  cities.push(this);
}
City.prototype.CusPerHours=function(){
  for (let index = 0; index < hours.length; index++) {
    var i = getRandomNumber(this.minCus, this.maxCus);
    console.log('array one');
    console.log(i);
    this.arr.push(i);

  }

};



City.prototype.cookforper=function(){
  for (var i = 0; i < hours.length; i++) {
    var x = Math.ceil(this.arr[i] * this.avgCookies);
    console.log(x);
    this.numofcook.push(x);
  }

};
City.prototype.totals=function(){
  for (let j = 0; j < hours.length; j++) {
    this.total += this.numofcook[j];
  }
  console.log(this.total);
  return this.total;

};
City.prototype.render=function(){
  this.cookforper();

    var table = document.getElementById('div-table');
    // make a tr
    var tr = document.createElement('tr');
    // create, content, append for store location column
    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
    for (var i = 0; i < hours.length; i++){
      td = document.createElement('td');
      td.textContent = this.numofcook[i];
      tr.appendChild(td);
    }
    td = document.createElement('td');
    td.textContent = this.totals();
    tr.appendChild(td);
    table.appendChild(tr);



  }
  tableHead();
  tfoot();
  function tableHead(){
    var table = document.getElementById('div-table');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = ' ';
    tr.appendChild(th);
  
    for (var i = 0; i< hours.length; i++){
      th = document.createElement('th');
      th.textContent = hours[i] ;
      tr.appendChild(th);
      if (i === hours.length-1){
        th = document.createElement('th');
        th.textContent = 'Daily City Total';
        tr.appendChild(th);
        table.appendChild(tr);
      }
    }
  }
  
  //calculate hourly total cookies for all five stores.
function tfoot(){
  var empty = [];
  for (var i = 0; i < hours.length; i ++){
    var totalcol = 0;
    for (var j =0; j < cities.length; j++){
      totalcol += numofcook[i];
    }
    empty.push(totalcol);
  }
  var footer = document.getElementById('div-table');
  //add 'total' at the end of raw
  var tr = document.createElement('tr');

  var td = document.createElement('td');
  td.textContent = 'Total';
  tr.appendChild(td);
  //print last row.
  for (i = 0; i < hours.length; i++){
    td = document.createElement('td');
    td.textContent = empty[i];
    tr.appendChild(td);
  }
  //total cookies from all stores.
  var totalcookies = 0;
  for (i =0;i<hours.length;i++){
    totalcookies += empty[i];
  }
  td = document.createElement('td');
  td.textContent = totalcookies;
  tr.appendChild(td);

  footer.appendChild(tr);
}
//   Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6
var s=new City('seattle',23,65,6.3);

function renderStore() {
  for (var i = 0; i < allStore.length; i++) {
    cities[i].render();
  }
}


s.CusPerHours();
s.cookforper();
s.render();
var t=new City('Tokyo',3,24,1.2);
t.CusPerHours();
t.cookforper();
t.render();
var d=new City('Dubai',11,38,3.7);
t.CusPerHours();
t.cookforper();
t.render();
var p=new City('Paris',20,38,2.3);
t.CusPerHours();
t.cookforper();
t.render();
var l=new City('Lima',2,16,4.6);
l.CusPerHours();
l.cookforper();
l.render();



// // //////////////////////Using object 
// var seattle = {
//   name: 'seattle',
//   minCus: 23,
//   maxCus: 65,
//   total: 0,
//   numofcook: [],
//   arr: [],
//   avgCookies: 6.3,
//   CusPerHours: function () {
//     for (let index = 0; index < hours.length; index++) {
//       var i = getRandomNumber(this.minCus, this.maxCus);
//       console.log('array one');
//       console.log(i);
//       this.arr.push(i);

//     }
//   },
//   cookforper: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var x = Math.ceil(this.arr[i] * this.avgCookies);
//       console.log(x);
//       this.numofcook.push(x);
//     }
//   },
//   totals: function () {
//     for (let j = 0; j < hours.length; j++) {
//       this.total += this.numofcook[j];
//     }
//     console.log(this.total);
//     return this.total;
//   }

//   ,
//   render: function () {
  



    
// //////////////////////////////////////////////////

//     // var article = document.createElement('article');
//     // parentElement.appendChild(article);

//     // var h2 = document.createElement('h2');
//     // h2.textContent = this.name;
//     // article.appendChild(h2);
//     // var p3 = document.createElement('p');
//     // p3.textContent = ' The minimum number of customers per hour is :' + this.minCus;
//     // article.appendChild(p3);
//     // var p2 = document.createElement('p');
//     // p2.textContent = 'The maximum number of customers per hour is : ' + this.maxCus;
//     // article.appendChild(p2);


//     // var p = document.createElement('p');
//     // p.textContent = 'The Total is ' + this.totals();
//     // article.appendChild(p);
//     // var ul = document.createElement('ul');
//     // article.appendChild(ul);
//     // var li;
//     // for (var i = 0; i < hours.length; i++) {
//     //   li = document.createElement('li');
//     //   ul.appendChild(li);
//     //   li.textContent = hours[i] + ': ' + this.numofcook[i] + ' Cookies';

//     // }
//     // li = document.createElement('li');
//     // ul.appendChild(li);
//     // li.textContent = 'Total : ' + this.total + ' Cookies';



//   }


// };
// seattle.CusPerHours();
// seattle.cookforper();
// seattle.render();



// // Seattle	23	65	6.3
// // Tokyo	3	24	1.2
// // Dubai	11	38	3.7
// // Paris	20	38	2.3
// // Lima	2	16	4.6
// var Tokyo = {
//   name: 'Tokyo',
//   minCus: 3,
//   maxCus: 24,
//   total: 0,
//   numofcook: [],
//   arr: [],

//   avgCookies: 6.3,
//   CusPerHours: function () {
//     for (let index = 0; index < hours.length; index++) {
//       var i = getRandomNumber(this.minCus, this.maxCus);
//       console.log('array one');
//       console.log(i);
//       this.arr.push(i);

//     }
//   },
//   cookforper: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var x = Math.ceil(this.arr[i] * this.avgCookies);
//       console.log(x);
//       this.numofcook.push(x);
//     }
//   },
//   totals: function () {
//     for (let j = 0; j < hours.length; j++) {
//       this.total += this.numofcook[j];
//     }
//     // console.log(this.total);
//     return this.total;
//   }
//   ,
//   render: function () {
//     var parentElement = document.getElementById('div-sales');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     article.appendChild(h2);
//     var p3 = document.createElement('p');
//     p3.textContent = ' The minimum number of customers per hour is :' + this.minCus;
//     article.appendChild(p3);
//     var p2 = document.createElement('p');
//     p2.textContent = 'The maximum number of customers per hour is : ' + this.maxCus;
//     article.appendChild(p2);
//     var p = document.createElement('p');
//     p.textContent = 'The Total is ' + this.totals();
//     article.appendChild(p);
//     var ul = document.createElement('ul');
//     article.appendChild(ul);
//     var li;
//     for (var i = 0; i < hours.length; i++) {
//       li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = hours[i] + ': ' + this.numofcook[i] + ' Cookies';

//     }
//     li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = 'Total : ' + this.total + ' Cookies';

//   }

// };

// Tokyo.CusPerHours();
// Tokyo.cookforper();
// Tokyo.render();
// // Dubai	11	38	3.7

// var Dubai = {
//   name: 'Dubai',
//   minCus: 11,
//   maxCus: 38,
//   total: 0,
//   numofcook: [],
//   arr: [],

//   avgCookies: 3.7,
//   CusPerHours: function () {
//     for (let index = 0; index < hours.length; index++) {
//       var i = getRandomNumber(this.minCus, this.maxCus);
//       console.log('array one');
//       console.log(i);
//       this.arr.push(i);

//     }
//   },
//   cookforper: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var x = Math.ceil(this.arr[i] * this.avgCookies);
//       console.log(x);
//       this.numofcook.push(x);
//     }
//   },
//   totals: function () {
//     for (let j = 0; j < hours.length; j++) {
//       this.total += this.numofcook[j];
//     }
//     console.log(this.total);
//     return this.total;
//   }

//   ,
//   render: function () {
//     var parentElement = document.getElementById('div-sales');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     article.appendChild(h2);
//     var p3 = document.createElement('p');
//     p3.textContent = ' The minimum number of customers per hour is :' + this.minCus;
//     article.appendChild(p3);
//     var p2 = document.createElement('p');
//     p2.textContent = 'The maximum number of customers per hour is : ' + this.maxCus;
//     article.appendChild(p2);


//     var p = document.createElement('p');
//     p.textContent = 'The Total is ' + this.totals();
//     article.appendChild(p);
//     var ul = document.createElement('ul');
//     article.appendChild(ul);
//     var li;
//     for (var i = 0; i < hours.length; i++) {
//       li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = hours[i] + ': ' + this.numofcook[i] + ' Cookies';

//     }
//     li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = 'Total : ' + this.total + ' Cookies';



//   }


// };
// Dubai.CusPerHours();
// Dubai.cookforper();
// Dubai.render();



// var Paris = {
//   name: 'Paris',
//   minCus: 20,
//   maxCus: 38,
//   total: 0,
//   numofcook: [],
//   arr: [],

//   avgCookies: 2.3,
//   CusPerHours: function () {
//     for (let index = 0; index < hours.length; index++) {
//       var i = getRandomNumber(this.minCus, this.maxCus);
//       console.log('array one');
//       console.log(i);
//       this.arr.push(i);

//     }
//   },
//   cookforper: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var x = Math.ceil(this.arr[i] * this.avgCookies);
//       console.log(x);
//       this.numofcook.push(x);
//     }
//   },
//   totals: function () {
//     for (let j = 0; j < hours.length; j++) {
//       this.total += this.numofcook[j];
//     }
//     console.log(this.total);
//     return this.total;
//   }

//   ,
//   render: function () {
//     var parentElement = document.getElementById('div-sales');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     article.appendChild(h2);
//     var p3 = document.createElement('p');
//     p3.textContent = ' The minimum number of customers per hour is :' + this.minCus;
//     article.appendChild(p3);
//     var p2 = document.createElement('p');
//     p2.textContent = 'The maximum number of customers per hour is : ' + this.maxCus;
//     article.appendChild(p2);


//     var p = document.createElement('p');
//     p.textContent = 'The Total is ' + this.totals();
//     article.appendChild(p);
//     var ul = document.createElement('ul');
//     article.appendChild(ul);
//     var li;
//     for (var i = 0; i < hours.length; i++) {
//       li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = hours[i] + ': ' + this.numofcook[i] + ' Cookies';

//     }
//     li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = 'Total : ' + this.total + ' Cookies';



//   }


// };
// Paris.CusPerHours();
// Paris.cookforper();
// Paris.render();

// // Lima	2	16	4.6
// var Lima = {
//   name: 'Lima',
//   minCus: 2,
//   maxCus: 16,
//   total: 0,
//   numofcook: [],
//   arr: [],

//   avgCookies: 4.6,
//   CusPerHours: function () {
//     for (let index = 0; index < hours.length; index++) {
//       var i = getRandomNumber(this.minCus, this.maxCus);
//       console.log('array one');
//       console.log(i);
//       this.arr.push(i);

//     }
//   },
//   cookforper: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var x = Math.ceil(this.arr[i] * this.avgCookies);
//       console.log(x);
//       this.numofcook.push(x);
//     }
//   },
//   totals: function () {
//     for (let j = 0; j < hours.length; j++) {
//       this.total += this.numofcook[j];
//     }
//     console.log(this.total);
//     return this.total;
//   }

//   ,
//   render: function () {
//     var parentElement = document.getElementById('div-sales');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     article.appendChild(h2);
//     var p3 = document.createElement('p');
//     p3.textContent = ' The minimum number of customers per hour is :' + this.minCus;
//     article.appendChild(p3);
//     var p2 = document.createElement('p');
//     p2.textContent = 'The maximum number of customers per hour is : ' + this.maxCus;
//     article.appendChild(p2);


//     var p = document.createElement('p');
//     p.textContent = 'The Total is ' + this.totals();
//     article.appendChild(p);
//     var ul = document.createElement('ul');
//     article.appendChild(ul);
//     var li;
//     for (var i = 0; i < hours.length; i++) {
//       li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = hours[i] + ': ' + this.numofcook[i] + ' Cookies';

//     }
//     li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = 'Total : ' + this.total + ' Cookies';



//   }


// };
// Lima.CusPerHours();
// Lima.cookforper();
// Lima.render();



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var parent=document.getElementById('div-table');
// var table=document.createElement('table');
// parent.appendChild(table);

// function thead(){
//   var row=document.createElement('tr');
//   table.appendChild(row);
//   var hrow=document.createElement('th');
//   row.appendChild(hrow);
//   for (let index = 0; index < hours.length; index++) {
//     hrow=document.createElement('th');
//     hrow.textContent=hours[index];
//   }
//   hrow=document.createElement('th');
//     hrow.textContent='Location Total';
//     row.appendChild(hrow);

// }
// thead();