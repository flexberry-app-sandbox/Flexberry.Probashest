package Probashest.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probashest.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ДокРегВхода
 */
@Entity(name = "IISProbashestДокРегВхода")
@Table(schema = "public", name = "ДокРегВхода")
public class DokRegVxoda {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Komnaty")
    @Convert("Komnaty")
    @Column(name = "Комнаты", length = 16, unique = true, nullable = false)
    private UUID _komnatyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Komnaty", insertable = false, updatable = false)
    private Komnaty komnaty;

    @OneToMany(mappedBy = "dokregvxoda", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<VxodGostya> vxodgostyas;

    @OneToMany(mappedBy = "dokregvxoda", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<VxodSotrudnika> vxodsotrudnikas;


    public DokRegVxoda() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}