package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Planet {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private String radius;

    public Planet(){

    }

    public Planet(String name, String description, String radius) {
        this.name = name;
        this.description = description;
        this.radius = radius;
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

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setRadius(String radius) {
        this.radius = radius;
    }

    @Override
  public String toString() {
      return "Planet{" +
            "id=" + id +
              ", name='" + name + '\'' +
              ", description='" + description + '\'' +
             ", radius='" + radius + '\'' +
              '}';
  }
}
