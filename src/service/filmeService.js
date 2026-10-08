import Filme from "../models/filmeModel.js";
 
class FilmeService {
    criarFilme(dados) {
        if (!dados.titulo || !dados.lancamento) {
            throw new Error("Título e data de lançamento são obrigatórios.");
        }
        return Filme.salvar(dados);
    }
 
    listarFilmes() {
        return Filme.buscarTodos();
    }
 
    obterFilmePorId(id) {
        const filme = Filme.buscarPorId(id);
        if (!filme) throw new Error("Filme não encontrado.");
        return filme;
    }
 
    atualizarFilme(id, dados) {
        const filmeAtualizado = Filme.atualizar(id, dados);
        if (!filmeAtualizado) throw new Error("Filme não encontrado para atualização.");
        return filmeAtualizado;
    }
 
    removerFilme(id) {
        const deletado = Filme.deletar(id);
        if (!deletado) throw new Error("Filme não encontrado para exclusão.");
        return true;
    }
}
 
export default new FilmeService();
 