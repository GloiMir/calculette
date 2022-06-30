let on = false;
let element = document.getElementById("element");
let bouton = document.getElementsByTagName("input");

bouton[0].addEventListener("click", (e) =>{
    if(e.target['value'] == "OFF"){
        on = true;
        e.target['value'] = "ON";
        element.value = "0" ;
        e.target.style.backgroundColor = "green"
        
    }else{
        on = false;
        e.target['value'] = "OFF";
        element.value = "" 
        e.target.style.backgroundColor = "red"
    }
})

bouton[1].addEventListener("click", (e) =>{
    if(on){
        element.value ="0";
    }
})
bouton[2].addEventListener("click", (e) =>{
    if(on){
        let invTexte = element.value.split('').reverse().join('')
        element.value = (invTexte.substring(1,invTexte.length)).split('').reverse().join('')
    }    
})

for(i=3;i<bouton.length-1;i++){
    bouton[i].addEventListener("click", (e)=>{
        if(on) element.value += e.target['value']
    })    
}

const calcul = (op,n1,n2) =>{
    if(op == "+") return n1+n2;
    if(op == "-") return n1-n2;
    if(op == "*") return n1*n2;
    if(op == "/") return n1/n2;
    if(op == "%") return n1%n2;
}

bouton[bouton.length-1].addEventListener("click", ()=>{
    let texte = element.value;
    let nombreOperateur = 0;
    let indexOp = [];
    let operateur = [];  
    let valeur=0;

    for(i=0;i<texte.length;i++) {
        if(texte[i]=="+"|texte[i]=="-"|texte[i]=="*"|texte[i]=="/"|texte[i]=="%"){
            nombreOperateur +=1;
            indexOp.push(i);
            operateur.push(texte[i]);
        } 
        else continue;
    }
    if(nombreOperateur == 1){      
        let nombre1="",nombre2="";  
        for(i=0;i<indexOp[0];i++) nombre1 +=texte[i];
        for(i=indexOp[0]+1;i<texte.length;i++) nombre2 += texte[i];
        valeur = calcul(operateur[0],parseFloat(nombre1),parseFloat(nombre2));
        element.value += "="+valeur 
    }
    if(nombreOperateur == 2){   
        let nombre1 ="",nombre2="",nombre3="";     
        for(i=0;i<indexOp[0];i++) nombre1 +=texte[i];
        for(i=indexOp[0]+1;i<indexOp[1];i++) nombre2 += texte[i];
        for(i=indexOp[1]+1;i<texte.length;i++) nombre3 += texte[i];
        valeur = calcul(operateur[0],parseFloat(nombre1),parseFloat(nombre2));
        valeur = calcul(operateur[1],valeur,parseFloat(nombre3));
        element.value += "="+valeur 
    }
    if(nombreOperateur == 3){   
        let nombre1 ="",nombre2="",nombre3="",nombre4="";     
        for(i=0;i<indexOp[0];i++) nombre1 +=texte[i];
        for(i=indexOp[0]+1;i<indexOp[1];i++) nombre2 += texte[i];
        for(i=indexOp[1]+1;i<indexOp[2];i++) nombre3 += texte[i];
        for(i=indexOp[2]+1;i<texte.length;i++) nombre4 += texte[i];
        valeur = calcul(operateur[0],parseFloat(nombre1),parseFloat(nombre2));
        valeur = calcul(operateur[1],valeur,parseFloat(nombre3));
        valeur = calcul(operateur[2],valeur,parseFloat(nombre4));
        element.value += "="+valeur 
    }
    if(nombreOperateur == 4){   
        let nombre1 ="",nombre2="",nombre3="",nombre4="",nombre5="";     
        for(i=0;i<indexOp[0];i++) nombre1 +=texte[i];
        for(i=indexOp[0]+1;i<indexOp[1];i++) nombre2 += texte[i];
        for(i=indexOp[1]+1;i<indexOp[2];i++) nombre3 += texte[i];
        for(i=indexOp[2]+1;i<indexOp[3];i++) nombre4 += texte[i]; 
        for(i=indexOp[3]+1;i<texte.length;i++) nombre5 += texte[i];
        valeur = calcul(operateur[0],parseFloat(nombre1),parseFloat(nombre2));
        valeur = calcul(operateur[1],valeur,parseFloat(nombre3));
        valeur = calcul(operateur[2],valeur,parseFloat(nombre4));
        valeur = calcul(operateur[3],valeur,parseFloat(nombre5));
        element.value += "="+valeur 
    }
    if(nombreOperateur == 5){   
        let nombre1 ="",nombre2="",nombre3="",nombre4="",nombre5="",nombre6="";     
        for(i=0;i<indexOp[0];i++) nombre1 +=texte[i];
        for(i=indexOp[0]+1;i<indexOp[1];i++) nombre2 += texte[i];
        for(i=indexOp[1]+1;i<indexOp[2];i++) nombre3 += texte[i];
        for(i=indexOp[2]+1;i<indexOp[3];i++) nombre4 += texte[i]; 
        for(i=indexOp[3]+1;i<indexOp[4];i++) nombre5 += texte[i]; 
        for(i=indexOp[4]+1;i<texte.length;i++) nombre6 += texte[i];
        valeur = calcul(operateur[0],parseFloat(nombre1),parseFloat(nombre2));
        valeur = calcul(operateur[1],valeur,parseFloat(nombre3));
        valeur = calcul(operateur[2],valeur,parseFloat(nombre4));
        valeur = calcul(operateur[3],valeur,parseFloat(nombre5));
        valeur = calcul(operateur[4],valeur,parseFloat(nombre6));
        element.value += "="+valeur 
    }
})