let media = 7.6, situacao

if(media >= 6){
    situacao = 'APROVADO'
}
else{
    situacao = 'Reprovado'
}

console.log('Situação do aluno com média', media, 'é', situacao)

media = 5.1

/*
    Decidindo a situação do aluno usando operador ternário
*/
situacao = media >= 6 ? 'APROVADO' : 'Reprovado'

console.log('Situação do aluno com média', media, 'é', situacao)

/******************************************** 14/08/25 */

let user = 'guess', msg

//Decidindo se o usuario pode entrar, usando if..else
/*
    Quando há apenas uma linha apos um if, um while, etc., podemos 
    omitir as chaves
*/
if(user === 'admin') msg = 'Bem-vindo!'
else msg = 'Acesso negado'

console.log(user, msg)

//Tomando a mesma decisão, mas usando o operador ternario
msg = user === 'admin' ? 'Bem-vindo!' : 'Acesso negado'

console.log(user, msg)