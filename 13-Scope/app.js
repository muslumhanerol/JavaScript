
// function print(){
//     let name = "Müslüm Erol"; //function scope içinde tanımlanan değişken sadece o function içinde geçerlidir.
//     console.log(name);
// }

// if(true){
//     let price = 45;
//     console.log(name);
// }

// print();

// console.log(price);

//ES5 de değişken tanımlamak için var ve const kullanılırdı.
//ES5 le beraber bunlara let eklendi.

//-------------------------------------------------------------

var name = "Müslüm Erol"

function print(){
    console.log(name);
}

if(true){
    var price = 45; //var ile değişken tanımlarsak if, for gibi yerlerde değişken kullanılabilir, let te olmaz yukarıdaki örnekte old. gibi. 
}
print();

console.log(name);
console.log(price);