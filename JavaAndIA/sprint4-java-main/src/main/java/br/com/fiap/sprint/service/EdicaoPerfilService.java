package br.com.fiap.sprint.service;

import br.com.fiap.sprint.controller.dto.EdicaoPerfilDTO;
import br.com.fiap.sprint.model.EdicaoPerfil;
import br.com.fiap.sprint.repository.EdicaoPerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EdicaoPerfilService {

    @Autowired
    private EdicaoPerfilRepository edicaoPerfilRepository;

    // Realizando a edicao do perfil do usuario

    public EdicaoPerfil realizarEdicaoPerfil(EdicaoPerfilDTO edicaoPerfilDTO) {
        EdicaoPerfil edicaoPerfil = new EdicaoPerfil();
        edicaoPerfil.setNome(edicaoPerfilDTO.getNome());
        edicaoPerfil.setSobrenome(edicaoPerfilDTO.getSobrenome());
        edicaoPerfil.setEmail(edicaoPerfilDTO.getEmail());
        edicaoPerfil.setSenha(edicaoPerfilDTO.getSenha());
        return edicaoPerfilRepository.save(edicaoPerfil);
    }

    // Editando o cadastro dos usuarios

    public EdicaoPerfil editarCadastroPerfil(Long id, EdicaoPerfilDTO novoCadastroPerfil) {
        Optional<EdicaoPerfil> cadastroPerfilExistente = edicaoPerfilRepository.findById(id);

        if(cadastroPerfilExistente.isPresent()) {
            EdicaoPerfil cadastroPerfilAtualizado = cadastroPerfilExistente.get();
            cadastroPerfilAtualizado.setNome(novoCadastroPerfil.getNome());
            cadastroPerfilAtualizado.setSobrenome((novoCadastroPerfil.getSobrenome()));
            cadastroPerfilAtualizado.setEmail(novoCadastroPerfil.getEmail());
            cadastroPerfilAtualizado.setSenha(novoCadastroPerfil.getSenha());
            return edicaoPerfilRepository.save(cadastroPerfilAtualizado);
        } else {
            throw new RuntimeException("Cadastro do usuário não encontrado com o ID: " + id);
        }
    }

    // Deletando os cadastros de perfis dos usurios

    public void removerCadastroPerfil(Long id) {
        if (edicaoPerfilRepository.existsById(id)) {
            edicaoPerfilRepository.deleteById(id);
        } else {
            throw new RuntimeException("Cadastro do usuário não encontrado com o ID: " + id);
        }
    }
}
