<template>
  <div class="home mt-5 mb-5">
    <w-carousel
      :id="3"
      :data_list="data_set"
      :title="'Most Popular on Webflix'"
      class="main-section"
      @open="openDetail" />
    <w-carousel
      :id="1"
      :data_list="data_set"
      :title="'Action & Crimes'"
      @open="openDetail" />
    <w-carousel
      :id="5"
      :data_list="data_set"
      :title="'TV Series'"
      @open="openDetail" />
    <w-carousel
      :id="4"
      :data_list="data_set"
      :title="'Love & Emotions'"
      @open="openDetail" />
    <b-modal
      id="detail-modal"
      ref="detailModal"
      size="lg"
      centered
      no-close-on-backdrop
      no-close-on-esc>
      <w-card-detail @close="closeDetail" />
    </b-modal>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';
import wCardDetail from '@/components/wCardDetail';
import wCarousel from '@/components/wCarousel';
export default {
  name: 'Home',
  data() {
    return {
      setting: {
        autoplay: false,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2.5,
              infinite: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1.3,
              infinite: false,
            }
          }
        ],
      },
    }
  },
  components: {
    wCardDetail,
    wCarousel,
  },
  computed: {
    ...mapState('wStoreHome', ['data_set']),
  },
  mounted() {
    this.getHome();
    this.scrollx_pos = document.getElementById('slider-box').scrollLeft;
  },
  methods: {
    ...mapActions('wStoreHome', ['getHome']),

    openDetail() {
      this.$refs.detailModal.show();
    },

    closeDetail() {
      this.$refs.detailModal.hide();
    },
  }
}
</script>
<style scoped>
.slick-slide {
    padding: 0 10px !important;
}

.slick-list {
    overflow: unset !important;
}


</style>