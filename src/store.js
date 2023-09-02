import {create} from "zustand";
import {persist} from "zustand";

const useStore = create(
    persist(()=>({
        code:"",
        title: "Untitled",
        theme: "hyper"
    }))
)