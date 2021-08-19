<template>
    <div
        class="card-box pr-3" 
        v-if="details">
        <b-card 
          :img-src="details.backdropURLs.original"
          img-alt="Card image"
          bg-variant="dark"
          overlay
          img-top>
          <b-card-text>
            <div class="">
                <strong class="f14">{{ details.originalTitle }} ({{ details.year }})</strong><br>
                <small class="text-success f10">{{ details.imdbRating }} / {{ details.imdbVoteCount }}&nbsp;</small>
                <small class="f10">•</small>
                <!-- <small>&nbsp; {{ details.runtime }} mins</small> -->
                <small class="f10">&nbsp; SE{{ details.seasons }}EP{{ details.episodes }}</small>
            </div>
            <div class="is-desktop">
                <b-row class="mt-3">
                    <b-col
                        md="1"
                        sm="6"
                        class="mr-2">
                        <b-iconstack font-scale="1.2" class="detail">
                            <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                            <b-icon stacked icon="play-fill" variant="dark"></b-icon>
                        </b-iconstack>
                    </b-col>
                    <b-col
                        md="1"
                        sm="6"
                        class="mr-2">
                        <b-iconstack font-scale="1.2" class="detail">
                            <b-icon stacked icon="circle" variant="light"></b-icon>
                            <b-icon stacked icon="plus" variant="light"></b-icon>
                        </b-iconstack>
                    </b-col>
                    <b-col
                        md="1"
                        sm="6"
                        class="mr-2">
                        <b-iconstack font-scale="1.2" class="detail">
                            <b-icon stacked icon="hand-thumbs-up" variant="light"></b-icon>
                        </b-iconstack>
                    </b-col>
                    <b-col
                        md="1"
                        sm="6">
                        <b-iconstack font-scale="1.2" class="detail">
                            <b-icon stacked icon="hand-thumbs-down" variant="light"></b-icon>
                        </b-iconstack>
                    </b-col>
                    <b-col
                        md="4"
                        sm="6"
                        class="text-right"
                        @click="open()">                
                        <b-iconstack font-scale="1.5" class="detail">
                            <b-icon stacked icon="chevron-down" variant="light"></b-icon>
                        </b-iconstack>
                    </b-col>
                </b-row>
            </div>
            <div class="is-mobile">
                <b-row class="mt-3">
                    <b-col
                        cols="1"
                        class="mr-2">
                        <b-iconstack font-scale="2" class="detail">
                            <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                            <b-icon stacked icon="play-fill" variant="dark"></b-icon>
                        </b-iconstack>
                    </b-col>
                    <b-col
                        cols="1"
                        class="mr-2">
                        <b-iconstack font-scale="2" class="detail">
                            <b-icon stacked icon="circle" variant="light"></b-icon>
                            <b-icon stacked icon="plus" variant="light"></b-icon>
                        </b-iconstack>
                    </b-col>
                    <b-col
                        cols="1"
                        class="mr-2">
                        <b-iconstack font-scale="2" class="detail">
                            <b-icon stacked icon="hand-thumbs-up" variant="light"></b-icon>
                        </b-iconstack>
                    </b-col>
                    <b-col
                        cols="1">
                        <b-iconstack font-scale="2" class="detail">
                            <b-icon stacked icon="hand-thumbs-down" variant="light"></b-icon>
                        </b-iconstack>
                    </b-col>
                    <b-col
                        cols="5"
                        class="text-right"
                        @click="open()">                
                        <b-iconstack font-scale="1.5" class="detail">
                            <b-icon stacked icon="chevron-down" variant="light"></b-icon>
                        </b-iconstack>
                    </b-col>
                </b-row>
            </div>
          </b-card-text>
        </b-card>
    </div>
</template>
<script>
export default {
    props: {
        details: {
            type: Object,
            default() {
                return {}
            },
        }
    },
    methods: {
        open() {
            this.$emit('open');
        }
    }
}
</script>
<style scoped>
.card {
    border: none;
    overflow: hidden;
    border-radius: 10px;
}

.card-box {
    transition: transform .2s;
    position: relative;
    z-index: 1 !important;
}


.card-box:hover {
    transform: scale(1.4);
    position: sticky;
    z-index: 100 !important;
}

.card-body {
    display: none;
}

.card:hover .card-body{
    display: block;
}

.card-img-overlay {
    top: 40%;
    background: rgba(0, 0, 0, 0.8);
    animation: forwards 1s up;
}

.detail{
    cursor: pointer;
}

.detail:hover{
    opacity: .4;
}

@keyframes up {
    0% {
        bottom: -30%;
        top: unset;
    }
    100% {
        bottom: 0%;
        top: unset;
    }
}

@media only screen and (max-width: 768px){
    .card-img-overlay {
        bottom: 0%;
    }

    .card-box:hover {
        transform: scale(1.1);
        position: sticky;
        z-index: 100 !important;
    }

}
</style>