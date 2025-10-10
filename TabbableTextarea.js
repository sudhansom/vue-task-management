export default {
    template: `
        <h1>Tabbable Text Area</h1>
        <textarea @keydown.tab.prevent="tabbableTextarea" name="textArea" v-model="comment" cols="30" rows="10" class="border border-gray-500 h-20 rounded-md p-2"></textarea>

    `,
    data(){
        return {
            comment: ''
        }
    },
    methods: {
        tabbableTextarea(e){

            let value = e.target.value;

            console.log(value);
        }
    }
}