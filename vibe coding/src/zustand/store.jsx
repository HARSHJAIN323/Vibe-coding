import { create } from "zustand";

const useStore = create((set) => ({
    user: null,

    showPlans: false,

    setShowPlans: (value) => set({ showPlans: value }),
    setUser: (data) => set({ user: data })
}
));

export default useStore;