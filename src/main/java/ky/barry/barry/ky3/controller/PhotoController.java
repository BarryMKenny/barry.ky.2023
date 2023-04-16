package ky.barry.barry.ky3.controller;

import ky.barry.barry.ky3.utils.FileSystemUtils;
import ky.barry.barry.ky3.domain.Photo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@AllArgsConstructor
@RestController
@Slf4j
public class PhotoController {

    @Value("${filesystem.directory.pictures}")
    private static String picturesDirectory;

    private List<Photo> photoList;

    @GetMapping("/photos")
    public List<Photo> getPhotos() {
        photoList = new ArrayList<>();
        Arrays.stream(FileSystemUtils.addPicturesToList()).forEach(file -> {
            try {
                photoList.add(new Photo(file.getAbsolutePath(), file.getName(), Files.readAllBytes(file.toPath())));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
        return photoList;
    }

    @PostMapping("/photos")
    void addPhoto(@RequestBody Photo photo) {
        log.info("Saving Photo: " + photo.toString());
        photoList.add(photo);
    }
}
