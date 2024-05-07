//const = ben txtTextDescription içerisine yeni bir değer ataması yapmayacağım dedik. let deseydik atayabilirdik ve yanlış bir souç alabiliriz.
//txtTextDescription=asgdhdhhd mesela bu let de kabul edilir ancak const ta hata verir. yanlışlıkla değer ataması yapılmasın diye let yerine const kullan. 

const txtTextDescription = document.getElementById("txt-task-description"); //görev yazma alanı seçildi.
const btnAddTask = document.getElementById("btn-add-task"); //ekle butonunu yakaladık.
const taskList = document.getElementById("task-list");

let taskListArray = [
    {id:1, taskDescription:"Netflix izle", status:"completed"},
    {id:2, taskDescription:"Pilav Unutma", status:"pending"},
    {id:3, taskDescription:"Ceza öde", status:"pending"},
    {id:4, taskDescription:"Toplantı planla", status:"completed"},
    {id:15, taskDescription:"Diyet yap", status:"pending"},
];

//btn-add-task e basıldığında çalışacak komutumuz olsun. Olay event (tıklama, çift tıklama vs.) eklemek istiyorsak addEventListener kullan.
//ne yapınca yakalanmasını istiyorsunu ("buraya yazıyoruz",ne yapılsın kısmını virgülden sonra yazıyoruz. Çalışacak kodların fonksiyonu. function(){ alert("görev ekledin.") })

btnAddTask.addEventListener("click",function(event){ //event=click işlendiğinde function a bilgi gönderiyor,o bilgi gerçekleşen event bilgisi.Pek çok olay barındıran bilgi. istediğimiz adı verebiliriz e, asdf vs. biz event dedik anlaşılır olsun diye. Alt satırda o davranışları yoksay dedik. Önceden görev yazma alanını doldurup butona bastığımızda yazma alanının için boşalıyordu artık için dolu kalıyor.
    event.preventDefault();//ilgili olayın default davranışlarını iptal ediyor.

    let value = txtTextDescription.value.trim(); //Kullanıcı tarafından girilecek değeri al value içine koy.
    //.trim = kullanıcı başta ve sonra boşluk bırakırsa onları yok sayacak.Kullanıcı boşluk boşluk yapar dönderirse hata verir, trim yazmasaydık boşluk olsa dahi kayıt ederdi.
    if (value!=""){
        let id = taskListArray.length == 0 ? 1 : taskListArray[taskListArray.length-1].id + 1; //taskListArray.length == 0 ? 1 ilk kez görev oluşturuyorsam id si 1 olsun, : taskListArray[taskListArray.length-1] daha çnceden görevler varsa taskListArray in sonuncu elemanının bir eksiğini al. onun ıd değerini oku 1 ekle.
        taskListArray.push(
            { 
                "id" : id, //"id" property -- id=25.satırdaki değişken.
                "taskDescription" : value,
                "status" : "pending" //varsayılan olarak pending olsun dedik.
            }
       );
    }else{
        alert("Lütfen görev açıklamasını boş bırakmayınız.")
    }
    txtTextDescription.value = ""; //bir görev ekledikten sonra sayfa yenilenmeden görev ekleme alanı boş olsun.
    txtTextDescription.focus(); //görev eklendikten sonra imlec yine görev yazma alanına odaklanacak.
})


function displayTasks(){
    //Bu fonksiyon her ihtiyaç duyulduğunda tüm görevleri yeniden okuyup göstermek için kullanılacak.
    taskList.innerHTML=""; //tasklist içindeki tüm html kodlarını boşalt.
    if(taskListArray.length==0){
        taskList.innerHTML=`<div class="alert alert-warning mb-0">Tanımlı Görev Bulunmamaktadır.</div>`;
    }else{
        for(let task of taskListArray){ //taskListArray bu dizinin içine gider 0 ıncı elemandan başlar en sonuncuya kadar döner. Her döndüğünde sıradaki elemana task der.
            task.

        }
    }
}

displayTasks();

