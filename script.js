document.getElementById("open").addEventListener("click", ()=>{
    Open();
});

let Open = function (){
    this.div = document.createElement("div");
    this.div.id = "container";
    document.body.append(this.div)

    this.modal = document.createElement("div");
    this.modal.id = "modal";
    this.div.append(this.modal);

    this.text = document.createElement("span");
    this.text.id = "titre";
    this.text.innerHTML = "Modal window";
    this.modal.append(this.text);

    this.quit = document.createElement("span");
    this.quit.id = "quit";
    this.quit.innerHTML = "<i class=\"fas fa-times\"></i>";
    this.modal.append(this.quit);

    this.text2 = document.createElement("p");
    this.text2.id = "lorem";
    this.text2.innerHTML = "Loremipsum dolor si amet, ...";
    this.modal.append(this.text2);

    this.check = document.createElement("input");
    this.check.type = "checkbox";
    this.check.id = "agree";
    this.check.value = "test";
    this.modal.append(this.check);

    this.label = document.createElement("label");
    this.label.for = "agree";
    this.label.id = "text";
    this.label.innerHTML = "Agree our terms & conditions <br>";
    this.modal.append(this.label);


    this.ok = document.createElement("button");
    this.ok.id = "ok";
    this.ok.innerHTML = "OK";
    this.modal.append(this.ok);

    this.cancel = document.createElement("span");
    this.cancel.id = "cancel";
    this.cancel.innerHTML = "cancel";
    this.modal.append(this.cancel);

    document.getElementById("quit").addEventListener("click", ()=>{
        this.div.remove()
    })

    document.getElementById("cancel").addEventListener("click", ()=>{
        this.div.remove()
    })

    document.getElementById("ok").addEventListener("click", ()=>{
        this.div.remove()
    })
};



