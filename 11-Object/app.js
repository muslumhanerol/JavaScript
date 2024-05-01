//Java Script Object Notation - JSON 

// let student1 = ["Müslüm","Erol",30,"Erkek"];
// let student2 = ["Onur","Hasan",28,"Erkek"];
// let student3 = ["Ayşe","Mayşe",25,"Kadın"];

// let students = [student1,student2,student3];
// console.log(students);

// for(let i=0; i<students.length; i++){
//     console.log(students[i][0] + " " + students[i][2]);
// }

// students[i][0] = i students1 2 3, [0]=0 ıncı index yanı isimler.
// students[i][2] = i students1 2 3, [2]=3 üncü index yani yaşlar.

//---------------------------------------------------

//OOP

 //Yukarıda index numaralarını akılda tutmak zor old. object programlama daha kolay anlaşılır. Altta student1 değişkendir. firstName,lastName vb bu objenin özellikleridir(property lerdir). console log ta .nokta koyduktan sonra çağrılmak istenen özellikler(property) görünüyor.
let students1 = {                  
    firstName:"Müslüm",
    lastName:"Erol",
    age:30,
    gender:"Erkek"
}

// console.log(students1.firstName);
// console.log(students1.gender + " " + students1.age);

let students2 = {                  
    firstName:"Onur",
    lastName:"Erol",
    age:28,
    gender:"Erkek"
}

let students3 = {                  
    firstName:"Ayşe",
    lastName:"Mayşe",
    age:25,
    gender:"Kadın"
}

// let students = [students1,students2,students3];

// //3 öğrencinin adını ve cinsiyetini yazdır.
// for(i=0; i<students.length; i++){
//     console.log(students[i].firstName + " " + students[i].gender);
// }
//-----------------------------------------
//3 öğrencinin yaş ortalamasını yaz.
// let total = 0;
// for(i=0; i<students.length; i++){
//     console.log(students[i].firstName + " " + students[i].gender);
//     total += students[i].age; //total 0 ilk kisi 30 yaşında 0+30 total 30 yazacak, i2 olacka ikinci öğrencinin yaşı 28. total 30 du + 28 total 58 oldu. sonra ücüncü öğrenci eklenecek 83 olcak.
// }
// console.log("Yaş Ortalaması: " + total/students.length); //toplamı çağırdık, öğrenci sayısına böldük.

//FARKLI BİR YAZIM
let students = [students1,students2,students3];
let total = 0;
let studentCount = students.length; //students.length yazacağımız yerlere artık studentCount yazabiliriz.
for(i=0; i<studentCount; i++){
    console.log(students[i].firstName + " " + students[i].gender);
    total += students[i].age; 
};
let everage = total/studentCount;
console.log("Yaş Ortalaması: " + everage.toFixed(1)); //toFixed(1) virgülden sonraki kaç basamak gösterilsin.

