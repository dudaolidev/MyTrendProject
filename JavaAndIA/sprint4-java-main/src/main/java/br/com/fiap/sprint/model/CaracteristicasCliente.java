package br.com.fiap.sprint.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class CaracteristicasCliente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String biotipo;
    private String estiloPreferencia;
    private String colorometria;

    @OneToMany(mappedBy = "caracteristicasCliente", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Endereco> enderecos;

    public CaracteristicasCliente(String biotipo, String colorometria, String estiloPreferencia) {
        this.biotipo = biotipo;
        this.colorometria = colorometria;
        this.estiloPreferencia = estiloPreferencia;
    }

    public CaracteristicasCliente() {

    }

    // Getters and Setters
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

    public void setColorometria(String colorimetria) {
        this.colorometria = colorimetria;
    }

    public List<Endereco> getEnderecos() {
        return enderecos;
    }

    public void setEnderecos(List<Endereco> enderecos) {
        this.enderecos = enderecos;
    }
}
