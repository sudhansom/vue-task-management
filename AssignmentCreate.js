export default {
    template: `
    <form @submit.prevent="add" class="flex justify-between border border-gray-300 rounded-md p-1 bg-gray-300">
        <input v-model="newTask" class="flex-grow bg-white p-1 mr-2 rounded-md" type="text" placeholder="Enter a task..." />
        <button type="submit" class="bg-gray-500 text-white p-2 rounded-md cursor-pointer hover:bg-gray-400">Submit</button>
    </form>
    `,
    data(){
        return {
            newTask: ''
        }
    },
    methods: {
        add(){
            if(this.newTask.trim() !== ''){
                this.$emit('add', this.newTask);
                this.newTask = "";
            }
        }
    }
}