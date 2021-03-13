//Función para obtener estadísticas de los links encontrados

const statsLinks = (arrayLinks) => {
    const arrayUrl = [];
    let brokenLinks = 0;
    const totalLinks = arrayLinks.length;

    arrayLinks.forEach(element => {
        arrayUrl.push(element.href)
        if (element.status == 'FAIL') {
            brokenLinks += 1;
        }
    });
    const arrayUniqueLinks = new Set(arrayUrl);
    const totalUniqueLinks = arrayUniqueLinks.size;
    const stats = [totalLinks, totalUniqueLinks, brokenLinks];
    return stats;
}

module.exports = statsLinks;