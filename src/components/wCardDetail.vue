<template>
    <div class="bg-dark">
      <div class="is-desktop">
        <b-card
        overlay
        img-src="https://imgcdn.rri.co.id/__srct/b763d32e20ec5d473fd182b5c78d0964/1062367/8ngbwjnzuq5zrv4orqfbji.jpg?v=1.0.3"
        img-alt="Card Image"
        text-variant="white"
        title="Money Heist"
        img-bottom>
        <b-card-text>
            <div class="modal-close close-trigger" @click="close">
                <b-iconstack font-scale="2" class="mr-1 detail">
                    <b-icon stacked icon="circle" variant="light"></b-icon>
                    <b-icon stacked icon="x" variant="light"></b-icon>
                </b-iconstack>
            </div>
            <b-row class="w-100 mt-3">
                <b-col
                    md="2"
                    sm="6"
                    class="d-flex align-items-center">
                    <b-button class="w-100 " variant="light">
                        <b-icon icon="play-fill" variant="dark" aria-hidden="true"></b-icon> Watch
                    </b-button>
                </b-col>
                <b-col
                    md="4"
                    sm="6"
                    class="mr-2 d-flex align-items-center">
                    <b-iconstack font-scale="2" class="mr-1 detail">
                        <b-icon stacked icon="circle" variant="light"></b-icon>
                        <b-icon stacked icon="plus" variant="light"></b-icon>
                    </b-iconstack>
                    <b-iconstack font-scale="2" class="mr-1 detail">
                        <b-icon stacked icon="hand-thumbs-up" variant="light"></b-icon>
                    </b-iconstack>
                    <b-iconstack font-scale="2" class="detail">
                        <b-icon stacked icon="hand-thumbs-down" variant="light"></b-icon>
                    </b-iconstack>
                </b-col>
            </b-row>

            <div class="subinfo">
                <b-row class="w-100 mt-5">
                    <b-col
                      cols="8">
                      <div class="f14 d-flex justify-content-between w-50">
                        <span class="text-success">12/20</span>
                        <span>2020</span>
                        <b-badge variant="danger" class="border-light border-solid border-sm">Hot</b-badge>
                        <span>5 Seasons</span>
                      </div>
                    </b-col>
                    <b-col
                      cols="4">
                      <div class="f14 cast-info">
                        <span class="text-secondary">
                          Cast :
                        </span>
                        <span>Úrsula Corberó, Álvaro Morte, Itziar Ituño</span>
                      </div>
                    </b-col>
                </b-row>
            </div>
        </b-card-text>
        </b-card>
        <b-row class="mx-0 bg-black text-light">
            <b-col cols="8" class="mr-6-min pr-0">
                <div class="f14 mt-3">
                <p class="w-75">An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain. </p>          
                </div>
            </b-col>
            <b-col cols="4" class="px-0">
                <div class="pt-3 f14 genre-info">
                    <span class="text-secondary">
                        Genre :
                    </span>
                    <span>Actions, Crime, Mystery</span>
                </div>
                <div class="pt-3 f14 genre-info">
                    <span class="text-secondary">
                        TV programme is :
                    </span>
                    <span>Dark, Omni light</span>
                </div>
            </b-col>
        </b-row>
        <b-row
            class="mx-0 bg-black text-light pb-3">
            <b-col
            cols="9"
            class="f24">
            <strong>Episodes</strong>
            </b-col>
            <b-col
            cols="3"
            class="mr-0 text-right">
                <b-form-select v-model="selected" :options="options" class="border-radius-sm bg-dark text-light p-1 w-100" ></b-form-select>
            </b-col>
        </b-row>
        <div class="bg-black px-3 pb-4">
            <div class="p-4 bg-dark">
                <w-card-episodes
                    v-for="(item, index) in filteredEpisodes"
                    :key="index"
                    :details="item" />
            </div>
        </div>
      </div>
      <div class="is-mobile">
        <b-card
        overlay
        img-src="https://imgcdn.rri.co.id/__srct/b763d32e20ec5d473fd182b5c78d0964/1062367/8ngbwjnzuq5zrv4orqfbji.jpg?v=1.0.3"
        img-alt="Card Image"
        text-variant="white"
        title="Money Heist"
        img-bottom>
            <b-card-text>
                <div class="modal-close close-trigger" @click="close">
                    <b-iconstack font-scale="2" class="mr-1 detail">
                        <b-icon stacked icon="circle" variant="light"></b-icon>
                        <b-icon stacked icon="x" variant="light"></b-icon>
                    </b-iconstack>
                </div>
                <b-button class="w-100 mt-2" variant="light">
                    <b-icon icon="play-fill" variant="dark" aria-hidden="true"></b-icon> Watch
                </b-button>
            </b-card-text>
        </b-card>
        <div class="bg-black">
            <!-- <b-row class="w-100 mt-3">
                <b-col
                    cols="12"
                    class="d-flex align-items-center justify-content-around w-50">
                    <b-iconstack font-scale="2" class="mr-1 detail">
                        <b-icon stacked icon="circle" variant="light"></b-icon>
                        <b-icon stacked icon="plus" variant="light"></b-icon>
                    </b-iconstack>
                    <b-iconstack font-scale="2" class="mr-1 detail">
                        <b-icon stacked icon="hand-thumbs-up" variant="light"></b-icon>
                    </b-iconstack>
                    <b-iconstack font-scale="2" class="detail">
                        <b-icon stacked icon="hand-thumbs-down" variant="light"></b-icon>
                    </b-iconstack>
                </b-col>
            </b-row> -->

            <div class="subinfo">
                <b-row class="w-100">
                    <b-col
                      cols="12"
                      class=" my-3">
                      <div class="f14 d-flex justify-content-between w-100 text-light">
                        <span class="text-success">12/20</span>
                        <span>2020</span>
                        <b-badge variant="danger" class="border-light border-solid border-sm">Hot</b-badge>
                        <span>5 Seasons</span>
                      </div>
                    </b-col>
                </b-row>
            </div>
        </div>
        <b-row class="mx-0 bg-black text-light">
            <b-col cols="12" class="mr-6-min pr-0">
                <div class="f14 mt-3">
                    <p class="w-75">An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the  Royal Mint of Spain. </p>
                    <div class="f14 cast-info">
                        <span class="text-secondary">
                        Cast :
                        </span>
                        <span class="text-light">Úrsula Corberó, Álvaro Morte, Itziar Ituño</span>
                    </div>
                    <div class="pt-3 f14 genre-info">
                        <span class="text-secondary">
                            Genre :
                        </span>
                        <span  class="text-light">Actions, Crime, Mystery</span>
                    </div>
                    <div class="pt-3 f14 genre-info">
                        <span class="text-secondary">
                            TV programme is :
                        </span>
                        <span class="text-light">Dark, Omni light</span>
                    </div>        
                </div>
            </b-col>
        </b-row>
        <b-row
            class="mx-0 bg-black text-light pt-5 pb-3">
            <b-col
            cols="6"
            class="f24">
            <strong>Episodes</strong>
            </b-col>
            <b-col
            cols="6"
            class="mr-0 text-right">
                <b-form-select v-model="selected" :options="options" class="border-radius-sm bg-dark text-light p-1 w-100" ></b-form-select>
            </b-col>
        </b-row>
        <div class="bg-black px-0 pb-4">
            <div class="p-0 bg-dark">
                <w-card-episodes
                    v-for="(item, index) in filteredEpisodes"
                    :key="index"
                    :details="item" />
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import wCardEpisodes from './wCardEpisodes';
export default {
    components: {
        wCardEpisodes,
    },
    data(){
        return {
            selected: 1,
            options: [
                {
                    text: 'Season 1',
                    value: 1,
                },
                {
                    text: 'Season 2',
                    value: 2,
                },
            ],
            episodes_list: [
                {
                    id: 2231,
                    title: 'Efectuar lo acordado',
                    overview: 'The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.',
                    rating: 8.3,
                    total_voters: '7,507',
                    img: 'https://m.media-amazon.com/images/M/MV5BZTdiN2U3YjctMmMwYy00YzBhLWEyMWUtNTM0MzQ3N2NkODgzXkEyXkFqcGdeQXVyNjI4MTY4MjA@._V1_UY126_CR6,0,224,126_AL_.jpg',
                    duration: 23.5,
                    season: 1,
                    episode: 1,
                },
                {
                    id: 2318,
                    title: 'Imprudencias letales',
                    overview: 'Hostage negotiator Raquel makes initial contact with the Professor. One of the hostages is a crucial part of the thieves plans.',
                    rating: 8.4,
                    total_voters: '6,453',
                    img: 'https://m.media-amazon.com/images/M/MV5BNDM5ZDE0ZTYtOWQxYy00Yzc3LTg1YTQtNzFiM2YyOTExNDk0XkEyXkFqcGdeQXVyNjI4MTY4MjA@._V1_UY126_CR4,0,224,126_AL_.jpg',
                    duration: 23.7,
                    season: 1,
                    episode: 2,
                },
                {
                    id: 3921,
                    title: 'Errar al disparar',
                    overview: 'Police grab an image of the face of one of the robbers. Raquel is suspicious of the gentleman she meets at a bar.',
                    rating: 8.2,
                    total_voters: '6,018',
                    img: 'https://m.media-amazon.com/images/M/MV5BMmQ1YTY5YWItMmI2NC00N2JhLWI5ODUtYmIxZDdiODliZjE1XkEyXkFqcGdeQXVyNzE5ODM5NTY@._V1_UY126_CR0,0,224,126_AL_.jpg',
                    duration: 23.5,
                    season: 1,
                    episode: 3,
                },
                {
                    id: 2231,
                    title: 'Caballo de Troya',
                    overview: 'Raquel is adversely affected by a personal crisis with her ex-husband. The hostages are afraid of the sound of gunshots they heard. Thieves argue among themselves.',
                    rating: 8.3,
                    total_voters: '5,747',
                    img: 'https://m.media-amazon.com/images/M/MV5BZjVjZjc4MTgtNzc5Ny00MTk2LWFjMTEtYWJiNTAwYTJlMTYwXkEyXkFqcGdeQXVyNjI4MTY4MjA@._V1_UY126_CR5,0,224,126_AL_.jpg',
                    duration: 23.8,
                    season: 1,
                    episode: 4,
                },
                {
                    id: 2231,
                    title: 'Se acabaron las máscaras',
                    overview: 'The police finds the house where The Professor has planned everything. Tokyo and Berlin are fighting about how to proceed.',
                    rating: 8.6,
                    total_voters: '5,801',
                    img: 'https://m.media-amazon.com/images/M/MV5BNGM3NmFiMDUtNWJjMS00YjhiLWEzZjAtOTM3NGMxYjIwNGExXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY126_CR0,0,224,126_AL_.jpg',
                    duration: 23.3,
                    season: 2,
                    episode: 1,
                },
                {
                    id: 2318,
                    title: 'La cabeza del plan',
                    overview: 'Tokyo is questioned by the police. The Professor and Raquels ex-husband are getting into a fight.',
                    rating: 8.4,
                    total_voters: '4,899',
                    img: 'https://m.media-amazon.com/images/M/MV5BZWU1ODQyMTUtM2YxNy00NjhiLWJkYTktODc5OGI5NjI3YjEzXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY126_UX224_AL_.jpg',
                    duration: 23.7,
                    season: 2,
                    episode: 2,
                },
                {
                    id: 3921,
                    title: 'Cuestión de eficacia',
                    overview: 'The hostages are trying to execute an outbreak, while things are escalating between the robbers. Will The Professor make his call in time?',
                    rating: 8.7,
                    total_voters: '6,018',
                    img: 'https://m.media-amazon.com/images/M/MV5BMjAxNjFhNzQtOWNjYy00YjY5LWJmMDQtMDZhNWI1NTM3NDU5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UX224_CR0,0,224,126_AL_.jpg',
                    duration: 23.5,
                    season: 2,
                    episode: 3,
                },
                {
                    id: 2231,
                    title: '¿Qué hemos hecho?',
                    overview: 'Raquel is discovering the identity of The Professor. The tension inside the House of national Stamp and Currency is rising.',
                    rating: 8.3,
                    total_voters: '4,959',
                    img: 'https://m.media-amazon.com/images/M/MV5BN2MwMDMzNjctY2MzNy00NTEzLWJhNmUtMDEzZWY3YzkwZWViXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY126_UX224_AL_.jpg',
                    duration: 23.4,
                    season: 2,
                    episode: 4,
                },
            ]
        };
    },
    computed: {
        filteredEpisodes() {
            const vm = this;
            const filtered = this.episodes_list.filter((item) => {
                return item.season === vm.selected;
            });

            return filtered;
        },
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>
<style scoped>
.border-radius-sm {
    border-radius: 6px !important;
}

.mr-6-min {
    margin-right: -6px;
}

.card {
    border: none;
    overflow: hidden;
    border-radius: 0px;
}

.card .card-title {
    font-size: 50px;
    margin-top: 7%;
}

.card-img-overlay {
    top: 40%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 33%, rgba(0,0,0,0.0032387955182072714) 83%);
    animation: forwards 1s up;
    border-radius: 0;
}

.close-trigger {
    top: -60%; right: 10px; position: absolute;
    cursor: pointer;
}

@media only screen and (max-width: 768px){
    .card .card-title {
        font-size: 30px;
        margin-top: 7%;
    }

}
</style>