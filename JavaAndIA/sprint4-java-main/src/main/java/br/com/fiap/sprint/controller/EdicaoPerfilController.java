package br.com.fiap.sprint.controller;

import br.com.fiap.sprint.controller.dto.EdicaoPerfilDTO;
import br.com.fiap.sprint.model.EdicaoPerfil;
import br.com.fiap.sprint.service.EdicaoPerfilService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/edicaoPerfil")
public class EdicaoPerfilController {

    private final EdicaoPerfilService edicaoPerfilService;

    @Autowired
    public EdicaoPerfilController(EdicaoPerfilService edicaoPerfilService) {
        this.edicaoPerfilService = edicaoPerfilService;
    }

    @PostMapping
    public ResponseEntity<EdicaoPerfil> realizarEdicaoPerfil(@Valid @RequestBody EdicaoPerfilDTO edicaoPerfil) {
        EdicaoPerfil novoCadastroPerfil = edicaoPerfilService.realizarEdicaoPerfil(edicaoPerfil);
        return ResponseEntity.ok(novoCadastroPerfil);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<EdicaoPerfil> editarCadastroPerfil(@PathVariable Long id, @RequestBody EdicaoPerfilDTO novoCadastroPerfil) {
        EdicaoPerfil cadastroPerfilAtualizado = edicaoPerfilService.editarCadastroPerfil(id, novoCadastroPerfil);
        return ResponseEntity.ok(cadastroPerfilAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerCadastroPerfil(@PathVariable Long id) {
        edicaoPerfilService.removerCadastroPerfil(id);
        return ResponseEntity.ok().build();
    }
}
