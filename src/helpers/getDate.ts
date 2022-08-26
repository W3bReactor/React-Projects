export const getDate = (): string => {
    const day = new Date().getDate() >= 10 ? new Date().getDate() : '0' + new Date().getDate()
    const month = new Date().getMonth() + 1 >= 10 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)
    const year = new Date().getFullYear()
    return `${day}.${month}.${year}`
}


