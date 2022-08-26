export const getValidUrl = (link: string) => {
    const pattern = new RegExp(`(http)?s?:?(\\/\\/[^"']*\\.(?:png|jpg|jpeg|gif|png|svg))`);
    return pattern.test(link);

}