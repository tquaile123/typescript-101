console.log('Question 1 - arguments : ');

var length = 4;

function callback() {
    console.log(this.length);  // what is logged
}

callback();