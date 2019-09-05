// import Imput from './components/Imput.js'

const app = new Vue({
    el: '#app',
    // components: {
    //     Imput
    // },
    data: {
        lists: []
    },
    methods: {
        addList() {
            const newList = {
                name: '',
                status: 'creating',
                cards: []
            }
            this.lists.push(newList)
        },
        saveList(list){
            list.status = 'saved'
        },
        removeList(index){
            this.lists.splice(index, 1)
        },
        addCard(list) {
            const newCard = {
                title: '',
                if: false
            }
            list.cards.push(newCard)
        },
        removeListCard(indexList, index){
            this.lists[indexList].cards.splice(index, 1)
        },
        editCard(event){
            const button = event.target
            const cardContainer = button.closest('#cardContainer') // Buscamos al elemento mas cercano con el id carContainer del evento que dispara el evento

            const input = cardContainer.querySelector('input') // Buscamos un input dentro de cardContainer
            input.readOnly = false // Modificamos el elemento artributo readonly
         console.log(cardContainer)
        }
    }
})