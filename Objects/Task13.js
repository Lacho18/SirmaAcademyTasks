class CarCompany {
    constructor() {
        this.brands = [];
    }

    addCompany(objectData) {
        if (this.brands.length == 0) {
            this.brands.push(objectData);
        }
        else {
            let brandObject = this.brands.find(indexValue => indexValue.brand === objectData.brand);

            if (brandObject) {
                let model = brandObject.model.find(indexValue => indexValue.name === objectData.model[0].name);

                if (model) {
                    model.produced += objectData.model[0].produced;
                }
                else {
                    brandObject.model.push(objectData.model[0]);
                }
            }
            else {
                this.brands.push(objectData);
            }
        }
    }

    toString() {
        for (let company of this.brands) {
            console.log(company.brand);
            for (let model of company.model) {
                console.log(`###${model.name} -> ${model.produced}`);
            }
        }
    }
}

function solve(inputArray) {
    let carCompany = new CarCompany();

    for (let input of inputArray) {
        let data = input.split(" | ");
        let objectData = {
            brand: data[0],
            model: [
                {
                    name: data[1],
                    produced: Number(data[2])
                }
            ]
        }

        carCompany.addCompany(objectData);
    }

    carCompany.toString();
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])