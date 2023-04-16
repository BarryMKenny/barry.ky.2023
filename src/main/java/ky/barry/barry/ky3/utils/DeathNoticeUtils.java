package ky.barry.barry.ky3.utils;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URL;

public class DeathNoticeUtils {
    public static <T> T convertJsonToResponseObj(String url, Class<T> type) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(new URL(url), type);
    }
}
