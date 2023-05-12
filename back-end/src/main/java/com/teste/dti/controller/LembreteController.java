package com.teste.dti.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teste.dti.entity.Lembrete;
import com.teste.dti.service.LembreteService;

@RestController
@RequestMapping("/lembretes")
public class LembreteController {
	@Autowired
	LembreteService service;
	
	@PostMapping("/cadastrar")
	public ResponseEntity< ? > cadastrarLembrete(@RequestBody Lembrete lembrete){
		return service.cadastrarLembrete(lembrete);
	}
	
	@GetMapping("/listar-ordenados-por-data")
	public ResponseEntity<Map<String, List<Lembrete>>> listarLembretesPorDia(){
		return service.listarLembretesPorData();
	}
	
	@DeleteMapping(value = "/deletar/{id}")
	public ResponseEntity< ? > deletarLembrete(@PathVariable Long id){
		return service.deletarLembrete(id);
	}

}
