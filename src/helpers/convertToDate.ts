export const convert = (d: string) => {
    return (
        d.constructor === String ? new Date(d) : NaN
    );
}