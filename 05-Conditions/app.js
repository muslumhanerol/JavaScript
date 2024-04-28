// let a = 20; //tek olasılık.
// if(a>10){
//     console.log("Sayı büyük")
// };


// let a = 9; //iki olasalık büyük ya da küçük.
// if(a>10){
//     console.log("Sayı büyük");
// }else{
//     console.log("Sayı büyük değil");
// };


// let a = 10; //üç olasalık büyük, küçük, eşit..

// if(a>10){
//     console.log("Sayı büyük");
// }else if(a<10){
//     console.log("Sayı küçük");
// }else{
//     console.log("Sayılar eşit");
// };

//Yukarıdaki kodun farklı bir yazım biçimi.
// let a = 10; 

// if(a>10){
//     console.log("Büyük");
// };
// if(a<10){
//     console.log("Küçük");
// }
// if(a==10){
//     console.log("Eşit");
// }
//----------------------------------------------------------
// 0-16:Çocuk
// 17-35:Genç
// 36-50:Yaşlı
// 51-70:Ölmüş ağlayanı yok
// 71'den büyükse Nı Comment


// let age = 12;

// if (age<=16) {
//     console.log("Çocuk");
    
// } else if (age <= 35) {
//     console.log("Genç");
    
// } else if(age <= 50){
//     console.log("Yaşlı");
// }else if (age <= 70){
//     console.log("Ölmüş ağlayanu yok");
// }else{
//     console.log("No comment");
// }

//----------------------------------------------------------
//Promt tan soru sorma cevap alma.

let correctAnswer = "ECMA";
let userAnswer = prompt("Javascript in offical ismi nedir?");
let result;

if(userAnswer == correctAnswer){
    result="Tebrikler";
}else{
    result="yanlış, tekrar dene.";
};
alert(result);
