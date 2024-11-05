package br.com.fiap.sprint.service;

import com.theokanning.openai.OpenAiService;
import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.completion.CompletionResult;
import com.theokanning.openai.completion.CompletionChoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.fiap.sprint.model.CaracteristicasCliente;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;

@Service
public class RecomendacaoRoupaService {

    private static final Logger logger = LoggerFactory.getLogger(RecomendacaoRoupaService.class);
    private final OpenAiService openAiService;

    @Autowired
    public RecomendacaoRoupaService() {
        this.openAiService = new OpenAiService("api_key");
    }

    public String recomendarRoupa(CaracteristicasCliente caracteristicasCliente) {
        String prompt = String.format("Recomende uma roupa para um cliente com as seguintes características: biotipo: %s, colorometria: %s, estilo de preferência: %s.",
                caracteristicasCliente.getBiotipo(),
                caracteristicasCliente.getColorometria(),
                caracteristicasCliente.getEstiloPreferencia());

        try {
            logger.info("Enviando requisição para OpenAI com o prompt: {}", prompt);
            CompletionRequest request = CompletionRequest.builder()
                    .prompt(prompt)
                    .model("gpt-4")
                    .maxTokens(150)
                    .build();

            CompletionResult result = openAiService.createCompletion(request);
            List<CompletionChoice> choices = result.getChoices();

            if (choices == null || choices.isEmpty()) {
                logger.error("Resposta da OpenAI está vazia ou nula");
                return "\"Desculpe, não foi possível gerar uma recomendação no momento. Por favor, tente novamente mais tarde.\"\n";
            }

            String response = choices.get(0).getText().trim();
            logger.info("Resposta da OpenAI: {}", response);
            return response;
        } catch (Exception e) {
            // Logando o erro e retornando uma mensagem amigável
            logger.error("Erro ao gerar a recomendação de roupa:", e);
            return "Desculpe, não foi possível gerar uma recomendação no momento. Por favor, tente novamente mais tarde.";
        }
    }
}