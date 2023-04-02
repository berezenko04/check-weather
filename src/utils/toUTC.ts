export const toUTC = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = `${date.getHours()}:${date.getMinutes()}`;

    return formattedDate;
}