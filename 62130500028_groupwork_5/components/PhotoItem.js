app.component('photo-item', {
    props: {
        index: Object,
    },
    template:
        /*html*/
        `
        <div class="flex flex-row space-x-5">
        <button @click="tapFav(index)" @dblclick=" tapView(index)">
                    <img v-bind:src="pictures.path" width="100" height="1000">
                </button>
        <button @click="tapView(index)" >
                    <img v-bind:src="pictures.path" width="100" height="1000">
                </button>
            <div class="mt-10">
                <p>{{ pictures.description }}</p>
            </div>
            <span v-show="pictures.showFav" style="color: red;" class="material-icons mt-10">
                favorite
            </span>
        </div> 
    `,
    data() {
        return {}
    },
    methods: {
        tapFav(index) {
            this.$emit('show-fav', index);
        },
        tapView(index) {
            console.log(index)
            this.$emit('toggle-view', index);
        }
    }
});