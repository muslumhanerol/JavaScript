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
//ÖNEMLİ ÖNEMLİ (PARAMETRE KULLANMADAN DETAYLI)
// function today (){ 
//     let result = new Date(); //2. adım = Bu satırı çalıştırıyor ve result içine bugünün tarihini alıyor.
//     return result; //3.Adım = return ü görünce bugünün tarih bilgisini bunu nereden çağırdıysak oraya gönderiyor. Yani 24. satır today(); da bugünün tarihi yazıyor. Dolayısıyla 24.satırdaki bugun = today old. tarih bilgisi bugun değişkenine aktarılıyor. O bilgi de 25. satırda konsola yazdırıldı.
// }

// let bugun = today(); //1.adım= today fonksiyonu buradan çağrılınca, uygulama 19. satıra gidiyor.
// console.log(bugun);

//---------------------------------------
//ÖNEMLİ ÖNEMLİ (PARAMETRE KULLANILARAK DETAYLI)
//Doğum tarihi verllsin yaş bulunsun?
// function calculateAge(yearOfBirth){ //2.Adım= yearOfBirth içine yerleştirdi.
//     let today = new Date(); //3.Adım= Bugünü buldu.
//     let year = today.getFullYear(); //4.Adım= Yılı buldu.
//     let result = year - yearOfBirth; //5.Adım= 2024 ten 1993 ü çıkartıp sonucu buldu, result içine attı.
//     return result; //6.Adım= Bulduğu sonucu geri döndürdü.
// }

// console.log(calculateAge(1993)); //1.Adım= 1993 sayısını aldı.//7.Adım= Böylece console içine 31 yazmış olduk. 

//Alternatif kod. TEK SATIR !!!
// function calculateAge(yearOfBirth){ 

//    return new Date().getFullYear() - yearOfBirth;//new Date()=Bugünün tarigini veriyor,getFullYear= bugünün tarihinin tıl bilgisini veriyor, bana gönderdiğin yearOfBirth ü çıkart.
// }

// console.log(calculateAge(1993));

//---------------------------------------
//---------------------------------------
//Kadınlar için emeklilik yaşı 60, erkek 65 tir. Doğum yılı cinsiyeti ve adı verilen bir kişinin emekli olmasına kaç yıl kaldığını gösterir func yaz.

// function calculateAge(yearOfBirth) {
//     let today = new Date();
//     let year = today.getFullYear();
//     let result = year - yearOfBirth;
//     return result;
// }

// function calculatePension(yearOfBirth, gender, fullName) {
//     let age = calculateAge(yearOfBirth);
//     let diff = gender == "Kadın" ? 60 - age : 65 - age;
//     // let result = "Sayın '" + fullName + "' emekli olmanıza " + diff + " yıl kalmıştır."
//     // let result = 'Sayın "' + fullName + '" emekli olmanıza ' + diff + ' yıl kalmıştır.' //Çift tırnak içinde göstermek istersek.
//     // let result = 'Sayın \'' + fullName + '\' emekli olmanıza ' + diff + ' yıl kalmıştır.' //Tek tırnak içinde tek tırnak gösterme.
//     let result = `Sayın ${fullName} emekli olmanıza ${diff} yıl kalmıştır.`; //Template Litarel yazım şekli.
//     return result;
// }

// console.log(calculatePension(1993,"Erkek","Müslüm Erol"));
// console.log(calculatePension(1973,"Kadın","Ayşe Mayşe"));

//---------------------------------------
//---------------------------------------
//Kendisine verilen dikdörtgen kenar uzunluklarını alıp ilgili dörtgenin alanını ve çevresni hesaplayıp geri döndüren bir function hazırla.

// function calculate(short,long){
//     let area = short * long;
//     let envirament = (short + long)*2;
//     // let result = [area, envirament];
//     let result = {area,envirament}; //üsttekinin farklı yazım tekniği.
//     return result;
// }

// console.log(calculate(4, 6));

//---------------------------------------
//---------------------------------------
//Fonksiyon çalıştığında yazı ya da tura çıkan fonksiyon yaz.

function yaziTuraAt(){
    let ramdom = Math.random();
    let result = ramdom >= 0.5 ? "Yazı" : "Tura"
    return result;
}
console.log(yaziTuraAt());