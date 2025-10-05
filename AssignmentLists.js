import EachAssignment from './EachAssignment.js'
export default {
    components: {
        'each-assignment': EachAssignment
    },
    template: `
        <section v-if="assignments.length" class="mb-2">
            <ul class="border  border-black rounded-lg p-2">
                <h2 class="font-bold text-center mb-2"> {{ title }} </h2>
                <li v-for="assignment in assignments" :key="assignment.id">
                    <each-assignment :assignment="assignment" />
                </li>  
            </ul>
        </section>
    `,
    props: {
        title: String,
        assignments: Array,
    }
}