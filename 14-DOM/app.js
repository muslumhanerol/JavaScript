//DOM=Document Object Model

//1) Single (tek) element seçme.
// let result;
//GETELEMENTBYID
// result = document.getElementById("task-list");
// result = document.getElementById("title");
// result.style.backgroundColor="red";
// result.style.color="white";
// result.style.padding="50px";
// result.innerText="Full Stack Programlama"; //başlığı değiştirdik
// result.innerHTML="<span style='color:yellow'>Full Stack</span>Programlama"; //farklı renklendirme yaptık.

//-------------------------------------------
//-------------------------------------------
//QUERYSELECTOR hem id hem class seçer. ıd seçerken #, class seçerken . kullan.

// result = document.querySelector("#title");
// result = document.querySelector(".card-title"); //querySelector en üstten başlayarak ilk karşılaştığı elemanı bulur. aynı adda iki class, id, element olursa en yukarıdakini döndürür.
// result = document.querySelector("li");

// console.log(result)

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//2) Multi (çoklu) element seçme.

// let result;
// // getElementsByClassName = birden fazla değeri döndürür.
// result = document.getElementsByClassName("card-title") //fonksiyonun ismi ByClassName old. string içiinde . yazmamıza gerek yok.

// result = document.querySelector("li"); //Sacede ilk bulduğunu döndürür.

// result = document.getElementsByClassName("task"); //tüm task isimli class ları döndürür.

// result = document.getElementsByTagName("li"); //tüm li elementlerini seçer, var olan tüm li ler.

// result = document.querySelectorAll(".task"); // class ı task olan tüm elementleri döndürür. 34. satırla aynı.

// result = document.querySelectorAll("#task-list2 .task"); //id si task-list-2 olan elementin içindeki class ı task olanları seç dedik.

// console.log(result);
    
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//3) Traversing Elements = elementler arası gezme. bir önceki ya ya sonraski elemente erişmek.

let result;
// let taskList = document.getElementById("task-list");

// result = taskList.children; //bir element içindeki tüm elementleri seçer. task-list içinde 3 tane li var onlar döndürülür.
// console.log(taskList);

// let body = document.querySelector("body");
// console.log(body);
// result = body.children; //body içinde bulunan tüm elementleri döndürdü.
// result = body.children[0]; // body nin ilk elemanını getirir.
// result = body.children[3]; // body nin üçüncü elemanını getirir.
// result = body.firstElementChild; // body nin ilk elemanını getirir.
// result = body.lastElementChild; // body nin üçüncü elemanını getirir.
//----------------------------------------------------------------------
// result = document.getElementById("title");
// result = result.parentElement; //bir üst elementi döndürür.title ın bir üst elementi card-header.
// result = result.parentElement.parentElement; //card-header ın bir üst elementini döndürür yani body.
// result = result.parentElement.parentElement.parentElement; //body nin bir üst elementine gider yani html.
//----------------------------------------------------------------------

result = document.getElementById("task-list");
// result = result.nextElementSibling; //aynı seviyedeki ilk elemanı seç demek. yani task-list2 yi seçer.

result = result.firstElementChild; //task-list içindeki ilk elemente erişir yani 1. li ye.
result = result.nextElementSibling; //task-list içindeki 2. li yi seçer.
result = result.nextElementSibling.nextElementSibling; //task-list içindeki 3. li yi seçer.


console.log(result);
