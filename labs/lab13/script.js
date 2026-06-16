// Lab 13: Objects in JavaScript
let studentProfile = {
    firstName: "Артур",
    lastName: "Білоус",
    course: 1,
    isEnrolled: true,
    showFullName: function() {
        console.log(this.firstName + " " + this.lastName);
        return this.firstName + " " + this.lastName;
    }
};

console.log("Ім'я студента:", studentProfile.firstName);
console.log("Статус навчання:", studentProfile.isEnrolled);
studentProfile.showFullName();

document.getElementById('output').innerHTML = `
    <p><strong>Студент:</strong> ${studentProfile.showFullName()}</p>
    <p><strong>Курс:</strong> ${studentProfile.course}</p>
    <p><strong>Навчається:</strong> ${studentProfile.isEnrolled ? 'Так' : 'Ні'}</p>
`;