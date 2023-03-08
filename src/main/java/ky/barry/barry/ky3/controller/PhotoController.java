package ky.barry.barry.ky3.controller;

import ky.barry.barry.ky3.domain.Photo;
import ky.barry.barry.ky3.repository.PhotoRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class PhotoController {

    private final PhotoRepository photoRepository;

    @GetMapping("/photos")
    public List<Photo> getPhotos() {
        log.info("Retrieving Photos");
        List<Photo> photos = (List<Photo>) photoRepository.findAll();
        photos.forEach(System.out::println);
        return photos;
    }

    @PostMapping("/photos")
    void addPhoto(@RequestBody Photo photo) {
        log.info("Saving Photo: " + photo.toString());
        photoRepository.save(photo);
    }
}
