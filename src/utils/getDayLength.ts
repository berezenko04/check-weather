export const getDayLength = (t1: number, t2: number) => {
    const sunrise = new Date(t1 * 1000).valueOf();
    const sunset = new Date(t2 * 1000).valueOf();

    const lengthInSeconds = ((sunset - sunrise) / 1000) / 60;
    const hours = Math.floor(lengthInSeconds / 60);
    const minutes = Math.round(lengthInSeconds % 60);

    return `${hours}:${minutes}`;
}