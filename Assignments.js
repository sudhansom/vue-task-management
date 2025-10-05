import AssignmentLists from "./AssignmentLists.js"

export default {
    components: {
        'assignment-lists': AssignmentLists
    },
    template: `
            <assignment-lists title="Completed Assignments" :assignments="filters.completed" />
            <assignment-lists title="InProgress Assignments" :assignments="filters.inProgress" />
    `,
    data(){
        return {
            assignments: [
                {title: 'task 1', completed: true, id: 1},
                {title: 'task 2', completed: false, id: 2},
                {title: 'task 3', completed: true, id: 3},
                {title: 'task 4', completed: false, id: 4},
            ]
        }
    },
    computed: {
        filters() {
            return {
                completed: this.assignments.filter(assignment => assignment.completed),
                inProgress: this.assignments.filter(assignment => !assignment.completed),

            }
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

