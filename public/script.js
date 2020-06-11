function onOff() {
    document
        .querySelector(".modal")
        .classList
        .toggle("esconder")

    document
        .querySelector("body")
        .classList
        .toggle("hidescroll")


    document
        .querySelector(".modal")
        .classList
        .toggle("addscroll")

}


// Validando o campodo formulário

function checkFields(event){
    
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ];

                
        const isEmpty = valuesToCheck.find(function(value) {

        const checkIfIsString = typeof event.target[value].value === "string";
        const checkIfIsEmpty = !event.target[value].value.trim();

        if(checkIfIsString && checkIfIsEmpty) {
            return true;
        }
       
    })

    
    if(isEmpty) {
        event.preventDefault();
        alert("Por favor, preenchatodos os campos");
    }   

        
}

