export const formatDate = (date: string) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const inputDate = new Date(date);

    const day = inputDate.getDate();
    const dayOfWeek = daysOfWeek[inputDate.getDay()];

    return `${dayOfWeek} ${day}`;
}