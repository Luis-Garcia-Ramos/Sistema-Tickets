package gob.sep.evaluacion_tickets.models.dao;

import gob.sep.evaluacion_tickets.models.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITicketDao extends JpaRepository<Ticket, Long>
{
}
