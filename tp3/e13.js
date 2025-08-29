let alumns = require("./data/alumns");

const alumnsWithAvg = alumns.map(alumn => {
    const sum = alumn.grades.reduce((acc, grade) => acc + grade, 0);
    const avg = sum / alumn.grades.length;
    return {
        id: alumn.id,
        nombre: alumn.nombre,
        promedio: avg
    };
});