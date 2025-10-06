import EachAssignment from './EachAssignment.js'
export default {
    components: {
        'each-assignment': EachAssignment
    },
    template: `
        <section v-if="assignments.length" class="mb-2">
            <ul class="border  border-black rounded-lg p-2">
                <h2 class="font-bold text-center mb-2"> {{ title }} </h2>
                <span @click="changeTag(tag)" 
                    class="mr-2 border border-gray-200 hover:border-gray-400 cursor-pointer rounded-sm p-1 text-small hover:bg-gray-200" 
                    v-for="tag in tags"
                    :class="{
                        'border-green-900 hover:border-green-900': tag === currentTag
                    }"
                >
                    {{ tag }} 
                </span>
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