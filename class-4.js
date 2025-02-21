//Planteamiento:cree una función de JS que analice un arreglo de números que representa notas de estudiantesy retorne un objeto con información basado en el siguiente mapa:90-100: A80-89: B70-79: C60-69: DBelow 60: FEjemplo: const studentGrades = [100, 50, 65, 70, 85, 96, 45];const result = computeGrades(studentGrades)console.log(result)console:{parsed: [A, F, D, C, B, A, F],passed: 5,lose: 2}

const studentGrades = [100, 50, 65, 70, 85, 96, 45];
const computeGrades = (studentGrades) => {
    let parsed = [];
    let aprobado = 0;
    let desaprobado = 0;
    studentGrades.forEach(grade => {
        if (grade >= 90 && grade <= 100) {
            parsed.push('A');
            aprobado++;
        } else if (grade >= 80 && grade <= 89) {
            parsed.push('B')
            aprobado++;
        } else if (grade >= 70 && grade <= 79) {
            parsed.push('C')
            aprobado++;
        } else if (grade >= 60 && grade <= 69) {
            parsed.push('D')
            aprobado++;
        } else {
            parsed.push('F')
        
            desaprobado++;
        }
    });
    return {
       parsed,
       aprobado,
       desaprobado,
    }
}       
const result = computeGrades(studentGrades)       
console.log(result);
