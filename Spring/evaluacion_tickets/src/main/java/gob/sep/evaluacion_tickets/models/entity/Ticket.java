package gob.sep.evaluacion_tickets.models.entity;

import javax.persistence.*;

@Entity
@Table(name = "mesaAyuda")
public class Ticket
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nombre;
	private String curp;
	private String atendio;
	private String titulo;
	private String respuesta;
	private S
}
