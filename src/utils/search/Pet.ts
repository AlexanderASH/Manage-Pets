import { PetQuery } from './interfaces/PetQuery';
import { Search } from './Search';

export default class PetSearch extends Search {
    query: PetQuery;

    constructor(pet: PetQuery) {
        super();
        this.query = pet;
    }

    createSort(): object {
        const { sort, order } = this.query;

        let option = {
            order: {}
        };

        if (sort && order) {
            option.order = {
                [sort]: order
            };
        } else {
            option.order = {
                'id': "DESC"
            };
        }

        return option;
    }

    createQuery(): object {
        const { type } = this.query;

        let option = {
            where: {}
        }

        if (type) {
            option.where = {
                'type': {
                    id: type
                }
            }
        }

        Object.entries(this.query).map((value) => {
            if (value[0] != 'sort' && value[0] != 'order') {
                option.where = {
                    ...option.where,
                    [`${value[0]}`]: value[1]
                };
            }
        });

        return option;
    }

}