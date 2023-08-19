export function convertToHourMinutes(minutes) {
    const hour = Math.floor(minutes/60);
    const minute = minutes % 60;
    return `${hour} Hrs ${minute} Min`
}