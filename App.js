import Assignments from "./Assignments.js"
import TabbableTextarea from "./TabbableTextarea.js"

export default {
    components: {
        Assignments,
        'tabbable-textarea': TabbableTextarea
    },
    template: `
        <assignments />
        <tabbable-textarea />
    `,
    data(){
        return {
        title: "Task Management"
       }
    }
}