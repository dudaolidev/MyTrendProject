package br.com.fiap.sprint.controller;

import br.com.fiap.sprint.controller.dto.CaracteristicasClienteDTO;
import br.com.fiap.sprint.model.CaracteristicasCliente;
import br.com.fiap.sprint.model.Endereco;
import br.com.fiap.sprint.service.CaracteristicasClienteService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RequestMapping("/caracteristicasCliente")
public class CaracteristicasClientesController {
    private final CaracteristicasClienteService caracteristicasClienteService;

    @Autowired
    public CaracteristicasClientesController(CaracteristicasClienteService caracteristicasClienteService) {
        this.caracteristicasClienteService = caracteristicasClienteService;
    }

    @GetMapping("/buscar")
    @ResponseBody
    public ResponseEntity<List<CaracteristicasCliente>> listarCaracteristicasCliente() {
        List<CaracteristicasCliente> caracteristicasClientes = caracteristicasClienteService.listarCaracteristicasClientes();
        return ResponseEntity.ok(caracteristicasClientes);
    }

    // Exibe a lista de características dos clientes
    @GetMapping("/lista")
    public String listarClientes(Model model) {
        List<CaracteristicasCliente> clientes = caracteristicasClienteService.listarCaracteristicasClientes();
        model.addAttribute("clientes", clientes);
        return "caracteristicascliente-lista";
    }

    // Exibe o formulário para criar uma nova característica
    @GetMapping("/form")
    public String formularioCadastroCliente(Model model) {
        model.addAttribute("caracteristicasCliente", new CaracteristicasClienteDTO());
        return "caracteristicascliente-form";
    }

    // Salva uma nova característica
    @PostMapping("/create")
    public String salvarCliente(@ModelAttribute("caracteristicasCliente") @Valid CaracteristicasClienteDTO caracteristicasClienteDTO) {
        caracteristicasClienteService.cadastrarCaracteristicasCliente(caracteristicasClienteDTO);
        return "redirect:/caracteristicasCliente/lista";
    }

    // Exibe o formulário de edição com dados preenchidos para uma característica existente
    @GetMapping("/form/{id}")
    public String formularioEditarCliente(@PathVariable Long id, Model model) {
        CaracteristicasClienteDTO caracteristicasCliente = caracteristicasClienteService.buscarPorId(id);
        model.addAttribute("caracteristicasCliente", caracteristicasCliente);
        return "caracteristicascliente-form";
    }

    // Atualiza uma característica existente
    @PostMapping("/update/{id}")
    public String atualizarCliente(@PathVariable Long id, @ModelAttribute("caracteristicasCliente") @Valid CaracteristicasClienteDTO caracteristicasClienteDTO) {
        caracteristicasClienteService.atualizarCaracteristicasClientes(id, caracteristicasClienteDTO);
        return "redirect:/caracteristicasCliente/lista";
    }

    // Exibe os detalhes de uma característica específica
    @GetMapping("/detail/{id}")
    public String detalhesCliente(@PathVariable Long id, Model model) {
        CaracteristicasClienteDTO caracteristicasCliente = caracteristicasClienteService.buscarPorId(id);
        model.addAttribute("caracteristicasCliente", caracteristicasCliente);
        return "caracteristicascliente-detail";
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public ResponseEntity<Void> deleteCliente(@PathVariable Long id) {
        caracteristicasClienteService.removerCaracteristicasCliente(id);
        return ResponseEntity.noContent().build(); // Retorna um status 204 No Content se a exclusão for bem-sucedida
    }
}