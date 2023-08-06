export const convertToAMPM = (time: string, full: boolean = false) => {
    const hours = time.split(':')[0];
    const minutes = time.split(':')[1];
    const convertedHours = parseInt(hours) % 12 !== 0 ? +hours % 12 : 12;
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    if (full) {
        return `${convertedHours}:${minutes} ${ampm}`
    }
    return `${convertedHours} ${ampm}`;
}