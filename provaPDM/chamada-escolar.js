// Função que lista os alunos, retornando seu nome e o RA
export function listaRA(alunos){
    for(let i = 0; i < alunos.length; i++){
        console.log("Nome: " + alunos[i].nome)
        console.log("RA: " + alunos[i].numeroChamada)
        console.log("---------------------------------------")
    }
}

// Função que retorna um aluno de RA específico
export function buscarAluno(alunos, alunoRA){
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].numeroChamada === alunoRA){ // Não usar inclues, burro
            console.log("Aluno de RA '" + alunoRA +"' foi encontrado!")
            console.log(alunos[i])
        }
    }
    
    // Não consegui implementar a contradição
    // console.log("O aluno com este codigo não foi encontrado.")
    // console.log("Tente novamente")
}

//Função que verifica se o aluno foi aprovado
export function verifyALunoAprovado(aluno){
    for(let i = 0; i < aluno.length; i++){
        for(let j = 0; j < aluno[i].materias.length; j++){
            if(aluno[i].materias[j].nota >= 6 || aluno[i].materias[j].presenca >= 75){
                console.log("O aluno " + aluno[i].nome + " foi aprovado na materia de " + aluno[i].materias[j].nome)
                console.log("---------------------------------------------------------------------------------------")
            }
        }
    }
}

//Função que verifica se o aluno não foi aprovado
export function verifyALunoReprovado(aluno){
    for(let i = 0; i < aluno.length; i++){
        for(let j = 0; j < aluno[i].materias.length; j++){
            if(aluno[i].materias[j].nota < 6 || aluno[i].materias[j].presenca < 75){
                console.log("O aluno " + aluno[i].nome +" não foi aprovado na materia de " + aluno[i].materias[j].nome)
                console.log("---------------------------------------------------------------------------------------")
            }
        }
    }
}