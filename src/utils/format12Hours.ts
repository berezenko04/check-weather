export const format12Hours = (date: Date = new Date()) => {
    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();
    const ampm: string = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours !== 0 ? hours : 12;

    const formattedHours = hours < 10 ? '0' + hours : hours.toString();
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();

    return formattedHours + ':' + formattedMinutes + ' ' + ampm;
}