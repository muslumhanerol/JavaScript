//DOM=Document Object Model

//1) Single (tek) element seçme.
let result;
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

result = document.querySelector("#title");
result = document.querySelector(".card-title"); //querySelector en üstten başlayarak ilk karşılaştığı elemanı bulur. aynı adda iki class, id, element olursa en yukarıdakini döndürür.
result = document.querySelector("li");


console.log(result)
    
