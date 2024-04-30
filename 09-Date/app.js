let result; //Bugünün tarihini, saatini verir. Sistemin tarihi, sunucunun tarihi.
let now;
now = new Date();
result = now;
result = now.getDate(); //Günün verir.
result = now.getDay(); //Haftanın kaçıncı günü olduğu.

result = now.setFullYear(); //Sadece yılı verir.
result = now.getHours(); //Sadece saat kısmını getirir.
result = now.getSeconds(); //Sadece saniye kısmını getirir.


result = new Date(1900, 0, 1);
result = result.getTime(); //Yukarıdaki tarihin sayısal karşılığını verir. -2208995816000 yukarıdaki tarihin karşılığı.



console.log(result);