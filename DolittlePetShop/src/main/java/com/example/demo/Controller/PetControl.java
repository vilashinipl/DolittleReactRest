package com.example.demo.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.PetModel;
import com.example.demo.Model.VerifyModel;
import com.example.demo.Service.PetService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class PetControl {
	@Autowired
	private PetService service;
	@Tag(name = "Signin", description = "Login Endpoint")
	@PostMapping("/Signin")
	private String Login(@RequestBody Map<String, String> xLogin) {
	    String username = xLogin.get("username");
	    String password = xLogin.get("password");
	    String result = service.Login(username, password);
	    return result;
	}

	@Tag(name = "Signup", description = "Signup Endpoint")
    @PostMapping("/Signup")
    public String Signup(@RequestBody VerifyModel user) {
        return service.Signup(user);
    }
	
	@Tag(name = "List Pets", description = "List All Pets")
	@GetMapping("/list")
	private List<PetModel> Pets(){
		return service.getData();
	}
	
	@Tag(name = "Sort Pet by ID", description = "View Pet Data")
	@GetMapping("/data/{id}")
	private Optional<PetModel> viewPets(@PathVariable Long id) {
		return service.findbyID(id);
	}
	
	
	@Tag(name = "Add Pet", description = "Add New Pet")
	@PostMapping("/add")
	private PetModel addPet(@RequestBody PetModel data) {
		return service.addData(data);
	}
	
	@Tag(name = "Edit Pet", description = "Edit Existing Pet")
	@PutMapping("/edit/{id}")
	private PetModel editPet(@PathVariable Long id, @RequestBody PetModel data) {
		return service.editData(data, id);
	}
	
	@Tag(name = "Delete Data", description = "Delete The Existing Pet")
	@DeleteMapping("/delete/{id}")
	private String deletePet(@PathVariable Long id) {
		return service.deleteData(id);
	}
}
