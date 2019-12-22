package com.address.dao;

import org.springframework.data.repository.CrudRepository;

import com.address.Address;

public interface AddressRespository extends CrudRepository<Address, Long> {

}
