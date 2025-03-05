package com.code.jawn.email.service.context;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
public abstract class EmailContext {
    private String from;
    private String to;
    private String username;
    private String subject;
    private String email;
    private String attachment;
    private String templateLocation;
    private Map<String, Object> context;

    public EmailContext() {
        this.context = new HashMap<>();
    }

    public Object put(String key, Object value) {
        return key == null ? null : this.context.put(key.intern(), value);
    }

    public <T> void init(T context) {
    }
}
