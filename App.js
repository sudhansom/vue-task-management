import Assignments from "./Assignments.js"
export default {
    components: {
        Assignments,
    },
    template: `
        <assignments />

    `,
    data(){
        return {
        title: "Task Management"
       }
    }
}