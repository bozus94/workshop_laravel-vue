const urlData = 'users';

var app = new Vue({
    el: '#appVue',
    created: function () {
        this.getData();
    },
    data: {
        users: []
    },
    methods: {
        getData: function () {
            axios.get(urlData).then(response => {
                this.users = response.data;
            });
        }
    }
});