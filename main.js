'use strict'

/*propriedade async = permite que a função seja executada de forma assincrona */
const pesquisarCEP = async (cep) =>{
    
    const url = `https://viacep.com.br/ws/${cep}/json/`

    //fetch = Executa a request
    const response = await fetch(url)

     //await = faz com que a aplicação não passe para a próxima linha antes que a anterior retorne uma resposta
    const data = await response.json()
    
    console.log(data.bairro)    
}

pesquisarCEP('06626190')
