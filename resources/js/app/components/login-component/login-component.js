import axios from "axios";

export default {
    name: "login-component",
    components: {},
    props: [],
    data() {
        return {
            login: {
                email: "",
                password: ""
            },
            errors: []
        };
    },
    computed: {},
    mounted() {},
    methods: {
        handleFormSubmit(event) {
            let credentials = new FormData();
            credentials.append('credentials', this.login);

            axios
                .post("/api/login", credentials)
                .then(response => {})
                .catch(e => {
                    this.errors.push(e);
                });
        }
    }
};
