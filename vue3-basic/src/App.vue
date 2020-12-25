<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Suspense> 
      <template #default>
        <async-show />
        <dog-show />
      </template>
      <template #fallback>
        <h1>Loading ! ...</h1>
      </template>
    </Suspense>
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <ul>
      <li v-for="number in numbers" :key="number"><h1>{{ number }}</h1></li>
    </ul>
    <h1>{{ person.name }}</h1>
    <button @click="openModal">Open Modal</button>
    <h1 v-if="loading">Loading!</h1>
    <!-- <img v-if="loaded" :src="result.message"> -->
    <img v-if="loaded" :src="result[0].url">
    <button @click="increase">+1</button>
    <modal :isOpen="modalIsOpen" @close-modal="onCloseModal">My Modal</modal>
  </div>
  
</template>

<script lang="ts">
import { computed, reactive, ref, toRefs, watch } from 'vue'
import useUrlLoader from './hooks/useUrlLoader'
import Modal from './components/Modal.vue'
import AsyncShow from './components/AsyncShow.vue'
import DogShow from './components/DogShow.vue'

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string };
}
interface DogResult{
  message: string;
  status: string;
}
interface CatResult{
  id: string;
  url: string;
  width: number;
  height: number;
}
export default {
  components: { Modal, AsyncShow, DogShow },
  name: 'App',
  setup () {
    // const count = ref(0)
    // const double = computed(() => {
    //   return count.value*2
    // }) 
    // const increase = () => {
    //   return count.value++
    // }
    const data: DataProps = reactive({
      count: 0,
      increase: () => { data.count++ },
      double: computed(() => data.count * 2 ),
      numbers: [0, 1, 2],
      person: {}
    })
    data.numbers[0] = 5,
    data.person.name = 'aaa'
    const refData = toRefs(data)
    // const { result, loading, loaded, error } = useUrlLoader('https://dog.ceo/api/breeds/image/random')
    const { result, loading, loaded, error } = useUrlLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(result, () => {
      if(result.value){
        console.log('value', result.value[0].url)
      }
    })
    const modalIsOpen = ref(false)
    const openModal = () => {
      modalIsOpen.value = true
    }
    const onCloseModal = () => {
      modalIsOpen.value = false
    }
    return {
        // count,
        // increase,
        // double
        ...refData,
        result,
        loading,
        loaded,
        error,
        modalIsOpen,
        openModal,
        onCloseModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
