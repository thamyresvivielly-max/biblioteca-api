const categoriaRepository = require('../repositories/CategoriaRepository');

class CategoriaService {

    async criar(dados) {
        return await categoriaRepository.criar(dados);
    }

    async listar() {
        return await categoriaRepository.listar();
    }

    async buscarPorId(id) {
        return await categoriaRepository.buscarPorId(id);
    }

    async atualizar(id, dados) {
        return await categoriaRepository.atualizar(id, dados);
    }

    async excluir(id) {
        return await categoriaRepository.excluir(id);
    }
}

module.exports = new CategoriaService();