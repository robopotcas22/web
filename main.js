"use strict"
const boton = document.querySelector(".boton")
const cargar = document.querySelector(".cargar")
let task = document.querySelector(".task")

// let request = indexedDB.open("==Almacen de Tareas==", 1)

// request.onupgradeneeded = function () {
//         const db = request.result;
//         db.createObjectStore("=Tareas=", {autoIncrement : true})
//         }

// const añadir = objeto =>{
//     const db = request.result
//     const editdb = db.transaction("=Tareas=", "readwrite")
//     const objstore = editdb.objectStore("=Tareas=")
//     objstore.add(objeto)
//     console.log(db.index)
// }




boton.addEventListener("click", function () {

    let toDo = document.createElement("li")
    let form = document.createElement("form")
    let comment1 = document.createElement("input")
    let comment2 = document.createElement("input")
    let send  = document.createElement("input")
    let sing = document.createElement("p")
    const emoji  = document.createElement("input")
    toDo.appendChild(sing)
    comment1.className = "input1"
    comment2.className = "input2"
    send.className = "send"
    emoji.className = "emoji"
    send.setAttribute("type", "Button")
    emoji.setAttribute("type", "Button")
    comment1.setAttribute("placeholder", "Title")
    comment2.setAttribute("placeholder", "Description")
    comment1.setAttribute("required", "")
    send.setAttribute("value", "Send")
    emoji.setAttribute("value", "Emoji")
    toDo.appendChild(form)
    form.appendChild(comment1)
    form.appendChild(comment2)
    form.appendChild(send)
    toDo.appendChild(emoji)
    toDo.className = "toDo"
    form.classList.add("form")
    task.appendChild(toDo)
    //emojis
    let div = document.createElement("div")
    toDo.appendChild(div)
    div.className = "div"
    div.style.display = "none"
    let span1 = document.createElement("span")
    let span2 = document.createElement("span")
    let span3 = document.createElement("span")
    let span4 = document.createElement("span")
    let span5 = document.createElement("span")
    let span6 = document.createElement("span")
    let span7 = document.createElement("span")
    let span8 = document.createElement("span")
    let span9 = document.createElement("span")
    div.appendChild(span1)
    div.appendChild(span2)
    div.appendChild(span3)
    div.appendChild(span4)
    div.appendChild(span5)
    div.appendChild(span6)
    div.appendChild(span7)
    div.appendChild(span8)
    div.appendChild(span9)
    span1.textContent = ("🎯")
    span2.textContent = ("🎉")
    span3.textContent = ("😃")
    span4.textContent = ("💰")
    span5.textContent = ("📴")
    span6.textContent = ("🏋️‍♂️")
    span7.textContent = ("💼")
    span8.textContent = ("💻")
    span9.textContent=  ("📖")
    
    
    emoji.addEventListener("click", function () {
        if (div.style.display == "none"){ div.style.display = "flex"}
        else if (div.style.display == "flex"){div.style.display = "none"}
})
    send.addEventListener("click", function enviar () {
        toDo.removeChild(div)
        toDo.removeChild(emoji)
        let h2 = document.createElement("h2")
        h2.textContent += comment1.value;
        h2.className = "title"
        form.replaceChild(h2, comment1)
        let p = document.createElement("p")
        p.textContent += comment2.value
        p.className = "description"
        form.replaceChild(p, comment2)
        form.removeChild(send)
        const borrar = document.createElement("input")
        borrar.setAttribute("type", "button")
        borrar.setAttribute("value", "Hecho")
        borrar.className = ("borrar")
        const edit = document.createElement("input")
        edit.setAttribute("type", "button")
        edit.setAttribute("value", "Editar")
        edit.className = "modify"
        form.appendChild(edit)
        form.appendChild(borrar)
        if (h2.textContent == "" || h2.textContent == " "){
            alert("Es necesario que ponga un titulo a la tarea")
            task.removeChild(toDo)
        }else{
            localStorage.setItem(h2.textContent, toDo.innerHTML)
        }
        //====Editar====//
        edit.addEventListener("click", function(){
            h2.setAttribute("contentEditable", "true")
            p.setAttribute("contentEditable", "true")
            const save = document.createElement("input")
            save.setAttribute("value", "Guardar")
            save.setAttribute("type", "button")
            save.className = "save"
            form.replaceChild(save,edit )
            localStorage.removeItem(h2.textContent)

            //====evento de guardar====//
            save.addEventListener("click", function(){
            h2.setAttribute("contentEditable", "false")
            p.setAttribute("contentEditable", "false")
            form.replaceChild(edit,save )
            localStorage.setItem(h2.textContent, toDo.innerHTML)

            })
        })

        
        

        borrar.addEventListener("click", function(){
            h2.style.textDecoration = "line-through"
            p.style.textDecoration = "line-through"
            h2.style.color = "#212121"
            p.style.color = "#d3d3d3"
            toDo.style.backgroundColor = "lightgreen"
            setTimeout(function(){
                task.removeChild(toDo)
            }, 2000)
            localStorage.removeItem(h2.textContent)
        })
        
    })
    span1.addEventListener("click", function(){ sing.textContent = span1.textContent})
    span2.addEventListener("click", function(){ sing.textContent = span2.textContent})
    span3.addEventListener("click", function(){ sing.textContent = span3.textContent})
    span4.addEventListener("click", function(){ sing.textContent = span4.textContent})
    span5.addEventListener("click", function(){ sing.textContent = span5.textContent})
    span6.addEventListener("click", function(){ sing.textContent = span6.textContent})
    span7.addEventListener("click", function(){ sing.textContent = span7.textContent})
    span8.addEventListener("click", function(){ sing.textContent = span8.textContent})
    span9.addEventListener("click", function(){ sing.textContent = span9.textContent})

    
    
})
if (localStorage.key(0) != null){
    
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            const get = localStorage.getItem(clave);
            const toDo = document.createElement("li");
            toDo.className = "toDo";
            toDo.innerHTML = get;
            task.appendChild(toDo);
    
            const borrar = toDo.querySelector(".borrar"); // Seleccionar el botón "borrar" específico para esta tarea
    
            borrar.addEventListener("click", function () {
                let h2 = toDo.querySelector(".title");
                let p = toDo.querySelector(".description");
                h2.style.textDecoration = "line-through";
                p.style.textDecoration = "line-through";
                toDo.style.backgroundColor = "lightgreen"
                h2.style.color = "#212121";
                p.style.color = "#d3d3d3";
                setTimeout(function() {
                    task.removeChild(toDo);
                }, 2000)
                localStorage.removeItem(h2.textContent)
            })
            const edit = document.querySelector(".modify")
            const form = document.querySelector(".form")
            edit.addEventListener("click", function(){
                let h2 = toDo.querySelector(".title");
                let p = toDo.querySelector(".description");
                h2.setAttribute("contentEditable", "true")
                p.setAttribute("contentEditable", "true")
                const save = document.createElement("input")
                save.setAttribute("value", "Guardar")
                save.setAttribute("type", "button")
                save.className = "save"
                form.replaceChild(save,edit )
                localStorage.removeItem(h2.textContent)
    
                //====evento de guardar====//
                save.addEventListener("click", function(){
                h2.setAttribute("contentEditable", "false")
                p.setAttribute("contentEditable", "false")
                form.replaceChild(edit,save )
                localStorage.setItem(h2.textContent, toDo.innerHTML)
    
                })
            })
        }}
