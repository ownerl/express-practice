const students = [
    {name: 'Abay', present: true},
    {name: 'Morgan', present: true},
    {name: 'Carlos', present: true},
    {name: 'Caitlin', present: true},
    {name: 'Selam', present: true},
    {name: 'Joseph', present: false}
];

module.exports = {
    showAttendance: function(){
        return students;
    }
};