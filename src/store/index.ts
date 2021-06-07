import { createStore } from "vuex";
import child from "./child";
import home from "./home";

export default createStore({
    modules: {
        home,
        child
    }
})