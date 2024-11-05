package br.com.fiap.sprint.controller;

import br.com.fiap.sprint.controller.dto.CadastroUsuarioDTO;
import br.com.fiap.sprint.model.CadastroUsuario;
import br.com.fiap.sprint.service.CadastroUsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/cadastroUsuario")
public class CadastroUsuarioController {

    private final CadastroUsuarioService cadastroUsuarioService;

    @Autowired
    public CadastroUsuarioController(CadastroUsuarioService cadastroUsuarioService) {
        this.cadastroUsuarioService = cadastroUsuarioService;
    }

    @PostMapping
    public ResponseEntity<CadastroUsuario> realizarCadastroUsuario(@Valid @RequestBody CadastroUsuarioDTO cadastroUsuario) {
        CadastroUsuario novoCadastroUsuario = cadastroUsuarioService.realizarCadastroUsuario(cadastroUsuario);
        return ResponseEntity.ok(novoCadastroUsuario);
    }

}