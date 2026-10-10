const { Livro, Autor, Categoria } = require('../models');
const { Op } = require('sequelize');

class LivroRepository {

    async criar(dados) {
        return await Livro.create(dados);
    }

    async listar(filtros = {}) {
        const where = {};

        if (filtros.titulo) {
            where.titulo = {
                [Op.like]: `%${filtros.titulo}%`
            };
        }

        if (filtros.ano) {
            where.ano = filtros.ano;
        }

        if (filtros.disponivel !== undefined) {
            where.disponivel = filtros.disponivel;
        }

        const page = filtros.page || 1;
        const limit = filtros.limit || 10;
        const offset = (page - 1) * limit;

        const resultado = await Livro.findAndCountAll({
            where,
            include: [
                Autor,
                Categoria
            ],
            limit,
            offset
        });

        return {
            data: resultado.rows,
            pagination: {
                page,
                limit,
                total: resultado.count,
                totalPages: Math.ceil(resultado.count / limit)
            }
        };
    }

    async buscarPorId(id) {
        return await Livro.findByPk(id, {
            include: [
                Autor,
                Categoria
            ]
        });
    }

    async adicionarCategoria(livroId, categoriaId) {
        const livro = await Livro.findByPk(livroId);
        const categoria = await Categoria.findByPk(categoriaId);

        if (!livro || !categoria) {
            return false;
        }

        await livro.addCategoria(categoria);

        return true;
    }

    async atualizar(id, dados) {
        const livro = await Livro.findByPk(id);

        if (!livro) {
            return null;
        }

        await livro.update(dados);

        return livro;
    }

    async excluir(id) {
        const livro = await Livro.findByPk(id);

        if (!livro) {
            return false;
        }

        await livro.destroy();

        return true;
    }
}

module.exports = new LivroRepository();