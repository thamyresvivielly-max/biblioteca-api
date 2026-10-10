const categoriaService = require('../services/CategoriaService');

class CategoriaController {

    async criar(req, res) {
        try {
            const categoria = await categoriaService.criar(req.body);
            res.status(201).json(categoria);
        } catch (error) {
            res.status(400).json({
                erro: error.message
            });
        }
    }

    async listar(req, res) {
        try {
            const categorias = await categoriaService.listar();
            res.json(categorias);
        } catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const categoria = await categoriaService.buscarPorId(req.params.id);

            if (!categoria) {
                return res.status(404).json({
                    erro: 'Categoria não encontrada'
                });
            }

            res.json(categoria);
        } catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    }

    async atualizar(req, res) {
        try {
            const categoria = await categoriaService.atualizar(
                req.params.id,
                req.body
            );

            if (!categoria) {
                return res.status(404).json({
                    erro: 'Categoria não encontrada'
                });
            }

            res.json(categoria);
        } catch (error) {
            res.status(400).json({
                erro: error.message
            });
        }
    }

    async excluir(req, res) {
        try {
            const excluido = await categoriaService.excluir(req.params.id);

            if (!excluido) {
                return res.status(404).json({
                    erro: 'Categoria não encontrada'
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

module.exports = new CategoriaController();