const autorService = require('../services/AutorService');

class AutorController {

    async criar(req, res) {
        try {
            const autor = await autorService.criar(req.body);
            res.status(201).json(autor);
        } catch (error) {
            res.status(400).json({
                erro: error.message
            });
        }
    }

    async listar(req, res) {
        try {
            const autores = await autorService.listar();
            res.json(autores);
        } catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const autor = await autorService.buscarPorId(req.params.id);

            if (!autor) {
                return res.status(404).json({
                    erro: 'Autor não encontrado'
                });
            }

            res.json(autor);
        } catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    }

    async atualizar(req, res) {
        try {
            const autor = await autorService.atualizar(
                req.params.id,
                req.body
            );

            if (!autor) {
                return res.status(404).json({
                    erro: 'Autor não encontrado'
                });
            }

            res.json(autor);
        } catch (error) {
            res.status(400).json({
                erro: error.message
            });
        }
    }

    async excluir(req, res) {
        try {
            const excluido = await autorService.excluir(req.params.id);

            if (!excluido) {
                return res.status(404).json({
                    erro: 'Autor não encontrado'
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

module.exports = new AutorController();