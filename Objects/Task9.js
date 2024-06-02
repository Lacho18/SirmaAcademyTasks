class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function solve(input, sortingType) {
    let data = [];

    for (let item of input) {
        let inputArray = item.split("|");
        let newData = {
            destination: inputArray[0],
            price: inputArray[1],
            status: inputArray[2]
        }
        data.push(newData);
    }

    for (let i = 0; i < data.length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < data.length; j++) {
            if (data[j][sortingType] < data[min][sortingType]) {
                min = j;
            }
        }

        if (min !== i) {
            let swap = data[i];
            data[i] = data[min];
            data[min] = swap;
        }
    }


    console.log(data);
}

solve(["Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed"],
    "price");