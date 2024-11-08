{
    type Circle = {
        shape: 'circle',
        radius: number
    };

    type Rectangle = {
        shape: 'rectangle',
        width: number,
        length: number
    };

    type Shape = Circle | Rectangle;

    let area: number;
    const calculateShapeArea = (shape: Shape): number => {

        if (shape.shape === 'circle') {
            area = (Math.PI * (shape.radius ** 2));
            return parseFloat(area.toFixed(2));
        } else if (shape.shape === 'rectangle') {
            area = shape.width * shape.length;
            return parseFloat(area.toFixed(2));
        } else {
            throw new Error("Shape type not found");
        }
    }

    const circleArea: number = calculateShapeArea({ shape: 'circle', radius: 5 })

    console.log(`Area of the circle is ${circleArea} square unit`);

    const rectangleArea: number = calculateShapeArea({ shape: 'rectangle', width: 5, length: 12 });

    console.log(`Area of the rectangle is ${rectangleArea} square unit`);
}