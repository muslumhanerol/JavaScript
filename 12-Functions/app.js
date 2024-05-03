// function selamVer(){         //parametresiz function
//     console.log("Merhaba");
// }

// selamVer();
// selamVer();
// selamVer();

//------------------------------------

// function selamVer2(message) {   //parametreli function
//     console.log(message);
// }

// selamVer2("Merhaba, nasılsın?"); //1.selamver2 komutu burada görününce 11.satır  function çalışacak. Bunu yaparken string ifadeyi "Merhaba, nasılsın?" (message) değişkeninin içine yerleştirecek. Yani message = "Merhaba, nasılsın?" dır. Bu yüzden console.log(message); kodunun çıktısı "Merhaba, nasılsın?" olur.

//---------------------------------------
//ÖNEMLİ ÖNEMLİ
function today (){ 
    let result = new Date(); //2. adım = Bu satırı çalıştırıyor ve result içine bugünün tarihini alıyor.
    return result; //3.Adım = return ü görünce bugünün tarih bilgisini bunu nereden çağırdıysak oraya gönderiyor. Yani 24. satır today(); da bugünün tarihi yazıyor. Dolayısıyla 24.satırdaki bugun = today old. tarih bilgisi bugun değişkenine aktarılıyor. O bilgi de 25. satırda konsola yazdırıldı.
}

let bugun = today(); //1.adım= today fonksiyonu buradan çağrılınca, uygulama 19. satıra gidiyor.
console.log(bugun);