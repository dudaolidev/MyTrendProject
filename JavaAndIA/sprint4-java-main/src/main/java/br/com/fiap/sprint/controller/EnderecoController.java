package br.com.fiap.sprint.controller;

import br.com.fiap.sprint.controller.dto.EnderecoDTO;
import br.com.fiap.sprint.model.Endereco;
import br.com.fiap.sprint.service.EnderecoService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/endereco")
public class EnderecoController {

    private final EnderecoService enderecoService;

    @Autowired
    public EnderecoController(EnderecoService enderecoService) {
        this.enderecoService = enderecoService;
    }

    // Endpoints da API REST
    @PostMapping
    @ResponseBody
    public ResponseEntity<Endereco> cadastrarEnderecoApi(@Valid @RequestBody EnderecoDTO endereco) {
        Endereco novoEndereco = enderecoService.cadastrarEndereco(endereco);
        return ResponseEntity.ok(novoEndereco);
    }

    @PutMapping("/{id}")
    @Transactional
    @ResponseBody
    public ResponseEntity<Endereco> atualizarEnderecoApi(@PathVariable Long id, @RequestBody EnderecoDTO novoEndereco) {
        Endereco enderecoAtualizado = enderecoService.atualizarEndereco(id, novoEndereco);
        return ResponseEntity.ok(enderecoAtualizado);
    }

    @GetMapping("/buscar")
    @ResponseBody
    public ResponseEntity<List<Endereco>> listarEnderecoApi() {
        List<Endereco> enderecos = enderecoService.listarEndereco();
        return ResponseEntity.ok(enderecos);
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public ResponseEntity<Void> removerEnderecoApi(@PathVariable Long id) {
        enderecoService.removerEndereco(id);
        return ResponseEntity.ok().build();
    }

    // Métodos para renderização de páginas HTML via Thymeleaf
    @GetMapping("/enderecos")
    public String paginaEnderecos(Model model) {
        List<Endereco> enderecos = enderecoService.listarEndereco();
        model.addAttribute("enderecos", enderecos);
        return "enderecos";  // Nome do arquivo HTML sem extensão
    }

    @GetMapping("/form")
    public String formularioNovoEndereco(Model model) {
        model.addAttribute("endereco", new EnderecoDTO());
        return "endereco-form";
    }

    @GetMapping("/form/{id}")
    public String formularioEditarEndereco(@PathVariable Long id, Model model) {
        EnderecoDTO endereco = enderecoService.buscarPorId(id);
        model.addAttribute("endereco", endereco);
        return "endereco-form";
    }

    @PostMapping("/create")
    public String criarEndereco(@ModelAttribute("endereco") @Valid EnderecoDTO endereco, Model model) {
        enderecoService.cadastrarEndereco(endereco);
        return "redirect:/api/endereco/enderecos"; // Redireciona para a página de listagem de endereços
    }

    @PostMapping("/update/{id}")
    public String atualizarEndereco(@PathVariable Long id, @ModelAttribute("endereco") @Valid EnderecoDTO endereco) {
        enderecoService.atualizarEndereco(id, endereco);
        return "redirect:/api/endereco/enderecos"; // Redireciona para a página de listagem de endereços
    }

    @GetMapping("/detail/{id}")
    public String detalhesEndereco(@PathVariable Long id, Model model) {
        EnderecoDTO endereco = enderecoService.buscarPorId(id);
        model.addAttribute("endereco", endereco);
        return "endereco-detail";  // Nome do arquivo HTML sem extensão
    }
}
