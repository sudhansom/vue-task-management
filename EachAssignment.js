export default {
    template: `
        <div class="flex gap-2 justify-between border border-gray-100 bg-gray-100 rounded-md mb-2 p-1 ">
            <p>{{ assignment.title }}</p>
            <input type="checkbox" v-model="assignment.completed" />
        </div>
    `,
    props: {
        assignment: Object,
    }
}