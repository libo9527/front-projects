import axios from 'axios'
import { ref } from 'vue'

function useUrlLoader<T>(url: string) {
    const result = ref<T | null>(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)

    axios.get(url).then((rawData) => {
        loading.value = false
        loaded.value = true
        result.value = rawData.data
    }).catch(e => {
        error.value = e
    })
    
    return {
        result,
        loading,
        loaded,
        error
    }
}

export default useUrlLoader