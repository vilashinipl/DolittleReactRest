package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.PetModel;
import com.example.demo.Model.VerifyModel;
import com.example.demo.Repository.PetRepo;
import com.example.demo.Repository.VerifyRepo;

@Service
public class PetService {
	@Autowired
	private PetRepo petrepo;
	@Autowired
	private VerifyRepo verifyrepo;
	public String Login(String username, String password) {
		VerifyModel xuser = verifyrepo.findByusername(username);
		if (xuser == null) {
			return "invalidusername";
		} else {
			if (xuser.getPassword().equals(password)) {
				return "success";
			} else {
				return "invalidpassword";
			}
		}
	}
	public String Signup(VerifyModel xuser) {
	    String username = xuser.getUsername();
	    VerifyModel authuser = verifyrepo.findByusername(username);
	    if (authuser == null) {
	        verifyrepo.save(xuser);
	        return "useradded";
	    } else {
	        return "existingusername";
	    }
	}
	public List<PetModel> getData() {
		return petrepo.findAll();
	}
	public PetModel addData(PetModel data) {
		return petrepo.save(data);
	}
	public PetModel editData(PetModel data, Long id) {
		PetModel edx = petrepo.findById(id).orElse(data);
		if (edx != null) {
			edx.setPetname(data.getPetname());
			edx.setBreed(data.getBreed());
			edx.setPetprice(data.getPetprice());
			edx.setAge(data.getAge());
			edx.setPetimg(data.getPetimg());
			return petrepo.saveAndFlush(edx);
		} else {
			return null;
		}
	}
	public String deleteData(Long id) {
		petrepo.deleteById(id);
		return "Deleted Successfully";
	}
	public Optional<PetModel> findbyID(Long id) {
		return petrepo.findById(id);
	}
}

