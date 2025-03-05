package com.codejawn.model.request.lessontracker;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateLTRequest {
    private Long userId;
    private String lesson;
}
