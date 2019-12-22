package com.address.dao;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.address.Address;
import com.address.dao.AddressRespository;

@SpringBootTest
@RunWith(SpringRunner.class)
@ActiveProfiles("test")
public class AddressRepositoryTest {

	@Autowired
	AddressRespository addressRepository;
	
	@Test
	public void testSavingAndRetrievingAddress() {
		//GIVEN an address we want to save
		Address expectedAddress = new Address(null, "Joe", "Shmo", "joe@shmo.com", "805-999-9999", "324 Channel Islands Blvd","apt 2","Cambria","CA", "93428");
		
		//WHEN saving the address
		addressRepository.save(expectedAddress);
		
		//THEN the saved address should match the expected address
		List<Address> retrievedAddresses = (List<Address>)addressRepository.findAll();
		assertEquals("Only 1 address should be found", 1, retrievedAddresses.size());
		assertNotNull("An Id should have been created", retrievedAddresses.get(0).getId());
		assertEquals(expectedAddress.getFirstName(), retrievedAddresses.get(0).getFirstName());
		assertEquals(expectedAddress.getLastName(), retrievedAddresses.get(0).getLastName());
	}
	
	@Test
	public void testDeleteAddress() {
		//GIVEN an address saved to the database
		Address expectedAddress = new Address(null, "Joe", "Shmo", "joe@shmo.com", "805-999-9999", "324 Channel Islands Blvd","apt 2","Cambria","CA", "93428");
		addressRepository.save(expectedAddress);
		
		//WHEN deleting the address by it's ID
		addressRepository.deleteById(expectedAddress.getId());
		
		//THEN it should no longer exist in the database
		List<Address> retrievedAddresses = (List<Address>) addressRepository.findAll();
		assertEquals("Only 1 address should be saved", 0, retrievedAddresses.size());
	}
}
