package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Planet {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private String radius;
    private String planetImage;

    public Planet(){
    }

    public Planet(String name, String description, String radius) {
        this.name = name;
        this.description = description;
        this.radius = radius;
    }

    public Planet(String name, String description, String radius, String planetImage) {
        this.name = name;
        this.description = description;
        this.radius = radius;
        this.planetImage = planetImage;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getRadius() {
        return radius;
    }

    public String getPlanetImage() {
        return planetImage;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setRadius(String radius) {
        this.radius = radius;
    }

    public void setPlanetImage(String planetImage) {
        this.planetImage = planetImage;
    }

    @Override
    public String toString() {
        return "Planet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", radius='" + radius + '\'' +
                ", planetImage='" + planetImage + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Planet)) return false;
        Planet planet = (Planet) o;
        return getId().equals(planet.getId()) && getName().equals(planet.getName()) && getDescription().equals(planet.getDescription()) && getRadius().equals(planet.getRadius()) && getPlanetImage().equals(planet.getPlanetImage());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getDescription(), getRadius(), getPlanetImage());
    }
}
