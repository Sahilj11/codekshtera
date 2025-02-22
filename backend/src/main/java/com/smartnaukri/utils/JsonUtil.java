package com.smartnaukri.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JsonUtil {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    public static String convertListToText(List<String> ls) {
        try {
            Map<String, List<String>> jsonMap = new HashMap<>();
            jsonMap.put("skills", ls);
            return objectMapper.writeValueAsString(jsonMap);
        } catch (Exception e) {
            throw new RuntimeException("Error converting list to JSON", e);
        }
    }
}
