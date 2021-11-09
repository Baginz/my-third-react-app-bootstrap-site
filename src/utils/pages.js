export const getPageCount = (totalCount, limit) => {
    //округляес в большую сторону от посты/лимит
    return Math.ceil(totalCount / limit)
}
//заполняем массив от 1 до количества стрниц
export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result;
}
