//const = ben txtTextDescription içerisine yeni bir değer ataması yapmayacağım dedik. let deseydik atayabilirdik ve yanlış bir souç alabiliriz.
//txtTextDescription=asgdhdhhd mesela bu let de kabul edilir ancak const ta hata verir. yanlışlıkla değer ataması yapılmasın diye let yerine const kullan. 

const txtTextDescription = document.getElementById("txt-task-description"); //görev yazma alanı seçildi.
const btnAddTask = document.getElementById("btn-add-task"); //ekle butonunu yakaladık.
const taskList = document.getElementById("task-list");

let isEditMode = false; //Eğer bu değişken false ise yeni kayıt modundayız, true ise düzenleme modundayız.
let editedArray; //Hangi görevi düzenleniyorsa onun id sini tutmaya yarar.


let taskListArray = [
    {id:1, taskDescription:"Netflix izle", status:"completed"},
    {id:2, taskDescription:"Pilav Unutma", status:"pending"},
    {id:3, taskDescription:"Ceza öde", status:"pending"},
    {id:4, taskDescription:"Toplantı planla", status:"completed"},
    {id:15, taskDescription:"Diyet yap", status:"pending"},
];

//btn-add-task e basıldığında çalışacak komutumuz olsun. Olay event (tıklama, çift tıklama vs.) eklemek istiyorsak addEventListener kullan.
//ne yapınca yakalanmasını istiyorsunu ("buraya yazıyoruz",ne yapılsın kısmını virgülden sonra yazıyoruz. Çalışacak kodların fonksiyonu. function(){ alert("görev ekledin.") })

btnAddTask.addEventListener("click", addTask); //btnAddTask elementine click yapıldığında çılışacak olan fonksiyonun adı addTask dir.

function addTask(event){ //Yeni görev ekleyen fonksiyon.
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
       displayTasks(); //yeni görev eklendiğinde sadece console den görünüyordu, bunu yazınc artık web syf da görünecek.
       console.log(taskListArray);
    }else{
        alert("Lütfen görev açıklamasını boş bırakmayınız.")
    }
    txtTextDescription.value = ""; //bir görev ekledikten sonra sayfa yenilenmeden görev ekleme alanı boş olsun.
    txtTextDescription.focus(); //görev eklendikten sonra imlec yine görev yazma alanına odaklanacak.


}



//Bu fonksiyon her ihtiyaç duyulduğunda tüm görevleri yeniden okuyup göstermek için kullanılacak.
function displayTasks(){    
    taskList.innerHTML=""; //tasklist içindeki tüm html kodlarını boşalt.
    if(taskListArray.length==0){
        taskList.innerHTML=`<div class="alert alert-warning mb-0">Tanımlı Görev Bulunmamaktadır.</div>`;
    }else{
        for(const task of taskListArray){ //taskListArray bu dizinin içine gider 0 ıncı elemandan başlar en sonuncuya kadar döner. Her döndüğünde sıradaki elemana task der.
            let completed = task.status == "completed" ? "checked" : ""; //statu completed ise let completed değişkeninin içine checked yaz, değilse boş bırak.
            let taskLi = `
            <li class="task list-group-item" id="${task.id}">
                <div class="form-check d-flex justify-content-between align-items-center">
                    <input onclick="updateStatus(this);" type="checkbox" id="${task.id}" class="form-check-input"${completed}>
                    <div class="input-group">
                        <input id="${task.id}" class="form-control ${completed}" type="text" value="${task.taskDescription}" disabled /> 
                        <!-- disabled= işlem yapılamaz hale getirir(tıklama vs...) -->
                        <button onclick="editTask(this);" id="${task.id}" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="deleteTask(this);" id="${task.id}" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>                            
            </li>

            `;
            taskList.insertAdjacentHTML("beforeend",taskLi); //Seçilen element neresiyse içine ya da dışına başka bir Html kodunu yerleştirir. Biz burda ul nin bitiminin önüne yerleştir dedik.index.html de 33. satır olan.
            //,taskLi= taskLi içinde yazan html kodlarını taskList isimli elementin bitişinin öncesine yerleştir.
        }
    }
}

