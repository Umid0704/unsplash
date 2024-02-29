import { create } from "zustand";
import axiosClient from "./api";
const useImageStore=create((set)=>({
    image:[],
    getImg: async (payload)=>{
        try{
            
            console.log(payload)
            const response = await axiosClient.get(`search/photos?query=${payload?.searchImage}&page=1&per_page=30&client_id=am99euoh1zYazFvkiuWRAZGCn8c8SWxSry_9Y3VvoKs`)
            set({image: response?.data?.results })
            // set((state)=>({image:[...state.p]}))

        }catch(err){
            
            console.error(err)
        }
    },
    getLike: async (payload)=>{
        try{
            
            console.log(payload)
            const response = await axiosClient.post(`/photos/${payload?.id}/like?client_id=am99euoh1zYazFvkiuWRAZGCn8c8SWxSry_9Y3VvoKs`)
            set({image: response?.data?.results })
            // set((state)=>({image:[...state.p]}))

        }catch(err){
            
            console.error(err)
        }
    },

  
}))
export default useImageStore