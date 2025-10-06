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
            assignments: [
                {title: 'task 1', completed: true, id: 1, tag: 'math'},
                {title: 'task 2', completed: false, id: 2, tag: 'science'},
                {title: 'task 3', completed: true, id: 3, tag: 'history'},
                {title: 'task 4', completed: false, id: 4, tag: 'biology'},
            ],
        }
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

