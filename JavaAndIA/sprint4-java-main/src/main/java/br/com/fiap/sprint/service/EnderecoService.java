package br.com.fiap.sprint.service;

import br.com.fiap.sprint.controller.dto.EnderecoDTO;
import br.com.fiap.sprint.model.Endereco;
import br.com.fiap.sprint.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    // Cadastrando o endereco
    public Endereco cadastrarEndereco(EnderecoDTO enderecoDTO) {
        Endereco endereco = new Endereco();
        endereco.setLogradouro(enderecoDTO.getLogradouro());
        endereco.setNumero(enderecoDTO.getNumero());
        endereco.setComplemento(enderecoDTO.getComplemento());
        endereco.setCep(enderecoDTO.getCep());
        endereco.setCidade(enderecoDTO.getCidade());
        endereco.setBairro(enderecoDTO.getBairro());
        endereco.setEstado(enderecoDTO.getEstado());
        return enderecoRepository.save(endereco);
    }

    // Atualizando o endereco
    public Endereco atualizarEndereco(Long id, EnderecoDTO novoEndereco) {
        Optional<Endereco> enderecoExistente = enderecoRepository.findById(id);

        if (enderecoExistente.isPresent()) {
            Endereco enderecoAtualizado = enderecoExistente.get();
            enderecoAtualizado.setLogradouro(novoEndereco.getLogradouro());
            enderecoAtualizado.setNumero(novoEndereco.getNumero());
            enderecoAtualizado.setComplemento(novoEndereco.getComplemento());
            enderecoAtualizado.setCep(novoEndereco.getCep());
            enderecoAtualizado.setCidade(novoEndereco.getCidade());
            enderecoAtualizado.setBairro(novoEndereco.getBairro());
            enderecoAtualizado.setEstado(novoEndereco.getEstado());
            return enderecoRepository.save(enderecoAtualizado);
        } else {
            throw new RuntimeException("Endereco não encontrado com o ID: " + id);
        }
    }

    // Listando o endereco
    public List<Endereco> listarEndereco() {
        return enderecoRepository.findAll();
    }

    // Deletando o endereco
    public void removerEndereco(Long id) {
        if (enderecoRepository.existsById(id)) {
            enderecoRepository.deleteById(id);
        } else {
            throw new RuntimeException("Endereco não encontrado com o ID: " + id);
        }
    }

    // Buscando o endereco pelo ID
    public EnderecoDTO buscarPorId(Long id) {
        Endereco endereco = enderecoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Endereco não encontrado com o ID: " + id));

        // Convertendo o objeto Endereco para EnderecoDTO
        return new EnderecoDTO(endereco);
    }
}
