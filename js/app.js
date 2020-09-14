'use strict';
var arr=[];
function getRandomNumber(min, max){
  var random = Math.random(); // 0 - 1
  random = (random * (max - min + 1)) + min ; // less than or equal max
  random = Math.floor(random); // remove fractions
  return random;
}
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var seattle={
    name: 'seattle',
    minCus:23,
    maxCus:65,
    total:0,
    avgCookies:6.3,
    CusPerHours: function(){

        for (let index = 0; index < hours.length; index++) {
           var i= getRandomNumber(this.minCus,this.maxCus);
            console.log(i);
            arr.push(i);
            
        }
      },
      render: function(){
        var parentElement = document.getElementById('div-sales');
    
        var article = document.createElement('article');
        parentElement.appendChild(article);
    
        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
    
        var p2 = document.createElement('p');
        p2.textContent = 'The maximum number of customers per hour is : '+ this.maxCus;
        article.appendChild(p2);
        var p3 = document.createElement('p');
        p3.textContent = ' The minimum number of customers per hour is :'+ this.minCus;
        article.appendChild(p3);
       
        var p = document.createElement('p');
        p.textContent ='The Total is ' +this.totals();
        article.appendChild(p);
        var ul = document.createElement('ul');
        article.appendChild(ul);
        for(var i = 0; i < arr.length; i++){
          var li = document.createElement('li');
          li.textContent =hours[i]+': '+ arr[i]+' Cookies';
          ul.appendChild(li);

        }
        li.textContent='Total : '+this.totals() +' Cookies';
        ul.appendChild(li);


      },
      totals:function(){
          for (let j = 0; j < arr.length; j++) {
              this.total+=arr[j];
          }
          console.log(this.total);
          return this.total;
      }
      


};

  seattle.CusPerHours(seattle.minCus,seattle.maxCus);
  console.log(arr);
  seattle.render();
  seattle.totals();


  //Tokyo	3	24	1.2

var arr=[];
var Tokyo={
    name: 'Tokyo',
    minCus:3,
    maxCus:24,
    total:0,
    avgCookies:1.2,
    CusPerHours: function(){

        for (let index = 0; index < hours.length; index++) {
           var i= getRandomNumber(this.minCus,this.maxCus);
            console.log(i);
            arr.push(i);
            
        }
      },
      render: function(){
        var parentElement = document.getElementById('div-sales');
    
        var article = document.createElement('article');
        parentElement.appendChild(article);
        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
    
       
        var p2 = document.createElement('p');
        p2.textContent = 'The maximum number of customers per hour is : '+ this.maxCus;
        article.appendChild(p2);
        var p3 = document.createElement('p');
        p3.textContent = ' The minimum number of customers per hour is :'+ this.minCus;
        article.appendChild(p3);
       
        var p = document.createElement('p');
        p.textContent ='The Total is ' +this.totals();
        article.appendChild(p);

        var ul = document.createElement('ul');
        article.appendChild(ul);
        for(var i = 0; i < arr.length; i++){
          var li = document.createElement('li');
          li.textContent =hours[i]+': '+ arr[i]+' Cookies';
          ul.appendChild(li);

        }
        li.textContent='Total : '+this.totals() +' Cookies';
        ul.appendChild(li);


      },
      totals:function(){
          for (let j = 0; j < arr.length; j++) {
              this.total+=arr[j];
          }
          console.log(this.total);
          return this.total;
      }
      


};

 
Tokyo.CusPerHours(this.minCus,this.maxCus);
//   console.log(arr);
Tokyo.render();
Tokyo.totals();


//Dubai	11	38	3.7


