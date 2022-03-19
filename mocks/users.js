const users = {
    'andre': {
        nome: 'André Masson',
        cpf: '123.456.789-00',
        email: 'andre@email.com',
        telefone: '(11) 91234-5678',
        dtNasc: '01/10/1980',
        sexo: 'M',
        planoDeSaude: {
            cobertura: 'quarto compartilhado',
            matricula: '9871234'
        },
        flagDefFisicaLocomocao: false
    },
    'padrao': {
        nome: 'Usuário Mockado Padrão',
        cpf: '987.654.321-11',
        email: 'usuario@padrao.com',
        telefone: '(11) 98765-1234',
        dtNasc: '22/12/1992',
        sexo: 'F',
        planoDeSaude: null,
        flagDefFisicaLocomocao: true
    }
};

module.exports = users;