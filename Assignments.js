export default {
    template: `
            <section>
                <ul>
                    <li v-for="assignment in completed" :key="assignment.id">{{ assignment.title}}</li>  
                </ul>
            </section>
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
        completed(){
            return this.assignments.filter(assignment => assignment.completed);
        } ,
        inProgress(){
            return this.assignments.filter(assignment => !assignment.completed);
        }
    }
}

