const livroService = require('../services/LivroService');

class LivroController {

    async criar(req, res) {
        try {
            const livro = await livroService.criar(req.body);

            res.status(201).json(livro);
        } catch (error) {
            res.status(400).json({
                erro: error.message
            });
        }
    }

    async listar(req, res) {
        try {
            const filtros = {
                titulo: req.query.titulo,

                ano: req.query.ano
                    ? Number(req.query.ano)
                    : undefined,

                disponivel: req.query.disponivel !== undefined
                    ? req.query.disponivel === 'true'
                    : undefined,

                page: req.query.page
                    ? Number(req.query.page)
                    : 1,

                limit: req.query.limit
                    ? Number(req.query.limit)
                    : 10
            };

            const livros = await livroService.listar(filtros);

            res.json(livros);
        } catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const livro = await livroService.buscarPorId(req.params.id);

            if (!livro) {
                return res.status(404).json({
                    erro: 'Livro não encontrado'
                });
            }

            res.json(livro);
        } catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    }

    async adicionarCategoria(req, res) {
        try {
            const resultado = await livroService.adicionarCategoria(
                req.params.id,
                req.body.categoriaId
            );

            if (!resultado) {
                return res.status(404).json({
                    erro: 'Livro ou categoria não encontrado'
                });
            }

            res.json({
                mensagem: 'Categoria adicionada ao livro com sucesso'
            });
        } catch (error) {
            res.status(400).json({
                erro: error.message
            });
        }
    }

    async atualizar(req, res) {
        try {
            const livro = await livroService.atualizar(
                req.params.id,
                req.body
            );

            if (!livro) {
                return res.status(404).json({
                    erro: 'Livro não encontrado'
                });
            }

            res.json(livro);
        } catch (error) {
            res.status(400).json({
                erro: error.message
            });
        }
    }

    async excluir(req, res) {
        try {
            const excluido = await livroService.excluir(req.params.id);

            if (!excluido) {
                return res.status(404).json({
                    erro: 'Livro não encontrado'
                });
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    }
}

module.exports = new LivroController();