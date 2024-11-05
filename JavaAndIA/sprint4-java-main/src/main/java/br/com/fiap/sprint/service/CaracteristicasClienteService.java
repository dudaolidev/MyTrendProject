package br.com.fiap.sprint.service;

import br.com.fiap.sprint.controller.dto.CaracteristicasClienteDTO;
import br.com.fiap.sprint.model.CaracteristicasCliente;
import br.com.fiap.sprint.model.Endereco;
import br.com.fiap.sprint.repository.CaracteristicasClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaracteristicasClienteService {

    @Autowired
    private CaracteristicasClienteRepository caracteristicasClienteRepository;

    public CaracteristicasCliente cadastrarCaracteristicasCliente(CaracteristicasClienteDTO dto) {
        CaracteristicasCliente caracteristicas = new CaracteristicasCliente();
        caracteristicas.setBiotipo(dto.getBiotipo());
        caracteristicas.setEstiloPreferencia(dto.getEstiloPreferencia());
        caracteristicas.setColorometria(dto.getColorometria());
        return caracteristicasClienteRepository.save(caracteristicas);
    }

    public CaracteristicasCliente atualizarCaracteristicasClientes(Long id, CaracteristicasClienteDTO dto) {
        CaracteristicasCliente caracteristicas = caracteristicasClienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Características não encontradas com ID: " + id));
        caracteristicas.setBiotipo(dto.getBiotipo());
        caracteristicas.setEstiloPreferencia(dto.getEstiloPreferencia());
        caracteristicas.setColorometria(dto.getColorometria());
        return caracteristicasClienteRepository.save(caracteristicas);
    }

    public List<CaracteristicasCliente> listarCaracteristicasClientes() {
        return caracteristicasClienteRepository.findAll();
    }



    public CaracteristicasClienteDTO buscarPorId(Long id) {
        CaracteristicasCliente caracteristicas = caracteristicasClienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Características não encontradas com ID: " + id));
        return new CaracteristicasClienteDTO(caracteristicas);
    }
    // Deletando caracteristicas do cliente
    public void removerCaracteristicasCliente(Long id) {
        if (caracteristicasClienteRepository.existsById(id)) {
            caracteristicasClienteRepository.deleteById(id);
        } else {
            throw new RuntimeException("Caracteristica do cliente não encontrada com o ID: " + id);
        }
    }
}
