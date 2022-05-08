export interface IHero {
    appearance: object,
    biography: {
        aliases: string[],
        alignment: string,
        alterEgos: string,
        firstAppearance: string,
        fullName: string,
        placeOfBirth: string,
        publisher: string
    },
    connections: object,
    id: number,
    images: {
        xs: string,
        sm: string,
        md: string,
        lg: string,
    },
    name: string,
    powerstats: {
        combat: number,
        durability: number,
        intelligence: number,
        power: number,
        speed: number,
        strength: number
    },
    slug: string,
    work: object,
    isFavorite?: boolean
}

export interface CompleteState {
    listA: IHero[],
    listB: IHero[],
    loading: boolean,
    error: string,
    favorites: number[],
    rowsAmount: number,
    windowWidth: number,
}