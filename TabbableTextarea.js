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

            let textarea = e.target;

            let start = textarea.selectionStart;
            let end = textarea.selectionEnd;

            textarea.value = textarea.value.substring(0, start) + "\t" + textarea.value.substring(end);

            textarea.selectionStart = textarea.selectionEnd = start + 1;



            console.log(start, end);
            

            
        }
    }
}