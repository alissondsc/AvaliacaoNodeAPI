const bancoDeDadosFilmes = [];
let idAtual = 1;
 
class Filme {
    constructor(titulo, classificacaoIndicativa, descricao, lancamento) {
        this.id = idAtual++;
        this.titulo = titulo;
        this.classificacaoIndicativa = classificacaoIndicativa;
        this.descricao = descricao;
        this.lancamento = lancamento; 
    }
 
    static salvar(filmeDados) {
        const novoFilme = new Filme(
            filmeDados.titulo,
            filmeDados.classificacaoIndicativa,
            filmeDados.descricao,
            filmeDados.lancamento
        );
        bancoDeDadosFilmes.push(novoFilme);
        return novoFilme;
    }
 
    static buscarTodos() {
        return bancoDeDadosFilmes;
    }
 
    static buscarPorId(id) {
        return bancoDeDadosFilmes.find(f => f.id === parseInt(id));
    }
 
    static atualizar(id, dadosNovos) {
        const filme = this.buscarPorId(id);
        if (!filme) return null;
 
        filme.titulo = dadosNovos.titulo ?? filme.titulo;
        filme.classificacaoIndicativa = dadosNovos.classificacaoIndicativa ?? filme.classificacaoIndicativa;
        filme.descricao = dadosNovos.descricao ?? filme.descricao;
        filme.lancamento = dadosNovos.lancamento ?? filme.lancamento;
 
        return filme;
    }
 
    static deletar(id) {
        const index = bancoDeDadosFilmes.findIndex(f => f.id === parseInt(id));
        if (index === -1) return false;
 
        bancoDeDadosFilmes.splice(index, 1);
        return true;
    }
}
 
export default Filme;
 