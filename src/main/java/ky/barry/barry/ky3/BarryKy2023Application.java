package ky.barry.barry.ky3;

import ky.barry.barry.ky3.domain.Photo;
import ky.barry.barry.ky3.repository.PhotoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class BarryKy2023Application {

	public static void main(String[] args) {
		SpringApplication.run(BarryKy2023Application.class, args);
	}

	@Bean
	CommandLineRunner init(PhotoRepository photoRepository) {
		return args -> {
			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
				Photo photo = new Photo(name, "Blah");
				photoRepository.save(photo);
			});
			photoRepository.findAll().forEach(System.out::println);
		};
	}

}
