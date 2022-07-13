package com.devsuperior.thmeta.services;
import com.devsuperior.thmeta.entities.Sale;
import com.devsuperior.thmeta.repositories.SaleRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sale>findSales() {
		return repository.findAll();
	}

}
