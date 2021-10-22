function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var F_ano = window.document.getElementById('txtano')
    var res= window.document.querySelector('div#res')
    if(F_ano.value.length == 0 || F_ano.value > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(F_ano.value) 
        var genero =''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade > 0 && idade <=12){
                //kid
                img.setAttribute('src','homemcrianca.png')
            }else if(idade > 12 && idade <=29){
                //TEEN
               img.setAttribute('src', 'homemjovem.png')
            }else if(idade >29 && idade <= 59){
                //ADULT
                img.setAttribute('src','homemadulto.png')
            } else{
            //OLD
                img.setAttribute('src', 'homemidoso.png')

            } 
    }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade > 0 && idade <=12){
                //kid
                img.setAttribute('src','mulhercrianca.png')
            }else if(idade > 12 && idade <=29){
                //TEEN
               img.setAttribute('src', 'mulherjovem.png')
            }else if(idade >29 && idade <= 59){
                //ADULT
                img.setAttribute('src','mulheradulta.png')
            } else{
            //OLD
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
    }
        res.style.textAling ='center'
        res.innerHTML = `Detectamos o sexo ${genero} com ${idade} anos`
        res.appendChild(img)
    }



