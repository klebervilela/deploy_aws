import express from "express"

const app = express()

let resultado = []

function checaPalindromo(texto) {
    
    try {
        
        if(texto.length == 0) {
            throw new Error('texto vazio')
        }

        limpaArray()
        resultado.pop()
        texto = formataTexto(texto)
        let testaPalindromo = (ePalindromo(texto));
        resultado.push(testaPalindromo)
        let caracteres = obtemCaracteres(texto)
        let ocorrenciasCaractere = contaOcorrencias(caracteres, texto);
        let arrayCaracteres = obtemArrayCaracteres(caracteres,ocorrenciasCaractere)
        resultado.push(arrayCaracteres)
        console.log(resultado)
    
    } catch (ex) {
        console.error('Erro: ', ex.message)
    }
}

function obtemArrayCaracteres(arrCaracreteres, arrOcorrenciasCaracteres) {
    
    //Unifica o array que contem os caracteres com o array que registra as ocorrências em uma variável string
    let textoFinal = `${arrCaracreteres[0]} : ${arrOcorrenciasCaracteres[0]}`
    for(let i = 1; i < arrCaracreteres.length; i++) {
        textoFinal += `, ${arrCaracreteres[i]}: ${arrOcorrenciasCaracteres[i]}`
    }
    return textoFinal
}

function limpaArray() {
    resultado.pop()
    for (let i = 0; i < resultado.length; i++) {
        resultado.pop()
    }
}

function formataTexto(texto) {

    //Excluli espaços em branco no início, meio e fim do texto, além de converter todos os caracteres para minúsculo
    for(let i = 0; i < texto.length; i++) {
        texto = texto.replace(' ','')
    }
    texto = texto.toLowerCase().trim();
    return texto
}

function ePalindromo(texto) {

    let textoOriginal = texto
    let palindromo = ''

    //cria uma variável com o texto original invertido e compara seus valores. Se forem iguais, o texto é palíndromo
    for(let i = textoOriginal.length - 1; i >= 0; i--) {
        palindromo += textoOriginal[i]
     }
     return textoOriginal == palindromo
}

function obtemCaracteres(texto) {
    
    const caracteres = []
    
    //Percorre o texto e sempre que é encontrado um caractere novo, o caractere é adicionado ao array caracteres
    for(let i = 0; i < texto.length; i++) {
        let caractere = texto[i];
        let caractereJaEncontrado
        caractereJaEncontrado = caracteres.indexOf(caractere)
        if (caractereJaEncontrado == -1) {
            caracteres.push(caractere);
        }
    }
    return caracteres
}

function contaOcorrencias(arrCaracteres, texto) {

    //Verifica quantas vezes cada caractere obtido pela função obtemCaractere repete no texto original.
    //O número de ocorrências é adicionado ao arrOcorrencias no mesmo índice do array de caracteres.
    const arrOcorrencias = []
    for(let i = 0; i < arrCaracteres.length; i++) {
        let ocorrencias = 0
        for(let j = 0; j < texto.length; j++) {
            if(arrCaracteres[i] == texto[j]) {
                ocorrencias++
            }
        }
    arrOcorrencias.push(ocorrencias)
    }
    return arrOcorrencias
}

app.get("/:texto", (req, res) => {
    const index = checaPalindromo(req.params.texto)
    res.status(200).json(resultado)
})

export default app