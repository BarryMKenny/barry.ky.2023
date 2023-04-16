package ky.barry.barry.ky3.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RipResponse {
    @JsonProperty("isarchive")
    private String isarchive;
    @JsonProperty("iTotalRecords")
    private String iTotalRecords;
    @JsonProperty("iTotalDisplayRecords")
    private String iTotalDisplayRecords;
    @JsonProperty("aaData")
    private List<String[]> aaData;
}
