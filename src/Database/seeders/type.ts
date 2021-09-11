import { Type } from '../entities/Type';

export const seedType = async () => {
    const types: string[] = [
        "dog",
        "cat",
        "bird",
        "rodent"
    ];

    await Promise.all(types.map(async (name: string) => {
        const type = Type.create({
            name
        });

        await type.save();
    }));
}