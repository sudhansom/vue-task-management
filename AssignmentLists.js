import EachAssignment from './EachAssignment.js'
import AssignmentTags from './AssignmentTags.js';

export default {
    components: {
        'each-assignment': EachAssignment,
        'assignment-tags': AssignmentTags
    },
    template: `
        <section v-if="show && assignments.length" class="w-80 mb-2">
            <ul class="border mb-2  border-black rounded-lg p-2">
                <h2 class="font-bold mb-2 flex justify-between"> {{ title }} 
                    <span v-if="showCross" @click="show=false" class="cursor-pointer hover:text-gray-600">X</span>
                </h2>
                <assignment-tags :tags="tags" v-model:currentTag="currentTag" />
                <hr class="border-none mt-2" />
                <li v-for="assignment in filteredAssignments" :key="assignment.id">
                    <each-assignment :assignment="assignment" />
                </li>  
            </ul>
            <slot />
        </section>
    `,
    data(){
        return {
            currentTag: 'all',
            show: true,
        }
    },
    props: {
        title: String,
        assignments: Array,
        showCross: Boolean
    },
    computed: {
        filteredAssignments(){
            if(this.currentTag === 'all'){
                return this.assignments
            }
            return this.assignments.filter(assignment => assignment.tag === this.currentTag)
        },
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