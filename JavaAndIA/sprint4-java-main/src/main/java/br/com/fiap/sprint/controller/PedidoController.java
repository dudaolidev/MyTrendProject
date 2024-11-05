package br.com.fiap.sprint.controller;

import br.com.fiap.sprint.controller.dto.PedidoDTO;
import br.com.fiap.sprint.model.Pedido;
import br.com.fiap.sprint.service.PedidoService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pedido")
public class PedidoController {

    private final PedidoService pedidoService;

    @Autowired
    public PedidoController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @PostMapping
    public ResponseEntity<Pedido> cadastrarPedido(@Valid @RequestBody PedidoDTO pedido) {
        Pedido novoPedido = pedidoService.cadastrarPedido(pedido);
        return ResponseEntity.ok(novoPedido);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<Pedido> atualizarPedido(@PathVariable Long id, @RequestBody PedidoDTO novoPedido) {
        Pedido pedidoAtualizado = pedidoService.atualizarPedido(id, novoPedido);
        return ResponseEntity.ok(pedidoAtualizado);
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Pedido>> listarPedidos() {
        List<Pedido> pedidos = pedidoService.listarPedidos();
        return ResponseEntity.ok(pedidos);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerPedidos(@PathVariable Long id) {
        pedidoService.removerPedidos(id);
        return ResponseEntity.ok().build();
    }
}
