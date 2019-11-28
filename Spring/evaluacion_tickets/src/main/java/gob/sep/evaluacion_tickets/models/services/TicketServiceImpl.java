package gob.sep.evaluacion_tickets.models.services;

import gob.sep.evaluacion_tickets.models.entity.Ticket;
import gob.sep.evaluacion_tickets.models.dao.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public class TicketServiceImpl implements ITicketService
{
	@Autowired
	private ITicketDao ticketDao;

	@Override
	@Transactional(readOnly = true)
	public List<Ticket> findAll()
	{
		return (List<Ticket>) ticketDao.findAll();
	}

	@Override
	public List<Ticket> findById()
	{
		return null;
	}
}
