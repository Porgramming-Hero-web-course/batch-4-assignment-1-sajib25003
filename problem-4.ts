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

const calculateShapeArea = (shape: Shape): number => {
    let area: number;

    if (shape.shape === 'circle') {
        area = (Math.PI * (shape.radius ** 2));
        return Math.round(area *100)/100;
    } else if (shape.shape === 'rectangle') {
        area = shape.width * shape.length;
        return Math.round(area *100)/100;;
    } else {
        throw new Error("Shape type not found");
    }
}

const circleArea:number = calculateShapeArea({shape: 'circle', radius:15})

console.log(`Area of the circle is ${circleArea} square unit`);

const rectangleArea:number = calculateShapeArea({shape: 'rectangle', width:50.56, length:120.32});

console.log(`Area of the rectangle is ${rectangleArea} square unit`);