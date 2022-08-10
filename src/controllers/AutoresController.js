const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    // lista todos
    async index(req, res) {

        const autores = await prisma.autores.findMany();

        return res.json(autores);

    },

    // busca um único registro
    async findOne(req, res) {

        const autor = await prisma.autores.findOne({
            where: { id: parseInt(req.paramsid) },
        });

        return res.json(autor);
    },

    // insere na tabela
    async create(req, res) {

        const { nome } = req.body;

        const autor = await prisma.autores.create(
            { data: { nome: nome } }
        );

        return res.json(autor);
    },

    //atualizar um determinado registro
    async update(req, res) {

        const autor = await prisma.autores.findOne({
            where: {
                id: parseInt(req.params.id)
            },
        });

        if (!autor) {
            return res.json({
                'id': req.params.id,
                'status': 'Não existe'
            })
        }

        const { nome } = req.body;

        const updateAutor = await prisma.autores.update({
            where: { id: parseInt(req.params.id) },
            data: { nome: nome }
        });

        return res.json(updateAutor);
    },

    // exclui um determinado registro
    async delete(req, res) {

        const autor = await prisma.autores.findOne({
            where: {
                id: parseInt(req.params.id)
            },
        });

        if (!autor) {
            return res.json({
                'id': req.params.id,
                'status': 'Não existe'
            })
        }

        const deleteAutor = await prisma.autores.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });

        return res.json({
            'id': autor.id,
            'nome': autor.nome,
            'status': 'excluido'
        })

    }
}