package br.com.fiap.sprint.service;

import br.com.fiap.sprint.controller.dto.CadastroUsuarioDTO;
import br.com.fiap.sprint.model.CadastroUsuario;
import br.com.fiap.sprint.repository.CadastroUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CadastroUsuarioService {

    @Autowired
    private CadastroUsuarioRepository cadastroUsuarioRepository;

    // Realizando o cadastro dos usuarios

    public CadastroUsuario realizarCadastroUsuario(CadastroUsuarioDTO cadastroUsuarioDTO) {
        CadastroUsuario cadastroUsuario = new CadastroUsuario();
        cadastroUsuario.setNome(cadastroUsuarioDTO.getNome());
        cadastroUsuario.setSobrenome(cadastroUsuarioDTO.getSobrenome());
        cadastroUsuario.setEmail(cadastroUsuarioDTO.getEmail());
        cadastroUsuario.setSenha(cadastroUsuarioDTO.getSenha());
        return cadastroUsuarioRepository.save(cadastroUsuario);
    }

}