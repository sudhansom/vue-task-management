import EachAssignment from './EachAssignment.js'
import AssignmentTags from './AssignmentTags.js';

export default {
    components: {
        'each-assignment': EachAssignment,
        'assignment-tags': AssignmentTags
    },
    template: `
        <section v-if="assignments.length" class="mb-2">
            <ul class="border  border-black rounded-lg p-2">
                <h2 class="font-bold text-center mb-2"> {{ title }} </h2>
                <assignment-tags @changeTag="currentTag = $event" :tags="tags" :current-tag="currentTag" />
                <hr class="border-none mt-2" />
                <li v-for="assignment in assignments" :key="assignment.id">
                    <each-assignment :assignment="assignment" />
                </li>  
            </ul>
        </section>
    `,
    data(){
        return {
            currentTag: 'all',
        }
    },
    props: {
        title: String,
        assignments: Array,
    },
    computed: {
        tags(){
            return new Set(['all', ...this.assignments.map(assignment => assignment.tag)]);
        }
    },
    methods: {
        changeTag(tag){
            this.currentTag = tag;
        }
    }
}