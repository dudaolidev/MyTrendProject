package br.com.fiap.sprint.service;

import br.com.fiap.sprint.controller.dto.PedidoDTO;
import br.com.fiap.sprint.model.Pedido;
import br.com.fiap.sprint.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    // Cadastrando os pedidos

    public Pedido cadastrarPedido(PedidoDTO pedidoDTO) {
        Pedido pedido = new Pedido();
        pedido.setValorPedido(pedidoDTO.getValorPedido());
        pedido.setQuantidadeItens(pedidoDTO.getQuantidadeItens());
        return pedidoRepository.save(pedido);
    }

    // Atualizando os pedidos

    public Pedido atualizarPedido(Long id, PedidoDTO novoPedido) {
        Optional<Pedido> pedidoExistente = pedidoRepository.findById(id);

        if(pedidoExistente.isPresent()) {
            Pedido pedidoAtualizado = pedidoExistente.get();
            pedidoAtualizado.setValorPedido(novoPedido.getValorPedido());
            pedidoAtualizado.setQuantidadeItens((novoPedido.getQuantidadeItens()));
            return pedidoRepository.save(pedidoAtualizado);
        } else {
            throw new RuntimeException("Pedido não encontrado com o ID: " + id);
        }
    }

    // Listando os pedidos

    public List<Pedido> listarPedidos() {
        return pedidoRepository.findAll();
    }

    // Deletando os pedidos

    public void removerPedidos(Long id) {
        if (pedidoRepository.existsById(id)) {
            pedidoRepository.deleteById(id);
        } else {
            throw new RuntimeException("Pedido não encontrado com o ID: " + id);
        }
    }
}
