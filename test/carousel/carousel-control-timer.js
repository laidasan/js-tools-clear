const carouselControlTimer = {
    props: {
        total: {
            type: Number,
            required: true
        },
        active: {
            type: Number,
            required: true
        },
        islock: {
            type: Boolean,
            required: true
        },
        isStart: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            width: 0
        }
    },
    mounted() {
        console.log(this.isStart)
    },
    template: 
    `
    <div class="carousel__control__timer">
        <ul class="carousel__control__timer-list" v-if="total">
            <li v-for="n in total" 
            :key="n + 'li'"
            :class="{active: !isStart ? false : active === n - 1}"
            ref="timerItem">
            <div class="bar"></div
            ></li>
        </ul>
    </div>
    `,
    methods: {
        setWidth(index) { 
            return `${index === this.active ? 'width:100%;' : ''}`
        }
    }
}

export default carouselControlTimer