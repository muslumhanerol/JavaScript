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
//3) Traversing Elements = elementler arası gezme.