function newRenderer() {
    return {
        draw(shape: Shape) {
            const area: number = shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }