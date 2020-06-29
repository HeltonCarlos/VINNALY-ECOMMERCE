function envia(){
    var name= document.querySelector('#nome')
    var mail= document.querySelector('#email')
    var text= document.querySelector('#text')
    var resp= document.querySelector('#resposta')

    var total=(name.value)

    if(name=='' &&  mail=='' &&  text==''){
        resp.innerHTML+=`Você esqueceu de preencher algum campo.`
    }
    
}