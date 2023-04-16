package ky.barry.barry.ky3.domain;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Photo {

    private String filename;

    private String text;

    private byte[] bytes;

}
