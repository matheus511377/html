function Limpar() {
    // document.getElementById("nome2").setAttribute('value','My default value');
    oFormObject = document.forms['meu_form2'];
    oFormObject.elements["nome2"].value = 'a';
    oFormObject.elements["email2"].value = '';
    oFormObject.elements["senha2"].value = '';
    oFormObject.elements["sexo2"].value = '';
    oFormObject.elements["telefone2"].value = '';
    oFormObject.elements["celular2"].value = '';
    oFormObject.elements["fumante2"].value = '';
    oFormObject.elements["municipio2"].value = '';
    oFormObject.elements["data2"].value = '';
    
  }
  function Enviar() {
    // document.getElementById("nome2").setAttribute('value','My default value');
    oFormObject = document.forms['meu_form'];
    oFormObject2 = document.forms['meu_form2'];
    
    oFormObject2.elements["nome2"].value =  oFormObject.elements["nome"].value ;
    oFormObject2.elements["email2"].value = oFormObject.elements["email"].value ;
    oFormObject2.elements["senha2"].value = oFormObject.elements["senha"].value ;
    oFormObject2.elements["sexo2"].value = oFormObject.elements["sexo"].value ;
    oFormObject2.elements["telefone2"].value = oFormObject.elements["telefone"].value ;
    oFormObject2.elements["celular2"].value = oFormObject.elements["celular"].value ;
    oFormObject2.elements["fumante2"].value = oFormObject.elements["fumante"].value ;
    oFormObject2.elements["municipio2"].value = oFormObject.elements["municipio"].value ;
    
    date = new Date($('#data').val())
    
    
    oFormObject2.elements["data2"].value = date.getDate();
    
    
  }
  function Cancelar() {
    // document.getElementById("nome2").setAttribute('value','My default value');
    oFormObject = document.forms['meu_form2'];
    oFormObject.elements["nome"].value = 'a';
    oFormObject.elements["email"].value = '';
    oFormObject.elements["senha"].value = '';
    oFormObject.elements["sexo"].value = '';
    oFormObject.elements["telefone"].value = '';
    oFormObject.elements["celular"].value = '';
    oFormObject.elements["fumante"].value = '';
    oFormObject.elements["municipio"].value = '';
    oFormObject.elements["data"].value = '';
    
  }