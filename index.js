//funçao de subir o servidor
const customExpress = require('./config/customExpress') 
const conexao = require('./infra/conexao')
const Table = require('./infra/tables')

conexao.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        Table.init(conexao)
        
        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))

    }
})

