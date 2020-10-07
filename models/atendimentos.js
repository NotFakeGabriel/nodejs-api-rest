const conexao = require('../infra/conexao')

class Atendimento {
    adiciona(atendimento) {
        const sql = `INSERT INTO atendimentos SET ?`

        conexao.query(sql, atendimento, (erro, resul) => {
            if(erro){
                console.log(erro)
            }else{
                console.log(resul)
            }
        })
    }
}

module.exports = new Atendimento