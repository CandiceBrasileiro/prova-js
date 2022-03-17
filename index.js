function submeter() {
    var codigo = (document.getElementById("codigo").value);
    var salario = parseFloat(document.getElementById("salario").value);
    
      if (codigo == 1) {
        var aumento = salario * 0.5
        var novoSalario = salario + aumento
        var Cargo = "Escriturário"
        document.getElementById("mensagem").innerHTML = "Cargo: " +Cargo+ "<br> Salario: " +salario+ "<br> Aumento: " +aumento+ "<br> Novo Salário:" +novoSalario;
    } 
    
      else if (codigo == 2){
        var aumento = salario * 0.35
        var novoSalario = salario + aumento
        var Cargo = "Secretário"
        document.getElementById("mensagem").innerHTML = "Cargo: " + Cargo + "<br> Salario: " + salario + "<br> Aumento: " + aumento + "<br> Novo Salário:" + novoSalario;
        }
    
        else if (codigo == 3){
        var aumento = salario * 0.20
        var novoSalario = salario + aumento
        var Cargo = "Caixa"
        document.getElementById("mensagem").innerHTML = "Cargo: " + Cargo + "<br> Salario: " + salario + "<br> Aumento: " + aumento + "<br> Novo Salário:" + novoSalario;
        }
    
        else if (codigo == 4){
        var aumento = salario * 0.10
        var novoSalario = salario + aumento
        var Cargo = "Gerente"
        document.getElementById("mensagem").innerHTML = "Cargo: " + Cargo + "<br> Salario: " + salario + "<br> Aumento: " + aumento + "<br> Novo Salário:" + novoSalario;
        }
    
        else if (codigo == 5){
          var Cargo = "Diretor"
           document.getElementById("mensagem").innerHTML = "Cargo: " + Cargo + "<br> Salario: " + salario + "<br> Você não tem aumento";
        }
        
        else{
          alert("Código não registrado no Sistema");
        }
        }


    
   