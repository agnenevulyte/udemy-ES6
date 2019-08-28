// Blocks and IIFEs


// ES 6 
// {} - creates a block;
{
    const a= 1;
    let b=5;
    var c = 3;
    console.log(a+b); // 6
}

// values are not accessible outside the block
console.log(a+b); // error
console.log(c); // 3


// ES5

(function(){
    var c = 3;
    console.log(c); // 3
})();

console.log(c); // error