const livroRepository = require('../repositories/LivroRepository');

class LivroService {

    async criar(dados) {
        return await livroRepository.criar(dados);
    }

    async listar(filtros) {
        return await livroRepository.listar(filtros);
    }

    async buscarPorId(id) {
        return await livroRepository.buscarPorId(id);
    }

    async adicionarCategoria(livroId, categoriaId) {
        return await livroRepository.adicionarCategoria(
            livroId,
            categoriaId
        );
    }

    async atualizar(id, dados) {
        return await livroRepository.atualizar(id, dados);
    }

    async excluir(id) {
        return await livroRepository.excluir(id);
    }
}

module.exports = new LivroService();