app.component('photo-search', {
    props: {
        form: Object
    },
    // emits: ['update:textsearch'],
    template:
    /*html*/  
    `
    <div class="max-w-2xl mx-auto p-8">
    <span :class="{'hidden' : form.showSearchBox }"><i class="fas fa-search fa-2x" @click="showSearch" ></i></span>
    <span :class="{'hidden' : !form.showSearchBox}">
        <input class="flex-1 p-2 bg-white border-b-2 border-blue-200 rounded"
            placeholder="Please enter text for searching photos" v-model="form.searchText">
            <button  @click="CancleSearch"
            class="bg-blue-300 box-border p-3  ml-5">cancel</button>
    </span>
  </div>
    `,
    methods: { 
    showSearch(){
        this.form.showSearchBox =!this.form.showSearchBox;
      },
      CancleSearch(){
        this.form.showSearchBoxVar = !this.form.showSearchBoxVar;
        this.form.searchText = '';
      }
    }
});