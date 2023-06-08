package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="pets")
public class PetModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pid;
	private String petname;
	private String breed;
	private float petprice;
	private float age;
	private String petimg;
	public Long getPid() {
		return pid;
	}
	public void setPid(Long pid) {
		this.pid = pid;
	}
	public String getPetname() {
		return petname;
	}
	public void setPetname(String petname) {
		this.petname = petname;
	}
	public String getBreed() {
		return breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	public float getPetprice() {
		return petprice;
	}
	public void setPetprice(float petprice) {
		this.petprice = petprice;
	}
	public float getAge() {
		return age;
	}
	public void setAge(float age) {
		this.age = age;
	}
	public String getPetimg() {
		return petimg;
	}
	public void setPetimg(String petimg) {
		this.petimg = petimg;
	}
}

