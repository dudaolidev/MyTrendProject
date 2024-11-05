package br.com.fiap.sprint.repository;

import br.com.fiap.sprint.model.CaracteristicasCliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CaracteristicasClienteRepository extends JpaRepository<CaracteristicasCliente, Long> {
}
