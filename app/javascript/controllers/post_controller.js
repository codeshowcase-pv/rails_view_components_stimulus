import { Controller } from 'stimulus'

export default class extends Controller {

    static values = {id: Number}

    delete() {
        window.axios.delete(`post/${this.idValue}`)
            .then(() => {
                window.location.href = '/'
            });
    }
}
