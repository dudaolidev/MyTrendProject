package br.com.fiap.sprint.repository;

import br.com.fiap.sprint.model.EdicaoPerfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EdicaoPerfilRepository extends JpaRepository<EdicaoPerfil, Long> {
}
