
package br.com.fiap.sprint.controller;

import br.com.fiap.sprint.messaging.MessageProducer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rabbitmq")
public class RabbitMQController {

    private final MessageProducer messageProducer;

    public RabbitMQController(MessageProducer messageProducer) {
        this.messageProducer = messageProducer;
    }

    @PostMapping("/send")
    public ResponseEntity<String> sendMessage(@RequestParam("message") String message) {
        messageProducer.sendMessage(message);
        return ResponseEntity.ok("Mensagem enviada para RabbitMQ com sucesso!");
    }
}
