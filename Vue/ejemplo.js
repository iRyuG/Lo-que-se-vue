Vue.component('curso', {
    props: [ 'curso' ],
    methods: {
        onchange: function(ev) {
            this.$emit('checked', this.curso.value, ev.target.checked)
        }
    },
    template: `
        <div>
            <input @change="onchange" type="checkbox" :id="curso.value" :value="curso.value">
            <label :for="curso.value">{{ curso.nombre }}</label>
        </div>
    `
})

let app = new Vue({
    el: '#app',
    data: {
        name: 'MUNDO!!',
        propiedad: "bindeo modelo > vista",
        filtro: "Me están filtrando",
        condicion: true,
        objetos: [
            {name: "objeto 1"},
            {name: "objeto 2"},
            {name: "objeto 3"}
        ],
        contador: 0,
        cursos: [
            { 
                nombre: 'Curso de Vue.js',
                value: 'vue' 
            },
            { 
                nombre: 'Curso de Angular',
                value: 'angular' 
            },
            { 
                nombre: 'Curso de React',
                value: 'react' 
            }
        ],
        cursosSeleccionados: []
    },
    filters: {
        uppercase: str => str.toUpperCase(),
        lowercase: str => str.toLowerCase(),
        capitalize: str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
        reverse: str => str.split("").reverse().join("")
    },
    methods: {
        sumar: function() {
            this.contador++
        },
        restar: function() {
            this.contador--
        },
        submit: function() {
            console.log(this.cursosSeleccionados)
        },
        selectCurso: function(curso, checked) {
            if (checked) {
                this.cursosSeleccionados.push(curso)
            } else {
                let index = this.cursosSeleccionados.indexOf(curso)
                this.cursosSeleccionados.splice(index, 1)
            }
        },
        desaparecer: function(){
            if(this.condicion){
                this.condicion = !this.condicion;
            }else{
                this.condicion = !this.condicion
            }
        }
    }
})