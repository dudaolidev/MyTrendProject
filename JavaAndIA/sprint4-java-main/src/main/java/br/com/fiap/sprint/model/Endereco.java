
package br.com.fiap.sprint.model;

import jakarta.persistence.*;

@Entity
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String logradouro;
    private Integer numero;
    private String complemento;
    private String cep;
    private String cidade;
    private String bairro;
    private String estado;

    @ManyToOne
    @JoinColumn(name = "caracteristicas_cliente_id")
    private CaracteristicasCliente caracteristicasCliente;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public CaracteristicasCliente getCaracteristicasCliente() {
        return caracteristicasCliente;
    }

    public void setCaracteristicasCliente(CaracteristicasCliente caracteristicasCliente) {
        this.caracteristicasCliente = caracteristicasCliente;
    }
}
