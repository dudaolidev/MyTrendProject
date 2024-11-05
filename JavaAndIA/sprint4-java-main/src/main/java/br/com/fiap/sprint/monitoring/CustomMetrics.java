
package br.com.fiap.sprint.monitoring;

import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.stereotype.Component;

@Component
public class CustomMetrics {

    private final MeterRegistry meterRegistry;

    public CustomMetrics(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
        // Contador para usuários registrados
        meterRegistry.counter("app.users.registered");
    }

    public void incrementUserRegistration() {
        meterRegistry.counter("app.users.registered").increment();
    }
}
