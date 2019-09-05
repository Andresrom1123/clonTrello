var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola mundo',
    name: '',
    showHola: false,
    users: [
      {name: 'Andres'},
      {name: 'Carlos'},
      {name: 'Romero'}
    ]
  },
  methods: {
    hola(value){
      alert('Hola a ' + value)
    },
    saludo(){
      const erik = this.users[0]
      alert(`Saludamos a ${erik.name}`)
    }
  }
})