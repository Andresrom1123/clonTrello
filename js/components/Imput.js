export default {
    template: `
    <div class="d-flex">
        <div class="col-10 pr-1">
            <input v-model="title" class="form-control"
                placeholder="descpricion de la tarjeta">
        </div>
        <div class="">
            <button class="btn btn-danger" @click="$emit('remove')">
                X
            </button>
        </div>
    </div>`,
    props: ['title']
}