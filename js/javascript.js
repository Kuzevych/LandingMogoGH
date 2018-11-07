

var student1 = {
    name: 'Ivan',
    surname: 'Ivanov',
    grades: [4,5,5],
    fullName: function () {
        return this.name + ' '+ this.surname;
    },
    gradesAverage: function () {
        var summa = this.grades.reduce(function(sum,cur){
            return sum+cur;
        })
        return (summa/this.grades.length).toFixed(2);
    }
};
var student2 = {
    name: 'Semen',
    surname: 'Semenov',
    grades: [3,5,5],
    fullName: function () {
        return this.name + ' '+ this.surname;
    },
    gradesAverage: function () {
        var summa = this.grades.reduce(function(sum,cur){
            return sum+cur;
        })
        return (summa/this.grades.length).toFixed(2);
    }
};
var student3 = {
    name: 'Petr',
    surname: 'Petrov',
    grades: [4,3,5],
    fullName: function () {
        return this.name + ' '+ this.surname;
    },
    gradesAverage: function () {
        var summa = this.grades.reduce(function(sum,cur){
            return sum+cur;
        })
        return (summa/this.grades.length).toFixed(2);
    }
};


console.log(student1.gradesAverage());
console.log(student1.fullName());

console.log(student2.gradesAverage());
console.log(student2.fullName());

console.log(student3.gradesAverage());
console.log(student3.fullName());
