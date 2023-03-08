package ky.barry.barry.ky3.repository;

import ky.barry.barry.ky3.domain.Photo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends CrudRepository<Photo, Long> {}

