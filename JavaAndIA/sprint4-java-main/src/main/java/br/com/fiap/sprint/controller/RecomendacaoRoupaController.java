package br.com.fiap.sprint.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import br.com.fiap.sprint.service.RecomendacaoRoupaService;
import br.com.fiap.sprint.model.CaracteristicasCliente;

@RestController
public class RecomendacaoRoupaController {

    @Autowired
    private RecomendacaoRoupaService recomendacaoRoupaService;

    @GetMapping("/recomendacao-roupa")
    public String recomendarRoupa(@RequestParam String biotipo, @RequestParam String colorometria, @RequestParam String estiloPreferencia) {
        CaracteristicasCliente caracteristicasCliente = new CaracteristicasCliente();
        caracteristicasCliente.setBiotipo(biotipo);
        caracteristicasCliente.setColorometria(colorometria);
        caracteristicasCliente.setEstiloPreferencia(estiloPreferencia);
        return recomendacaoRoupaService.recomendarRoupa(caracteristicasCliente);
    }
}