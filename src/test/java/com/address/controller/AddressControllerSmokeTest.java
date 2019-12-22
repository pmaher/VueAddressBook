package com.address.controller;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class AddressControllerSmokeTest {

	@Autowired
	private AddressController controller;
	
	@Test
	public void smokeTest() {
		assertThat(controller).isNotNull();
	}
}
