const app = Vue.createApp({
    data() {
        return {
            pictures: [{
                    num: 0,
                    path: './images/vue.jpg',
                    description: 'INT203 Client Side Web Programming II',
                    Favorite: false
                },
                {
                    num: 1,
                    path: './images/springframework.jpg',
                    description: 'INT204 Server-side Web Programming II',
                    Favorite: false
                },
                {
                    num: 2,
                    path: './images/mysql.jpg',
                    description: 'INT206 ADVANCED DATABASE',
                    Favorite: false
                },
                {
                    num: 3,
                    path: './images/devops.jpg',
                    description: 'INT 209 DEVOPS',
                    Favorite: false,
                },
                {
                    num: 4,
                    path: './images/ARCHITECTURE.jpg',
                    description: 'INT 210 ARCHITECTURE, INTEGRATION AND DEPLOYMENT',
                    Favorite: false
                }

            ],
            form: {
                showSearchBoxVar: false,
                searchText: ''
            },
            hasView: false,
            viewImg: '',

        }
    },
    methods: {
        showFav(picture) {
            console.log(picture);
            this.pictures[picture.num].showFav = !this.pictures[picture.num].showFav;
            
        },
        toggleView(picture) {
            this.viewImg = this.pictures[picture.num].path;
            this.hasView = true;
        },

        showSearchBox() {
            this.form.showSearchBoxVar = !this.form.showSearchBoxVar;
        },
        showSearchBoxCancel() {
            this.form.showSearchBoxVar = !this.form.showSearchBoxVar;
            this.form.searchText = '';
        },
        close() {
            this.hasView = false;
        }
    },
    computed: {
        countTotal() {
            return this.pictures.length;
        },
        countShow() {
            return this.pictures.filter(s => s.showFav).length;
        },
        search() {
            return this.pictures.filter(searchShow => {
                return searchShow.description.toLowerCase().includes(this.form.searchText.toLowerCase())
            });
        }
    }
});