//Task update  (tamamlandı ya da devam ediyor işlemini yapan fonksiyon)
function updateStatus(activeTask){
    let newsStatus = activeTask.checked ? "completed" : "pending"; //activeTask checked sa completed yap değilse pending yap.
    // let newsStatus = activeTask.checked == true ? "completed" : "pending"; farklı bir yazım tekniği.
    // let newsStatus = !activeTask.checked ? "completed" : "pending"; tam tersi yapmaz isteseydik.
    // let newsStatus = activeTask.checked == false ? "completed" : "pending"; //tam tersi için farklı bir yazım tekniği.
    for (const task of taskListArray){
        if (activeTask.id == task.id) {
            task.status = newsStatus;
            break;
            
        }
    }
    displayTasks(); //ekranı güncelle.
}

function editTask(clickedButton){ //clickedButton= edit butonu
    editedTaskId = clickedButton.id;
    let editedTask = clickedButton.previousElementSibling; //clickedButton un yani edit butonunun bir üst elenetine eriştik, yani input.
    let checked;
    for (const task of taskListArray){ 
        if(task.id==editedTaskId){ //sıradaki task in id si editedTaskId ye eşitse
            checked = task.status; //sıradaki taskin statusünü ver.
        };
    }

    if(!isEditMode){
        editedTask.removeAttribute("disabled"); //istenilen etribütün özelliğini kaldırır. Burada disabled özelliğini kaldırınca edit görev metinlerine imleç işlevsel hale geldi.
    if (checked == "completed") editedTask.classList.remove("checked"); //checked completed ise class ı sil, kırmızı şetir ve saru buton gidiyor. beyaz şetir ve mavi buton geliyor.
    clickedButton.classList.remove("btn-warning")// edit butonuna tıklandığında class ı olan btn-warning özelliği yani  sarı renk siliniyor.
    clickedButton.classList.add("btn-info"); // edit butonuna tıklandığında yeni class ekleniyor.
    
    // clickedButton.firstElementChild.classList.remove("fa-pen-to-square"); //clickedButton içerisindeki ilk element yani icon elementinin classLisrt ine eriştik ve remove yaptık sildik.
    // clickedButton.firstElementChild.classList.remove("fa-solid");
    // clickedButton.firstElementChild.classList.add("fa-circle-check");//clickedButton içerisindeki ilk element yani icon elementinin classLisrt ine eriştik ve add dedik yani yeni icon clası ekledik.
    // clickedButton.firstElementChild.classList.add("fa-regular");
    // editedTask.focus(); //görevlerden birinin edit butonuna tıklandığında imleç oraya komunlanacak.
    
    clickedButton.innerHTML='<i class="fa-solid fa-circle-check"></i>'; //edit butonuna tıkladığımızda rengi ve iconu değişiyor. /99 103 kodları ve arası tek satır yazımı.
    editedTask.focus();
    isEditMode=true;
        
    }else{ //düzenle butonuna tıklayınca icon mavi olacak ve işimiz bitince, mavi olana tıklayınca sarı olacak. 
        editedTask.setAttribute("disabled","disabled"); //ilk olan "disabled" = attribute adı, ikincisi=değeri.
        if(checked == "completed") editedTask.classList.add("checked"); //108. satır tersi.
        clickedButton.classList.remove("btn-info"); //btn-infoyu sil
        clickedButton.classList.add("btn-warning"); //btn-warning ekle
        clickedButton.innerHTML='<i class="fa-solid fa-pen-to-square"></i>';

        for (const task of taskListArray){ //Kayıt işlemi için yazıyoruz.
            if(editedTaskId==task.id){//güncelleme yaptığımız gçrevin id si o sırada kontrol edilen gçrevin id sine
                task.taskDescription=editedTask.value; //ilğili taskin description ında, kullanıcının giriş yaptığı editedTask in değerini taskDescription a ata.
                break;
            }
        }
        isEditMode = true;
        displayTasks();
    }    
}
displayTasks();

//007--19-11-2023 3. videoda kaldık.