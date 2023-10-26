// Selecionando elementos do DOM
const inputElement = document.querySelector('#cep')
const warningText = document.querySelector('.warning')
const btn = document.querySelector('button')

// Elementos onde os dados da API são inseridos
const card = document.querySelector('.card')
const cepNumber = document.querySelector('#cepNumber')
const logradouro = document.querySelector('#logradouro')
const uf = document.querySelector('#uf')
const localidade = document.querySelector('#localidade')
const bairro = document.querySelector('#bairro')

const getValue = () => {
    let cep = inputElement.value
    
    // Verificando se o cep digitado tem no máximo 8 dígitos
    if(cep.length > 8) {
        inputElement.style = "border: 1px solid red"
        warningText.style = "display: block; color: red;" 
        
    } else {
        inputElement.style = ""
        warningText.style = "" 

        // Chamando a API "ViaCep"
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)

                // Preenchendo a tela com os dados retornados
                cepNumber.textContent = `CEP: ${data.cep}`
                logradouro.textContent = `Logradouro: ${data.logradouro}`
                uf.textContent = `Estado: ${data.uf}`
                localidade.textContent = `Localidade: ${data.localidade}`
                bairro.textContent = `Bairro: ${data.bairro}`

                card.style = "display: block;"
            })
            .catch(error => {
                console.error('Ocorreu um erro na solicitação: ', error)
            })
    }
}

btn.addEventListener('click', getValue)
