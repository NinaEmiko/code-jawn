package com.codejawn.client;

import com.codejawn.model.request.EmailRequest;
import com.codejawn.util.EndPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class EmailClientService {
    private final RestTemplate restTemplate;
    @Value("${email-service-url}")
    private String host;

    @Autowired
    public EmailClientService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String sendRequest(EmailRequest emailRequest, EndPoint endPoint) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<EmailRequest> requestEntity = new HttpEntity<>(emailRequest, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    host + endPoint.getEndpoint(),
                    HttpMethod.POST,
                    requestEntity,
                    String.class);

            if (response.getStatusCode() == HttpStatus.OK) {
                return response.getBody();
            } else {
                throw new RuntimeException("Failed to call email-service, status: " + response.getStatusCode());
            }
        } catch (Exception e) {
            throw new RuntimeException("Error during email-service call: " + e.getMessage(), e);
        }
    }
}
