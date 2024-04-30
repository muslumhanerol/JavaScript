// "use strict"; sıkı moda alır.
let students = ["Ayşe","Umay","Ceyda","Köfte","Erol"];

let result;

result = students.length;
result = students;
result = students.toString(); //Dizinin tüm elemanlarını araya virgül koyarak yazdırır.
result = students.join("-"); //Dizinin aralarına ekler. Tek bir değer olarak çıktı verir.
result = result.split(""); //Harf harf ayırır.
// result = result.split(";"); //


let products1 = ["Ürün1","Ürün2","Ürün3"];
let products2 = ["Ürün4","Ürün5","Ürün6"];

result = products1.concat(products2); //products1 in üzerine products2 yi ekledi, tek bir dizi haline getirdi.

// students.push("Han"); //Sona eleman ekler.
// students.pop();  //Son elemanı siler.
// result=students.pop();  //Son elemanı siler, neyi sildiğini de gösterir..
// students.shift(); //ilk elemanı siler.
// students.unshift("Ece"); // Dizinin en başına eleman ekler.

//--------------------------------------------------------------

// let incexCeyda = students.indexOf("Ceyda"); //Var olan değeri değiştirme.
// students[incexCeyda]="hannn";

students[students.indexOf("Ceyda")]="ece" //Var olan değeri değiştirme. Tek satır yazılışı üsttekiyle aynı.
students.splice(students.indexOf("Ceyda",1));  //Var olan değeri silme. ("Ceyda")= Şurdan itibaren başlayacaksın. ,1 silinecek eleman sayısı.
students.splice(2); //ikinci elemandan sonra tüm elemanları siler.
students.splice(2,3); //ikinci elemandan sonra 3 değeri siler.
result=students;


console.log(result);