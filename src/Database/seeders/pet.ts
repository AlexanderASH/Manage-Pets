import { Pet } from '../entities/Pet';
import faker from 'faker';

export const seedPet = async () => {
    const data = [...Array(50000).keys()];
    const colors: string[] = ["red", "yellow", "brown", "white", "black"];
    const sizes: string[] = ["medium", "small", "big"];
    const genders: string[] = ["male", "female"];

    Promise.all(data.map(async () => {
        const pet = Pet.create({
            name: faker.internet.userName(),
            description: faker.lorem.words(10),
            color: faker.random.arrayElement(colors),
            size: faker.random.arrayElement(sizes),
            image: faker.image.animals(),
            gender: faker.random.arrayElement(genders),
            type: {
                id: faker.random.arrayElement([1, 2, 3, 4])
            }
        });

        await pet.save();
    }));
}