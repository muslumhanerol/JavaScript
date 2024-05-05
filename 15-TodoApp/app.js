//const = ben txtTextDescription içerisine yeni bir değer ataması yapmayacağım dedik. let deseydik atayabilirdik ve yanlış bir souç alabiliriz.
//txtTextDescription=asgdhdhhd mesela bu let de kabul edilir ancak const ta hata verir. yanlışlıkla değer ataması yapılmasın diye let yerine const kullan. 

const txtTextDescription = document.getElementById("txt-task-description"); //görev yazma alanı seçildi.
const btnAddTask = document.getElementById("btn-add-task"); //ekle butonunu yakaladık.
const taskList = document.getElementById("task-list");

