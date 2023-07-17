export const convertToAMPM = (time: string) => {
    const hours = time.split(':')[0];
    const convertedHours = parseInt(hours) % 12 !== 0 ? +hours % 12 : 12;
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    return `${convertedHours} ${ampm}`;
}