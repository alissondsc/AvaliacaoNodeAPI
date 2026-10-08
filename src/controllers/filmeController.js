import filmeService from "../services/filmeService.js";
 
class FilmeController {
  
    criar(req, res) {
        try {
            const novoFilme = filmeService.criarFilme(req.body);
            res.status(201).json(novoFilme);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
 

    listar(req, res) {
        const filmes = filmeService.listarFilmes();
        res.status(200).json(filmes);
    }
 
  
    buscarPorId(req, res) {
        try {
            const filme = filmeService.obterFilmePorId(req.params.id);
            res.status(200).json(filme);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }
 
  
    atualizar(req, res) {
        try {
            const filmeAtualizado = filmeService.atualizarFilme(req.params.id, req.body);
            res.status(200).json(filmeAtualizado);
        } catch (error) {
            const status = error.message.includes("encontrado") ? 404 : 400;
            res.status(status).json({ erro: error.message });
        }
    }
 

    deletar(req, res) {
        try {
            filmeService.removerFilme(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }
}
 
export default new FilmeController();
 