export default {
    template: `
    <span 
        class="mr-2 border border-gray-200 hover:border-gray-400 cursor-pointer rounded-sm p-1 text-small hover:bg-gray-200" 
        v-for="tag in tags"
        :class="{
            'border-green-900 hover:border-green-900': tag === currentTag
        }"
        @click="$emit('changeTag', tag)" 
    >
        {{ tag }}
    </span>
    `,
    props: {
        tags: Array,
        currentTag: 'all'
    },
    methods: {
        changeTag(){
            this.$emit(changeTag, tag)
        }
    }

}