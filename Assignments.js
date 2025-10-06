import AssignmentLists from "./AssignmentLists.js"

export default {
    components: {
        'assignment-lists': AssignmentLists
    },
    template: `
            <assignment-lists title="Completed Assignments" :assignments="filters.completed" />
            <assignment-lists title="InProgress Assignments" :assignments="filters.inProgress" />
            <form @submit.prevent="submitForm" class="border border-gray-300 rounded-md p-1 bg-gray-300">
                <input v-model="newTask" class="bg-white p-1 mr-2 rounded-md" type="text" placeholder="Enter a task..." />
                <button class="bg-gray-500 text-white p-2 rounded-md cursor-pointer hover:bg-gray-400">Submit</button>
            </form>
    `,
    data(){
        return {
            assignments: [
                {title: 'task 1', completed: true, id: 1, tag: 'math'},
                {title: 'task 2', completed: false, id: 2, tag: 'science'},
                {title: 'task 3', completed: true, id: 3, tag: 'history'},
                {title: 'task 4', completed: false, id: 4, tag: 'biology'},
            ],
            newTask: ''
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
        submitForm(){
            this.assignments.push({title: this.newTask, completed: false});
            this.newTask = "";
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

