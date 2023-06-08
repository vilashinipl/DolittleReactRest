package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.PetModel;

@Repository
public interface PetRepo extends JpaRepository<PetModel, Long> {
	
}
