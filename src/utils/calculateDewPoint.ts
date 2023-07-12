export const calculateDewPoint = (temp: number, humidity: number) => {
    const a = 17.27;
    const b = 237.7;
    const alpha = ((a * temp) / (b + temp)) + Math.log(humidity / 100.0);
    const dewPoint = (b * alpha) / (a - alpha);
    return Math.round(dewPoint);
}