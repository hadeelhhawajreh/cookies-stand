'use strict';
var cities=[];
var emptyArr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var hours = [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm '];
function getRandomNumber(min, max) {
  var random = Math.random(); // 0 - 1
  random =Math.floor( (random * (max - min + 1)) + min); // less than or equal max
  return random;
}

function City(name, minCus, maxCus, avgCookies) {
  this.name = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookies = avgCookies;
  
  this.numofcook = [];
  this.arr = [];// to store all random num 
  cities.push(this);
}
City.prototype.CusPerHours=function(){
  for (var index = 0; index < hours.length; index++) {
    var i = getRandomNumber(this.minCus, this.maxCus);
    console.log(i);
    this.arr.push(i);

  }};


City.prototype.cookforper=function(){
  for (var i = 0; i < hours.length; i++) {
    var x = Math.ceil(this.arr[i] * this.avgCookies);
    console.log(x);
    this.numofcook.push(x);
    emptyArr[i]+=this.numofcook[i];
   

  }
  console.log('****empty array************');
  console.log(emptyArr);
  console.log('*******empty array*********');
};
City.prototype.totals=function(){
  this.total = 0;
  for (var  j = 0; j < hours.length; j++) {
    this.total += this.numofcook[j];
  }
  emptyArr[14]+=this.total;
  console.log(' tooooooooooooooooooootal'+this.total);
  console.log(' tooooooooooooooooooootal'+ emptyArr[15]);
  return this.total;
};


City.prototype.render=function(){
  // this.cookforper();
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
  };

  tableHead();
  var table;
  function tableHead(){
     table = document.getElementById('div-table');
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

  //form event lisner... 
  var form= document.getElementById('mainForm');
  form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(event);
    var name = event.target.nname.value;
   console.log('name: ', name);
   var min=event.target.mminNum.value;
   min=Number(min);

   console.log('min: ', min);
   var max=event.target.mmaxNum.value;
   max=Number(max);
   console.log('max: ', max);
   var avg=event.target.avgNum.value;
   avg=Number(avg);
   console.log('avg: ', avg);
   emptyArr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   
   var newc=new City(name,min,max,avg);
   table.textContent=' ';
   
   tableHead();
   renderStore();
   tfoot();

  //  newc.CusPerHours();
  //  newc.cookforper();
  //  newc.render();
   });
  

  //calculate hourly total cookies for all five stores.
function tfoot(){
var lastR=document.createElement('tr');
table.appendChild(lastR);
var td15;
for(var i=0;i<=hours.length+1;i++){
  if(i==0){
     td15=document.createElement('td');
  lastR.appendChild(td15);
  td15.textContent='Total of coulmns';
  }
  else{
   td15=document.createElement('td');
  lastR.appendChild(td15);
  td15.textContent=emptyArr[i-1];
  }

}
// td15=document.createElement('td');
//   lastR.appendChild(td15);
//   td15.textContent=this.total();
//   emptyArr[15]+=this.total;


}
//   Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6
var s=new City('seattle',23,65,6.3);
var l=new City('Lima',2,16,4.6);
var t=new City('Tokyo',3,24,1.2);
var d=new City('Dubai',11,38,3.7);
var p=new City('Paris',20,38,2.3);

function renderStore() {
  for (var i = 0; i < cities.length; i++) {
    cities[i].CusPerHours();
    cities[i].cookforper();
    cities[i].render();
  }
}
renderStore();
tfoot();





// s.CusPerHours();
// s.cookforper();
// s.render();
// t.CusPerHours();
// t.cookforper();
// t.render();
// d.CusPerHours();
// d.cookforper();
// d.render();
// p.CusPerHours();
// p.cookforper();
// p.render();
// l.CusPerHours();
// l.cookforper();
// l.render();






































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