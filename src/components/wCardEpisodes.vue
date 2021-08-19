<template>
    <div>
       <div class="is-desktop">
        <b-card v-if="details" :img-src="details.img" img-alt="Card image" img-left class="mt-2 bg-dark text-light border-radius-sm">
            <b-card-text>
                <div class="f24">Ep {{ details.episode }} : {{ details.title }}<span class="f12 mx-2 float-right text-secondary">{{ details.duration }} Mins</span></div>
                <div class="d-flex f10 align-items-center">
                    <span>{{ details.rating }}</span>
                    <b-icon icon="star-fill" variant="warning" font-scale="1.2" class="mx-1" aria-hidden="true"></b-icon>
                    <span class="ml-1">({{ details.total_voters }})</span>
                </div>
                <p class="f14 mt-3">{{ details.overview }}</p>
                <b-button class="" variant="light">
                    <b-icon icon="play-fill" variant="dark" aria-hidden="true"></b-icon> Watch
                </b-button>
                
            </b-card-text>
        </b-card>
       </div>
       <div class="is-mobile">
         <b-card v-if="details" :img-src="details.img" img-alt="Card image" img-top class="mt-2 bg-dark text-light border-radius-sm">
            <b-card-text>
                <div class="f24">Ep {{ details.episode }} : {{ details.title }}<span class="f12 mx-2 float-right text-secondary">{{ details.duration }} Mins</span></div>
                <div class="d-flex f10 align-items-center">
                    <span>{{ details.rating }}</span>
                    <b-icon icon="star-fill" variant="warning" font-scale="1.2" class="mx-1" aria-hidden="true"></b-icon>
                    <span class="ml-1">({{ details.total_voters }})</span>
                </div>
                <p class="f14 mt-3">{{ details.overview }}</p>
                <b-button class="" variant="light">
                    <b-icon icon="play-fill" variant="dark" aria-hidden="true"></b-icon> Watch
                </b-button>
                
            </b-card-text>
        </b-card>
       </div>
    </div>
</template>
<script>
export default {
    name: 'cardEpisodes',
    props: {
        details: {
            type: Object,
            default() {
                return {};
            }
        }
    }
}
</script>
