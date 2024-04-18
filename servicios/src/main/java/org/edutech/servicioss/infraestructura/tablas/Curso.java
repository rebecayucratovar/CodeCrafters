package org.edutech.servicioss.infraestructura.tablas;

import jakarta.persistence.*;
import lombok.Data;
import org.edutech.servicioss.infraestructura.enums.Categoria;

import java.util.UUID;

@Data
@Entity
public class Curso {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  private String titulo;

  private String instructor;

  //@Enumerated(EnumType.STRING)
  private Categoria categoria;

  private String imagen;

  private int costo;

  private String requisito;

  private String descripcion;

  @ManyToOne
  @JoinColumn(name = "usuario_id")
  private Usuario usuario;
}
