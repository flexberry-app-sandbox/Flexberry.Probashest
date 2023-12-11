package Probashest.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probashest.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Комнаты
 */
@Entity(name = "IISProbashestКомнаты")
@Table(schema = "public", name = "Комнаты")
public class Komnaty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Этаж")
    private Integer этаж;

    @Column(name = "КолвоМест")
    private Integer колвомест;


    public Komnaty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Integer getЭтаж() {
      return этаж;
    }

    public void setЭтаж(Integer этаж) {
      this.этаж = этаж;
    }

    public Integer getКолвоМест() {
      return колвомест;
    }

    public void setКолвоМест(Integer колвомест) {
      this.колвомест = колвомест;
    }


}