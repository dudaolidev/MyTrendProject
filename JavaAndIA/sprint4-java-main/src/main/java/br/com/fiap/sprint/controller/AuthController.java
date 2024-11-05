
package br.com.fiap.sprint.controller;

import org.springframework.context.MessageSource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final MessageSource messageSource;

    public AuthController(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(Locale locale) {
        String welcomeMessage = messageSource.getMessage("welcome.message", null, locale);
        return ResponseEntity.ok(welcomeMessage);
    }
}
