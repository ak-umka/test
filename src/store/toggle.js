import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => collapsed.value = !collapsed.value

export const SIDEBAR_WITDH = 200
export const SIDEBAR_COLLAPSED_WIDTH = 30
export const sidebarWidth = computed(() => `${collapsed.value ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WITDH}px`)