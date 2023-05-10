package com.teste.dti.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.TreeMap;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.teste.dti.entity.Lembrete;
import com.teste.dti.repository.LembreteRepository;

import jakarta.validation.ConstraintViolationException;

@Service
public class LembreteService {
	@Autowired
	LembreteRepository repository;
		
	public ResponseEntity< ? > cadastrarLembrete(Lembrete lembrete){
	    try {
	        Lembrete cadastrarLembrete = repository.save(lembrete);
	        return ResponseEntity.status(HttpStatus.CREATED).body(cadastrarLembrete);
	    } catch (ConstraintViolationException ex) {
	        List<String> errors = ex.getConstraintViolations()
	                               .stream()
	                               .map(violation -> violation.getMessage())
	                               .collect(Collectors.toList());
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
	    }
	}

	public ResponseEntity<List<Lembrete>> listarLembretes(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	public ResponseEntity<Map<String, List<Lembrete>>> listarLembretesPorData() {
	    List<Lembrete> lembretes = repository.findAll();
	    Map<String, List<Lembrete>> lembretesPorData = new TreeMap<>();
	    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	    for (Lembrete lembrete : lembretes) {
	        String dataString = sdf.format(lembrete.getData());
	        if (!lembretesPorData.containsKey(dataString)) {
	            lembretesPorData.put(dataString, new ArrayList<>());
	        }
	        lembretesPorData.get(dataString).add(lembrete);
	    }

	    return ResponseEntity.ok().body(lembretesPorData);
	}
	
	public ResponseEntity<?> deletarLembrete(Long id) {
	    return repository.findById(id).map(resp -> {
	        repository.deleteById(id);
	        return ResponseEntity.ok().body("Lembrete deletado com sucesso.");
	    }).orElse(ResponseEntity.notFound().build());
	}


	public ResponseEntity<Lembrete> atualizarLembrete(Long id, Lembrete lembreteAtualizado) {
	    Optional<Lembrete> lembreteExistente = repository.findById(id);
	    if (!lembreteExistente.isPresent()) {
	        return ResponseEntity.notFound().build();
	    }

	    Lembrete lembrete = lembreteExistente.get();
	    lembrete.setNome(lembreteAtualizado.getNome());
	    lembrete.setData(lembreteAtualizado.getData());
	    
	    return ResponseEntity.ok(repository.save(lembrete));
	}
}