var arr=[];
var Dubai={
    name: 'Dubai',
    minCus:11,
    maxCus:38,
    total:0,
    avgCookies:3.7,
    CusPerHours: function(){

        for (let index = 0; index < hours.length; index++) {
           var i= getRandomNumber(this.minCus,this.maxCus);
            console.log(i);
            arr.push(i);
            
        }
      },
      render: function(){
        var parentElement = document.getElementById('div-sales');
    
        var article = document.createElement('article');
        parentElement.appendChild(article);
    
        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
    
        var p2 = document.createElement('p');
        p2.textContent = 'The maximum number of customers per hour is : '+ this.maxCus;
        article.appendChild(p2);
        var p3 = document.createElement('p');
        p3.textContent = ' The minimum number of customers per hour is :'+ this.minCus;
        article.appendChild(p3);
        var p = document.createElement('p');
        p.textContent ='The Total is ' +this.totals();
        article.appendChild(p);
    
       
        var ul = document.createElement('ul');
        article.appendChild(ul);
        for(var i = 0; i < arr.length; i++){
          var li = document.createElement('li');
          li.textContent =hours[i]+': '+ arr[i]+' Cookies';
          ul.appendChild(li);

        }
        li.textContent='Total : '+this.totals() +' Cookies';
        ul.appendChild(li);


      },
      totals:function(){
          for (let j = 0; j < arr.length; j++) {
              this.total+=arr[j];
          }
          console.log(this.total);
          return this.total;
      }
      


};

Dubai.CusPerHours(this.minCus,this.maxCus);
//   console.log(arr);
Dubai.render();
Dubai.totals();

//Paris	20	38	2.3
//Lima	2	16	4.6


var arr=[];
var Paris={
    name: 'Paris',
    minCus:20,
    maxCus:38,
    total:0,
    avgCookies:2.3,
    CusPerHours: function(){

        for (let index = 0; index < hours.length; index++) {
           var i= getRandomNumber(this.minCus,this.maxCus);
            console.log(i);
            arr.push(i);
            
        }
      },
      render: function(){
        var parentElement = document.getElementById('div-sales');
    
        var article = document.createElement('article');
        parentElement.appendChild(article);
    
        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
        var p2 = document.createElement('p');
        p2.textContent = 'The maximum number of customers per hour is : '+ this.maxCus;
        article.appendChild(p2);
        var p3 = document.createElement('p');
        p3.textContent = ' The minimum number of customers per hour is :'+ this.minCus;
        article.appendChild(p3);
       
        var p = document.createElement('p');
        p.textContent ='The Total is ' +this.totals();
        article.appendChild(p);
        var ul = document.createElement('ul');
        article.appendChild(ul);
        for(var i = 0; i < arr.length; i++){
          var li = document.createElement('li');
          li.textContent =hours[i]+': '+ arr[i]+' Cookies';
          ul.appendChild(li);

        }
        li.textContent='Total : '+this.totals() +' Cookies';
        ul.appendChild(li);


      },
      totals:function(){
          for (let j = 0; j < arr.length; j++) {
              this.total+=arr[j];
          }
          console.log(this.total);
          return this.total;
      }
      


};

Paris.CusPerHours(this.minCus,this.maxCus);
//   console.log(arr);
Paris.render();
Paris.totals();

//Lima	2	16	4.6

var arr=[];
var Lima={
    name: 'Lima',
    minCus:2,
    maxCus:16,
    total:0,
    avgCookies:4.6,
    CusPerHours: function(){

        for (let index = 0; index < hours.length; index++) {
           var i= getRandomNumber(this.minCus,this.maxCus);
            console.log(i);
            arr.push(i);
            
        }
      },
      render: function(){
        var parentElement = document.getElementById('div-sales');
    
        var article = document.createElement('article');
        parentElement.appendChild(article);
    
        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
    
        var p2 = document.createElement('p');
        p2.textContent = 'The maximum number of customers per hour is : '+ this.maxCus;
        article.appendChild(p2);
        var p3 = document.createElement('p');
        p3.textContent = ' The minimum number of customers per hour is :'+ this.minCus;
        article.appendChild(p3);
        
        var p = document.createElement('p');
        p.textContent ='The Total is ' +this.totals();
        article.appendChild(p);
    
        var ul = document.createElement('ul');
        article.appendChild(ul);
        for(var i = 0; i < arr.length; i++){
          var li = document.createElement('li');
          li.textContent =hours[i]+': '+ arr[i]+' Cookies';
          ul.appendChild(li);

        }
        li.textContent='Total : '+this.totals() +' Cookies';
        ul.appendChild(li);


      },
      totals:function(){
          for (let j = 0; j < arr.length; j++) {
              this.total+=arr[j];
          }
          console.log(this.total);
          return this.total;
      }
      


};

Lima.CusPerHours(this.minCus,this.maxCus);
//   console.log(arr);
Lima.render();
Lima.totals();


console.table(Lima);