package Probashest.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probashest.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Гость
 */
@Entity(name = "IISProbashestГость")
@Table(schema = "public", name = "Гость")
public class Gost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ДатаРождения")
    private Date датарождения;

    @Column(name = "СерНомПаспорта")
    private Integer серномпаспорта;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "Почта")
    private String почта;


    public Gost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Date getДатаРождения() {
      return датарождения;
    }

    public void setДатаРождения(Date датарождения) {
      this.датарождения = датарождения;
    }

    public Integer getСерНомПаспорта() {
      return серномпаспорта;
    }

    public void setСерНомПаспорта(Integer серномпаспорта) {
      this.серномпаспорта = серномпаспорта;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getПочта() {
      return почта;
    }

    public void setПочта(String почта) {
      this.почта = почта;
    }


}