package com.address.controller;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.address.Address;
import com.address.dao.AddressRespository;

@RestController
@RequestMapping("/api")
public class AddressController {
	
	@Autowired
	AddressRespository addressRepository;
	
	@GetMapping("/address/{addressId}")
	public ResponseEntity<?> getAddressById(@PathVariable("addressId") int addressId) {
		Optional<Address> optionalEntity = addressRepository.findById((long) addressId);
		if(optionalEntity.isPresent()) {
			return ResponseEntity.ok().body(optionalEntity.get());			
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/address")
	public Collection<Address> listAllAddresses() {
		return (List<Address>) addressRepository.findAll();
	}
	
	@PostMapping("/address")
	public ResponseEntity<Address> createAddress(@RequestBody Address newAddress) {
		return ResponseEntity.ok().body(addressRepository.save(newAddress));
	}
	
	@PutMapping("/address/{addressId}")
	public ResponseEntity<Address> updateAddress(@PathVariable("addressId") long addressId, @RequestBody Address updatedAddress) {
		return createAddress(updatedAddress);
	}
	
	@DeleteMapping("/address/{addressId}")
	public String deleteAddress(@PathVariable("addressId") long addressId) {
		addressRepository.deleteById(addressId);
		return "{ \"message\":\"Address successfully deleted.\"\n }";
	}
}
