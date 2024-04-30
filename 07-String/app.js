//STRING fonksiyonlar
let kursAdı = "FullStack Web Developer Eğitimi";
let result;

result = kursAdı.toLowerCase(); //Tüm metni küçük harfle yazar.
result = kursAdı.toLocaleLowerCase(); //Tüm metni küçük harfle yazar. Küçük ı büyük İ promlemini ortadan kaldırır.
result = kursAdı.toUpperCase(); //Tüm metni büyük harfle yazar.
result = kursAdı.toLocaleUpperCase(); //Tüm metni büyük harfle yazar. Küçük ı büyük İ promlemini


result = kursAdı.length; //Metnin kaç harften oluştuğunu gösterir.
//----
result = kursAdı[0]; //Metnin 1. harfini getirir.
result = kursAdı[14]; //Metnin 15. harfini getirir.
//--------
//***Hangi fonsiyonun içi boş bırakılır hangisi doldurulur anlamak istiyorsan parantezin içine imleci getir bak.
result = kursAdı.slice(0,2); //0 dan başla 2 karaktere kadar göster.
result = kursAdı.slice(14,23); //14 den başla 23 karaktere kadar göster. Developer yazar.
//--------
result= kursAdı.replace("Eğitimi","Kursu"); //değiştirici.Eğitimi kelimesini Kursu diye çevirdik.
//------
result= kursAdı.trim(); //Baştaki ve sondaki boşlıkları kaldırır.
result= kursAdı.trimStart(); //Sadece baştaki boşlıkları kaldırır.
result= kursAdı.trimEnd(); //Sadece sondaki boşlıkları kaldırır.

result=kursAdı.indexOf("F"); //İndex numarasını verir. Eğer o harf yoksa -1 gösterir.
result=kursAdı.indexOf("F", 3); //index numarasını 3 ncü indexten sonra baş dedik.
console.log(result);