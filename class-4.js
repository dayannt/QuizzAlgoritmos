
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
