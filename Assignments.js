import AssignmentLists from "./AssignmentLists.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: {
        'assignment-lists': AssignmentLists,
        'assignment-create': AssignmentCreate
    },
    template: `
            <assignment-lists title="Completed Assignments" :assignments="filters.completed" />
            <assignment-lists title="InProgress Assignments" :assignments="filters.inProgress" />
            <assignment-create @add="submitForm" />
    `,
    data(){
        return {
            assignments: [],
        }
    },
    created(){
        fetch('http://localhost:3000/assignments')
        .then(response => response.json())
        .then(data => {this.assignments = data})
    },
    computed: {
        filters() {
            return {
                completed: this.assignments.filter(assignment => assignment.completed),
                inProgress: this.assignments.filter(assignment => !assignment.completed),

            }
        }
    }, 
    methods: {
        submitForm(newTask){
            console.log(newTask);
            this.assignments.push({title: newTask, completed: false, tag: 'science'});
            
        }
    }

    // computed: {
    //     completed(){
    //         return this.assignments.filter(assignment => assignment.completed);
    //     } ,
    //     inProgress(){
    //         return this.assignments.filter(assignment => !assignment.completed);
    //     }
    // }
}

