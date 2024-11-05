package br.com.fiap.sprint.controller.dto;

import br.com.fiap.sprint.model.CaracteristicasCliente;
import jakarta.validation.constraints.NotBlank;

public class CaracteristicasClienteDTO {

    private Long id;

    @NotBlank(message = "O campo 'Biotipo' não pode ser nulo ou vazio")
    private String biotipo;

    @NotBlank(message = "O campo 'Estilo de Preferência' não pode ser nulo ou vazio")
    private String estiloPreferencia;

    @NotBlank(message = "O campo 'Colorometria' não pode ser nulo ou vazio")
    private String colorometria;

    // Construtor padrão
    public CaracteristicasClienteDTO() {}

    // Construtor completo
    public CaracteristicasClienteDTO(Long id, String biotipo, String estiloPreferencia, String colorometria) {
        this.id = id;
        this.biotipo = biotipo;
        this.estiloPreferencia = estiloPreferencia;
        this.colorometria = colorometria;
    }

    // Construtor que aceita um objeto de domínio CaracteristicasCliente
    public CaracteristicasClienteDTO(CaracteristicasCliente caracteristicasCliente) {
        this.id = caracteristicasCliente.getId();
        this.biotipo = caracteristicasCliente.getBiotipo();
        this.estiloPreferencia = caracteristicasCliente.getEstiloPreferencia();
        this.colorometria = caracteristicasCliente.getColorometria();
    }

    // Getters e setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBiotipo() {
        return biotipo;
    }

    public void setBiotipo(String biotipo) {
        this.biotipo = biotipo;
    }

    public String getEstiloPreferencia() {
        return estiloPreferencia;
    }

    public void setEstiloPreferencia(String estiloPreferencia) {
        this.estiloPreferencia = estiloPreferencia;
    }

    public String getColorometria() {
        return colorometria;
    }

    public void setColorometria(String colorometria) {
        this.colorometria = colorometria;
    }
}
