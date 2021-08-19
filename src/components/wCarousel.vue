<template>
    <section>
        <b-container class="position-relative">
            <h3 class="mb-1 is-desktop">{{ title }}</h3>
            <h3 class="mt-4 is-mobile">{{ title }}</h3>
        </b-container>
        <b-container class="position-relative pb-1">
            <div class="is-desktop">
                <b-row :id="'slider-box-'+ id" class="slider-box slick-row main-section flex-no-wrap px-5 pb-5 pt-4 " style="overflow-x: scroll">
                    <div
                    style="width: 260px"
                    v-for="item in data_list"
                    :key="item.id"
                    cols="5">
                    <w-hero-card
                        :details="item"
                        @open="openDetail">
                    </w-hero-card>
                    </div>
                </b-row>
                <div class="w-arrow-prev position-absolute top-0" style="height:85%" @click="slidePrev">
                    <b-iconstack font-scale="1.5" class="slick-w-arrow">
                    <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                    <b-icon stacked icon="caret-left-fill" variant="danger"></b-icon>
                    </b-iconstack>
                </div>
                <div class="w-arrow-next position-absolute top-0" style="height:85%" @click="slideNext">
                    <b-iconstack font-scale="1.5" class="slick-w-arrow">
                    <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                    <b-icon stacked icon="caret-right-fill" variant="danger"></b-icon>
                    </b-iconstack>
                </div>
            </div>
            <div class="is-mobile">
                <b-row :id="'slider-box-'+ id" class="slider-box slick-row main-section flex-no-wrap py-3" style="overflow-x: scroll">
                    <div
                    style="width: 280px"
                    v-for="item in data_list"
                    :key="item.id"
                    cols="5">
                    <w-hero-card
                        :details="item"
                        @open="openDetail">
                    </w-hero-card>
                    </div>
                </b-row>
            </div>
        </b-container>
    </section>
</template>
<script>
import wHeroCard from '@/components/wHeroCard';
export default {
    components: {
        wHeroCard,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        id: {
            type: Number,
            default: 0,
        },
        data_list: {
            type: Array,
            default() {
                return [];
            },
        }
    },
    methods: {
        openDetail() {
            this.$emit('open');
        },
        slideNext() {
            const name = `slider-box-${ this.id }`;
            document.getElementById(name).scrollLeft += 100;
        },

        slidePrev() {
            const name = `slider-box-${ this.id }`;
            document.getElementById(name).scrollLeft -= 100;
        },
    }
}
</script>
<style scoped>
.slider-box::-webkit-scrollbar {
  display: none;
}
</style>