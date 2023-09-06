class Square implements Shape {
    constructor (private readonly sideLen: number) {}
    
    computeArea (): number {
        return this.sideLen * this.sideLen
    }

}

function newSquare(sideLen: number): Square {
    return new Square(sideLen)
}

export { newSquare }
