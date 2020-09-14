'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function getRandomNumber(min, max) {
    var random = Math.random(); // 0 - 1
    random = (random * (max - min + 1)) + min; // less than or equal max
    random = Math.floor(random); // remove fractions
    return random;
  }

// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6
//using constructor
//------------------------------------------------------------------------------------------
var cities = [];

function City (name, min, max,avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    var numberOfcockies = [];
    var arr=[];
    cities.push(this);
}
var Seattle	 = new City('Seattle', 23, 65, 6.3);


function getRandomNumber() {
    var random = Math.random(); // 0 - 1
    random = (random * (this.max -this.min + 1)) + this.min; // less than or equal max
    random = Math.floor(random); // remove fractions
    return random;
}
City.prototype.cookiesperhour = function () {
      this.getRandomNumber();
    for (var i = 0; i < hours.length; i++) {
        var c = Math.floor(arr[i] * this.avg);
        // console.log(c);
        numberOfcockies.push(c);
    }
}
console.log(this.arr);
console.log(this.numberOfcockies);


City.prototype.totals=function(){
    var total = 0;
    for (var j = 0; j < hours.length; j++) {
        total += this.numberOfcockies[j];
    }
return total;

}

City.prototype.CusPerHours = function () {
    for (var index = 0; index < hours.length; index++) {
        var i = this.getRandomNumber(this.min, this.max);
        console.log(i);
        arr.push(i);
    }
}       
 console.log(this.arr);


City.prototype.render = function () {
    var parentElement = document.getElementById('div-sales');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    
}

// getRandomNumber()//cookiesperhour()//totals()//CusPerHours()//render()

Seattle.render();
Seattle.cookiesperhour();
Seattle.CusPerHours();
Seattle.totals();

var Tokyo = new City('Tokyo', 3, 24, 1.2);
Tokyo.render();
Tokyo.cookiesperhour();
Tokyo.CusPerHours();
Tokyo.totals();

var Dubai = new City('Dubai', 11, 38, 3.7);
Dubai.render();
Dubai.cookiesperhour();
Dubai.CusPerHours();
Dubai.totals();

var Paris = new City('Paris', 20, 38, 2.3);
Paris.render();
Paris.cookiesperhour();
Paris.CusPerHours();
Paris.totals();
var Lima = new City('Lima', 2, 16, 4.6);
Lima.render();
Lima.cookiesperhour();
Lima.CusPerHours();
Lima.totals();


