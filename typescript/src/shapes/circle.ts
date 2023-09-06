class Circle implements Shape {
    constructor (private readonly radius: number) {}
    
    computeArea (): number {
        return Math.PI * this.radius * this.radius
    }

}

function newCircle(radius: number): Circle {
    return new Circle(radius)
}

export { newCircle }
