export default {
    template: `
            <section>
                <ul>
                    <h2> Completed Assignments </h2>
                    <li v-for="assignment in filters.completed" :key="assignment.id">{{ assignment.title}}</li>  
                </ul>
            </section>

            <section>
                <ul>
                    <h2> In Progress Assignments </h2>
                    <li v-for="assignment in filters.inProgress" :key="assignment.id">{{ assignment.title}}</li>  
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
        filters() {
            return {
                completed: this.assignments.filter(assignment => assignment.completed),
                inProgress: this.assignments.filter(assignment => !assignment.completed),

            }
        }
    }
}

