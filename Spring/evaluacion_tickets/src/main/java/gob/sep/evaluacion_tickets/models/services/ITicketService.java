package gob.sep.evaluacion_tickets.models.services;

import gob.sep.evaluacion_tickets.models.entity.Ticket;

import java.util.List;

public interface ITicketService
{
	public List<Ticket> findAll();
	public List<Ticket> findById();
}
