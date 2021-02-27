app.component("photo-views", {
    props: {
        img: String,
        view: Boolean
    },
    template:
        /*html*/
        `
        <div v-show=" view" class=" flex justify-center h-64 max-w-lg top-0 bg-black bg-opacity-50">
        <div class="h-64 m-2 relative">
            <i class="far fa-2x fa-times-circle text-white cursor-pointer absolute inset-y-0 right-0 -m-2 " @click="closebuttom "></i>
            <img :src="img " class="m-6 border border-4 border-white lg:h-5/6">
        </div>
    </div>
   `,
   methods: {
    closebuttom(){
        this.$emit("click-close");
        },
    }
});