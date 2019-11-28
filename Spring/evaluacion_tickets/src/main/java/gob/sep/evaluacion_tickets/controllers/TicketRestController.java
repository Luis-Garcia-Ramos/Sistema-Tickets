package gob.sep.evaluacion_tickets.controllers;

import gob.sep.evaluacion_tickets.models.services.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/tickets")
public class TicketRestController
{
	@Autowired
	private ITicketService ticketService;

	@GetMapping()
}
