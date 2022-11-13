// https://amiiboapi.com/
const baseUrl = 'https://amiiboapi.com/api';

export interface Game {
    key: string;
    name: string;
}

export const getSeries: () => Promise<{ amiibo: Game[] }> = () =>
    fetch(`${baseUrl}/amiiboseries/`).then((res) => res.json());
