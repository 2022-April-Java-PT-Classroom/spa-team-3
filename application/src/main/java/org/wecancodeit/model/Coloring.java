package org.wecancodeit.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Coloring {

    // Variables
    @Id
    @GeneratedValue
    private Long coloringId;
    private String coloringTitle;
    private String coloringImage;

    // Getters
    public Long getColoringId() {
        return coloringId;
    }

    public String getColoringTitle() {
        return coloringTitle;
    }

    public String getColoringImage() {
        return coloringImage;
    }

    // Constructors
    public Coloring() {
    }

    public Coloring(String coloringTitle, String coloringImage) {
        this.coloringTitle = coloringTitle;
        this.coloringImage = coloringImage;
    }

    // Methods
    @Override
    public String toString() {
        return "Coloring{" +
                "coloringId=" + coloringId +
                ", coloringTitle='" + coloringTitle + '\'' +
                ", coloringImage='" + coloringImage + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Coloring)) return false;
        Coloring coloring = (Coloring) o;
        return getColoringId().equals(coloring.getColoringId()) && getColoringTitle().equals(coloring.getColoringTitle()) && getColoringImage().equals(coloring.getColoringImage());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getColoringId(), getColoringTitle(), getColoringImage());
    }
}
