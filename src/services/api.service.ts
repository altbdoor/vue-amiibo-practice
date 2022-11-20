// https://amiiboapi.com/
const baseUrl = 'https://amiiboapi.com/api';

export interface Game {
    key: string;
    name: string;
}

export interface PaginatedMeta<T> {
    // roughly based on
    // https://laravel-json-api.readthedocs.io/en/latest/fetching/pagination/#page-meta
    _meta: {
        current_page: number;
        per_page: number;
        total: number;
        last_page: number;
    };
    records: T[];
}

export interface Character {
    key: string;
    name: string;
}

export const getInitPageData = <T>(): PaginatedMeta<T> => ({
    _meta: {
        current_page: 0,
        per_page: 0,
        total: 0,
        last_page: 0,
    },
    records: [],
});

export const getSeries: () => Promise<{ amiibo: Game[] }> = () =>
    fetch(`${baseUrl}/amiiboseries/`).then((res) => res.json());

export const getCharacters: (page: number) => Promise<PaginatedMeta<Character>> = async (page) => {
    const size = 10;
    let charaList: Character[] = [];

    const storedData = sessionStorage.getItem('stored-characters');
    if (storedData) {
        charaList = JSON.parse(storedData);
    } else {
        charaList = await fetch(`${baseUrl}/character/`)
            .then((res) => res.json())
            .then((res) => res.amiibo);
        sessionStorage.setItem('stored-characters', JSON.stringify(charaList));
    }

    return {
        _meta: {
            current_page: page,
            per_page: size,
            total: charaList.length,
            last_page: Math.ceil(charaList.length / size),
        },
        records: charaList.slice((page - 1) * size, page * size),
    };
};
