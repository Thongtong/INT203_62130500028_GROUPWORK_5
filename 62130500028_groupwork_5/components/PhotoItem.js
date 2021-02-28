app.component('photo-item', {
    props: {
        picture: Object,
    },
    template:
        /*html*/
        `
        <div class="flex flex-row space-x-5">
        <button @click="tapFav(picture)" @dblclick=" tapView(picture)"><img v-bind:src="picture.path" width="100" height="1000"></button>
            <div class="mt-10">
                <p>{{ picture.description }}</p>
            </div>
            <span v-show="picture.showFav" style="color: red;" class="material-icons mt-10">
                favorite
            </span>
        </div> 
    `,
    data() {
        return {}
    },
    methods: {
        tapFav(picture) {
            this.$emit('show-fav', picture);
        },
        tapView(picture) {
            console.log(picture)
            this.$emit('toggle-view', picture);
        }
    }
});