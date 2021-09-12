import { Type } from '../entities/Type';

export const seedType = async () => {
    const dog = Type.create({name: "dog"});
    await dog.save();

    const cat = Type.create({name: "cat"});
    await cat.save();

    const bird = Type.create({name: "bird"});
    await bird.save();

    const rodent = Type.create({name: "rodent"});
    await rodent.save();
}