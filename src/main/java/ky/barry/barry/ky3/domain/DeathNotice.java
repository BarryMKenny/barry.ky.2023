package ky.barry.barry.ky3.domain;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class DeathNotice {
    private String personName;
    private String deathNoticeLink;
    private String county;
    private String searchText;
}
