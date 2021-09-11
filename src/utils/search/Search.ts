
export abstract class Search {
    abstract createSort(): object;
    abstract createQuery(): object;

    public buildSearch(): object {
        const sort = this.createSort();
        const query = this.createQuery();
        return {
            ...sort, 
            ...query
        };
    };
}