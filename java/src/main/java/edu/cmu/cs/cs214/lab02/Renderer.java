package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Renderer {
    // private Rectangle rectangle;
    
    // Renderer(Rectangle rectangle) {
    //     this.rectangle = rectangle;
    // }

    void draw(Shape shape) {
        double area = shape.getArea();

        // assume implementation

        System.out.println("Shape printed\n" + "Its area is " + area);
    }
}
