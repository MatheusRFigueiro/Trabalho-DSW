function validar(){
    var v1 = document.getElementById("txtName");
    var nome = v1.value;
    var v2 = document.getElementById("txtValor");
    var valor = v2.value;
    var v3 = document.getElementById("txtQuantidade");
    var quant = v3.value;
    var v4 = document.getElementById("txtData");
    var data = v4.value;
    var v5 = document.getElementById("lista");
    var lista = v5.value;
    var v6 = document.getElementById("foto");
   
    if( nome.length<=1 ){
        alert("Campo 'Nome' Inválido");
        return false;
    }else if(valor.length<=0 ){
        alert("Campo 'Preço' Inválido");
        return false;
    }else if(quant.length<=0 ){
        alert("Campo 'Quantidade' Inválido");
        return false;
    }else if(data.length<=0 ){
        alert("Campo 'Data de Validade' Inválido");
        return false;
    }else if(lista==0){
        alert("Selecione a categoria");
        return false;
    }else if(foto==0){
        alert("Insira uma imagem");
        return false;
    }else{
        return true;
    }
}

