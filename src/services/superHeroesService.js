export const getSuperHeroService = async (superHeroVal) => {
    const response = await fetch(`https://akabab.github.io/superhero-api/api/all.json`);
    const data = await response.json();
    return data
}