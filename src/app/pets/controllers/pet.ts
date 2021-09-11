import { Request, Response } from 'express';
import { Pet } from '../../../Database/entities/Pet';
import PetSearch from '../../../utils/search/Pet';
import { Search } from '../../../utils/search/Search';

const read = async (req: Request, res: Response) => {
    try {
        const page: number = +req.query.page! || 0;
        const limit: number = +req.query.limit! || 50;

        let search: Search = new PetSearch(req.query);

        const [pets, count] = await Pet.findAndCount({
            relations: ['type'],
            ...search.buildSearch(),
            take: limit,
            skip: page
        });

        res.json({
            pets,
            count
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error
        });
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const { name, description, color, size, image, gender, typeId } = req.body;

        const pet = Pet.create({
            name,
            description,
            color,
            size,
            image,
            gender,
            type: {
                id: typeId
            }
        });

        await pet.save();

        res.status(201).send(pet);
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}
const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description, color, size, image, gender, typeId } = req.body
        const pet = await Pet.findOne(id);

        if (!pet) {
            return res.status(404).json({
                message: 'Pet no found'
            })
        }

        await Pet.update(id, {
            name,
            description,
            color,
            size,
            image,
            gender,
            type: {
                id: typeId
            }
        });

        res.status(204).json();
        
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}
const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const pet = await Pet.findOne(id);

        if (!pet) {
            return res.status(404).json({
                message: 'Pet no found'
            })
        }

        await Pet.delete(id);

        res.status(204).json();
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}

export {
    read,
    create,
    update,
    remove
}