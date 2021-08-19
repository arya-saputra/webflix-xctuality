<template>
  <div class="home mt-5">
    <b-container class="pb-5">
      <h3 class="mb-2">Most Popular on Webflix</h3>
      <b-row class="slick-row main-section">
        <VueSlickCarousel v-bind="setting">
          <w-hero-card
            v-for="item in data_list"
            :key="item.id"
            :details="item"
            @open="openDetail">
          </w-hero-card>
          <template #prevArrow="">
            <div class="w-arrow-prev">
              <b-iconstack font-scale="1.5" class="slick-w-arrow">
                  <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                  <b-icon stacked icon="caret-left-fill" variant="danger"></b-icon>
              </b-iconstack>
            </div>
          </template>
          <template #nextArrow="">
            <div class="w-arrow-next">
              <b-iconstack font-scale="1.5" class="slick-w-arrow">
                  <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                  <b-icon stacked icon="caret-right-fill" variant="danger"></b-icon>
              </b-iconstack>
            </div>
          </template>
        </VueSlickCarousel>
      </b-row>

      <h3 class="mt-5">Top Actions</h3>
      <b-row class="slick-row">
        <VueSlickCarousel v-bind="setting">
          <w-hero-card
            v-for="item in data_list"
            :key="item.id"
            :details="item"
            @open="openDetail">
          </w-hero-card>
          <template #prevArrow="">
            <div class="w-arrow-prev">
              <b-iconstack font-scale="1.5" class="slick-w-arrow">
                  <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                  <b-icon stacked icon="caret-left-fill" variant="danger"></b-icon>
              </b-iconstack>
            </div>
          </template>
          <template #nextArrow="">
            <div class="w-arrow-next">
              <b-iconstack font-scale="1.5" class="slick-w-arrow">
                  <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                  <b-icon stacked icon="caret-right-fill" variant="danger"></b-icon>
              </b-iconstack>
            </div>
          </template>
        </VueSlickCarousel>
      </b-row>

      <h3 class="mt-5">Most Loving Drama</h3>
      <b-row class="slick-row">
        <VueSlickCarousel v-bind="setting">
          <w-hero-card
            v-for="item in data_list"
            :key="item.id"
            :details="item"
            @open="openDetail">>
          </w-hero-card>
          <template #prevArrow="">
            <div class="w-arrow-prev">
              <b-iconstack font-scale="1.5" class="slick-w-arrow">
                  <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                  <b-icon stacked icon="caret-left-fill" variant="danger"></b-icon>
              </b-iconstack>
            </div>
          </template>
          <template #nextArrow="">
            <div class="w-arrow-next">
              <b-iconstack font-scale="1.5" class="slick-w-arrow">
                  <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                  <b-icon stacked icon="caret-right-fill" variant="danger"></b-icon>
              </b-iconstack>
            </div>
          </template>
        </VueSlickCarousel>
      </b-row>

      <h3 class="mt-5">Can't Wait until September</h3>
      <b-row class="slick-row">
        <VueSlickCarousel v-bind="setting">
          <w-hero-card
            v-for="item in data_list"
            :key="item.id"
            :details="item"
            @open="openDetail">>
          </w-hero-card>
          <template #prevArrow="">
            <div class="w-arrow-prev">
              <b-iconstack font-scale="1.5" class="slick-w-arrow">
                  <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                  <b-icon stacked icon="caret-left-fill" variant="danger"></b-icon>
              </b-iconstack>
            </div>
          </template>
          <template #nextArrow="">
            <div class="w-arrow-next">
              <b-iconstack font-scale="1.5" class="slick-w-arrow">
                  <b-icon stacked icon="circle-fill" variant="light"></b-icon>
                  <b-icon stacked icon="caret-right-fill" variant="danger"></b-icon>
              </b-iconstack>
            </div>
          </template>
        </VueSlickCarousel>
      </b-row>
    </b-container>
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
import VueSlickCarousel from 'vue-slick-carousel';
import wHeroCard from '@/components/wHeroCard';
import wCardDetail from '@/components/wCardDetail'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
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
      data_list: [
        {
          "imdbID": "tt10311562",
          "tmdbID": "101200",
          "imdbRating": 68,
          "imdbVoteCount": 4241,
          "tmdbRating": 69,
          "backdropPath": "/sSRFTSdVbpcsZV6332MzBbGky5G.jpg",
          "backdropURLs": {
            "300": "https://image.tmdb.org/t/p/w300/sSRFTSdVbpcsZV6332MzBbGky5G.jpg",
            "780": "https://image.tmdb.org/t/p/w780/sSRFTSdVbpcsZV6332MzBbGky5G.jpg",
            "1280": "https://image.tmdb.org/t/p/w1280/sSRFTSdVbpcsZV6332MzBbGky5G.jpg",
            "original": "https://image.tmdb.org/t/p/original/sSRFTSdVbpcsZV6332MzBbGky5G.jpg"
          },
          "originalTitle": "#blackAF",
          "genres": [
            35
          ],
          "countries": [
            "US"
          ],
          "year": 2020,
          "firstAirYear": 2020,
          "lastAirYear": 2020,
          "episodeRuntimes": [
            35
          ],
          "cast": [
            "Kenya Barris",
            "Rashida Jones",
            "Iman Benson",
            "Richard Gardenhire Jr.",
            "Genneya Walton",
            "Scarlet Spencer",
            "Justin Claiborne"
          ],
          "significants": [
            "Kenya Barris"
          ],
          "title": "#blackAF",
          "overview": "A father takes an irreverent and honest approach to parenting and relationships.",
          "video": "O-LtbHykms0",
          "posterPath": "/xccT6BWUYLf41UNHUWdvtqdH8rN.jpg",
          "posterURLs": {
            "92": "https://image.tmdb.org/t/p/w92/xccT6BWUYLf41UNHUWdvtqdH8rN.jpg",
            "154": "https://image.tmdb.org/t/p/w154/xccT6BWUYLf41UNHUWdvtqdH8rN.jpg",
            "185": "https://image.tmdb.org/t/p/w185/xccT6BWUYLf41UNHUWdvtqdH8rN.jpg",
            "342": "https://image.tmdb.org/t/p/w342/xccT6BWUYLf41UNHUWdvtqdH8rN.jpg",
            "500": "https://image.tmdb.org/t/p/w500/xccT6BWUYLf41UNHUWdvtqdH8rN.jpg",
            "780": "https://image.tmdb.org/t/p/w780/xccT6BWUYLf41UNHUWdvtqdH8rN.jpg",
            "original": "https://image.tmdb.org/t/p/original/xccT6BWUYLf41UNHUWdvtqdH8rN.jpg"
          },
          "seasons": 1,
          "episodes": 8,
          "age": 16,
          "status": 5,
          "tagline": "",
          "streamingInfo": {
            "netflix": {
              "id": {
                "link": "https://www.netflix.com/title/81056700/",
                "added": 1607822170,
                "leaving": 0
              }
            }
          },
          "originalLanguage": "en"
        },
        {
          "imdbID": "tt12759384",
          "tmdbID": "106530",
          "imdbRating": 64,
          "imdbVoteCount": 909,
          "tmdbRating": 66,
          "backdropPath": "/fhIUJF2MpFoFXLCEErOIEuucqRi.jpg",
          "backdropURLs": {
            "300": "https://image.tmdb.org/t/p/w300/fhIUJF2MpFoFXLCEErOIEuucqRi.jpg",
            "780": "https://image.tmdb.org/t/p/w780/fhIUJF2MpFoFXLCEErOIEuucqRi.jpg",
            "1280": "https://image.tmdb.org/t/p/w1280/fhIUJF2MpFoFXLCEErOIEuucqRi.jpg",
            "original": "https://image.tmdb.org/t/p/original/fhIUJF2MpFoFXLCEErOIEuucqRi.jpg"
          },
          "originalTitle": "(Un)Well",
          "genres": [
            99
          ],
          "countries": [
            "US"
          ],
          "year": 2020,
          "firstAirYear": 2020,
          "lastAirYear": 2020,
          "episodeRuntimes": [
            55
          ],
          "cast": [],
          "significants": [],
          "title": "(Un)Well",
          "overview": "This docuseries takes a deep dive into the lucrative wellness industry, which touts health and healing. But do the products live up to the promises?",
          "video": "5GyU4k3Lkes",
          "posterPath": "/bC1CSudFJCvDm679fRtqdVHlDc3.jpg",
          "posterURLs": {
            "92": "https://image.tmdb.org/t/p/w92/bC1CSudFJCvDm679fRtqdVHlDc3.jpg",
            "154": "https://image.tmdb.org/t/p/w154/bC1CSudFJCvDm679fRtqdVHlDc3.jpg",
            "185": "https://image.tmdb.org/t/p/w185/bC1CSudFJCvDm679fRtqdVHlDc3.jpg",
            "342": "https://image.tmdb.org/t/p/w342/bC1CSudFJCvDm679fRtqdVHlDc3.jpg",
            "500": "https://image.tmdb.org/t/p/w500/bC1CSudFJCvDm679fRtqdVHlDc3.jpg",
            "780": "https://image.tmdb.org/t/p/w780/bC1CSudFJCvDm679fRtqdVHlDc3.jpg",
            "original": "https://image.tmdb.org/t/p/original/bC1CSudFJCvDm679fRtqdVHlDc3.jpg"
          },
          "seasons": 1,
          "episodes": 6,
          "age": 17,
          "status": 1,
          "tagline": "",
          "streamingInfo": {
            "netflix": {
              "id": {
                "link": "https://www.netflix.com/title/81044208/",
                "added": 1607833136,
                "leaving": 0
              }
            }
          },
          "originalLanguage": "en"
        },
        {
          "imdbID": "tt12706854",
          "tmdbID": "99995",
          "imdbRating": 64,
          "imdbVoteCount": 458,
          "tmdbRating": 70,
          "backdropPath": "/esBYtd4HLuEd5E1vlbTdBdgcdfe.jpg",
          "backdropURLs": {
            "300": "https://image.tmdb.org/t/p/w300/esBYtd4HLuEd5E1vlbTdBdgcdfe.jpg",
            "780": "https://image.tmdb.org/t/p/w780/esBYtd4HLuEd5E1vlbTdBdgcdfe.jpg",
            "1280": "https://image.tmdb.org/t/p/w1280/esBYtd4HLuEd5E1vlbTdBdgcdfe.jpg",
            "original": "https://image.tmdb.org/t/p/original/esBYtd4HLuEd5E1vlbTdBdgcdfe.jpg"
          },
          "originalTitle": "100万の命の上に俺は立っている",
          "genres": [
            16,
            28,
            12
          ],
          "countries": [
            "JP"
          ],
          "year": 2020,
          "firstAirYear": 2020,
          "lastAirYear": 2021,
          "episodeRuntimes": [
            24
          ],
          "cast": [
            "Yuto Uemura",
            "Risa Kubota",
            "Chiwa Saito",
            "Ai Furihata",
            "Azumi Waki",
            "Kanako Takatsuki",
            "Makoto Koichi"
          ],
          "significants": [],
          "title": "I'm Standing on a Million Lives",
          "overview": "Ninth grader Yotsuya Yuusuke is practical, friendless, and not active in any clubs. Then one day, he and two female classmates are suddenly sent to another world where they must work together to battle for their lives. Yotsuya is a lone wolf and has always lived his life according to his wants, but how will that work out now that he’s supposed to be a hero?!",
          "video": "U26Up23GGDk",
          "posterPath": "/fsTPaGmiYVfl6KLxnDGDDpaqnJM.jpg",
          "posterURLs": {
            "92": "https://image.tmdb.org/t/p/w92/fsTPaGmiYVfl6KLxnDGDDpaqnJM.jpg",
            "154": "https://image.tmdb.org/t/p/w154/fsTPaGmiYVfl6KLxnDGDDpaqnJM.jpg",
            "185": "https://image.tmdb.org/t/p/w185/fsTPaGmiYVfl6KLxnDGDDpaqnJM.jpg",
            "342": "https://image.tmdb.org/t/p/w342/fsTPaGmiYVfl6KLxnDGDDpaqnJM.jpg",
            "500": "https://image.tmdb.org/t/p/w500/fsTPaGmiYVfl6KLxnDGDDpaqnJM.jpg",
            "780": "https://image.tmdb.org/t/p/w780/fsTPaGmiYVfl6KLxnDGDDpaqnJM.jpg",
            "original": "https://image.tmdb.org/t/p/original/fsTPaGmiYVfl6KLxnDGDDpaqnJM.jpg"
          },
          "seasons": 2,
          "episodes": 22,
          "age": 16,
          "status": 1,
          "tagline": "",
          "streamingInfo": {
            "netflix": {
              "id": {
                "link": "https://www.netflix.com/title/81341942/",
                "added": 1623849902,
                "leaving": 0
              }
            }
          },
          "originalLanguage": "ja"
        },
        {
          "imdbID": "tt6686450",
          "tmdbID": "73325",
          "imdbRating": 75,
          "imdbVoteCount": 1647,
          "tmdbRating": 68,
          "backdropPath": "/qyIImhYkjtOI1uacgAcqfBgoHQg.jpg",
          "backdropURLs": {
            "300": "https://image.tmdb.org/t/p/w300/qyIImhYkjtOI1uacgAcqfBgoHQg.jpg",
            "780": "https://image.tmdb.org/t/p/w780/qyIImhYkjtOI1uacgAcqfBgoHQg.jpg",
            "1280": "https://image.tmdb.org/t/p/w1280/qyIImhYkjtOI1uacgAcqfBgoHQg.jpg",
            "original": "https://image.tmdb.org/t/p/original/qyIImhYkjtOI1uacgAcqfBgoHQg.jpg"
          },
          "originalTitle": "100万円の女たち",
          "genres": [
            18,
            9648
          ],
          "countries": [
            "JP"
          ],
          "year": 2017,
          "firstAirYear": 2017,
          "lastAirYear": 2017,
          "episodeRuntimes": [
            24
          ],
          "cast": [
            "Moeka Hoshi",
            "Kaito Yoshimura",
            "Lily Franky",
            "Rila Fukushima",
            "Rena Takeda",
            "Miwako Wagatsuma",
            "Tetsuhiro Ikeda"
          ],
          "significants": [
            "Michihito Fujii"
          ],
          "title": "Million Yen Women",
          "overview": "Five beautiful but mysterious women move in with unsuccessful novelist Shin, who manages their odd household in exchange for a tidy monthly sum.",
          "video": "",
          "posterPath": "/1p06R61PjdwiawDyh4KH33MnugH.jpg",
          "posterURLs": {
            "92": "https://image.tmdb.org/t/p/w92/1p06R61PjdwiawDyh4KH33MnugH.jpg",
            "154": "https://image.tmdb.org/t/p/w154/1p06R61PjdwiawDyh4KH33MnugH.jpg",
            "185": "https://image.tmdb.org/t/p/w185/1p06R61PjdwiawDyh4KH33MnugH.jpg",
            "342": "https://image.tmdb.org/t/p/w342/1p06R61PjdwiawDyh4KH33MnugH.jpg",
            "500": "https://image.tmdb.org/t/p/w500/1p06R61PjdwiawDyh4KH33MnugH.jpg",
            "780": "https://image.tmdb.org/t/p/w780/1p06R61PjdwiawDyh4KH33MnugH.jpg",
            "original": "https://image.tmdb.org/t/p/original/1p06R61PjdwiawDyh4KH33MnugH.jpg"
          },
          "seasons": 1,
          "episodes": 12,
          "age": 16,
          "status": 4,
          "tagline": "",
          "streamingInfo": {
            "netflix": {
              "id": {
                "link": "https://www.netflix.com/title/80170687/",
                "added": 1607825253,
                "leaving": 0
              }
            }
          },
          "originalLanguage": "ja"
        },
        {
          "imdbID": "tt5203748",
          "tmdbID": "75680",
          "imdbRating": 70,
          "imdbVoteCount": 2104,
          "tmdbRating": 60,
          "backdropPath": "/wapuDMjR2gOZa9FdusmwOej6Gom.jpg",
          "backdropURLs": {
            "300": "https://image.tmdb.org/t/p/w300/wapuDMjR2gOZa9FdusmwOej6Gom.jpg",
            "780": "https://image.tmdb.org/t/p/w780/wapuDMjR2gOZa9FdusmwOej6Gom.jpg",
            "1280": "https://image.tmdb.org/t/p/w1280/wapuDMjR2gOZa9FdusmwOej6Gom.jpg",
            "original": "https://image.tmdb.org/t/p/original/wapuDMjR2gOZa9FdusmwOej6Gom.jpg"
          },
          "originalTitle": "13 Geboden",
          "genres": [
            80,
            9648,
            53
          ],
          "countries": [
            "BE"
          ],
          "year": 2018,
          "firstAirYear": 2018,
          "lastAirYear": 2018,
          "episodeRuntimes": [
            45
          ],
          "cast": [
            "Lola Rose Delany",
            "Maarten Claeyssens",
            "Jeroen Perceval",
            "Bert Haelvoet",
            "Line Pillet",
            "Kim Hertogs",
            "Marie Vinck"
          ],
          "significants": [
            "Ed Vanderweyden"
          ],
          "title": "13 Commandments",
          "overview": "A serial killer reverts to the 10 commandments in order to kick society a conscience with his crimes.",
          "video": "IFCUz44ovQU",
          "posterPath": "/kOxrZG0laX9KVWaIItyWkCC5YzK.jpg",
          "posterURLs": {
            "92": "https://image.tmdb.org/t/p/w92/kOxrZG0laX9KVWaIItyWkCC5YzK.jpg",
            "154": "https://image.tmdb.org/t/p/w154/kOxrZG0laX9KVWaIItyWkCC5YzK.jpg",
            "185": "https://image.tmdb.org/t/p/w185/kOxrZG0laX9KVWaIItyWkCC5YzK.jpg",
            "342": "https://image.tmdb.org/t/p/w342/kOxrZG0laX9KVWaIItyWkCC5YzK.jpg",
            "500": "https://image.tmdb.org/t/p/w500/kOxrZG0laX9KVWaIItyWkCC5YzK.jpg",
            "780": "https://image.tmdb.org/t/p/w780/kOxrZG0laX9KVWaIItyWkCC5YzK.jpg",
            "original": "https://image.tmdb.org/t/p/original/kOxrZG0laX9KVWaIItyWkCC5YzK.jpg"
          },
          "seasons": 1,
          "episodes": 13,
          "age": 17,
          "status": 4,
          "tagline": "",
          "streamingInfo": {
            "netflix": {
              "id": {
                "link": "https://www.netflix.com/title/81054831/",
                "added": 1607828786,
                "leaving": 0
              }
            }
          },
          "originalLanguage": "nl"
        },
        {
          "imdbID": "tt1837492",
          "tmdbID": "66788",
          "imdbRating": 76,
          "imdbVoteCount": 267449,
          "tmdbRating": 78,
          "backdropPath": "/Qzpe5J1Q6i4uYw2sGJSBbswqbD.jpg",
          "backdropURLs": {
            "300": "https://image.tmdb.org/t/p/w300/Qzpe5J1Q6i4uYw2sGJSBbswqbD.jpg",
            "780": "https://image.tmdb.org/t/p/w780/Qzpe5J1Q6i4uYw2sGJSBbswqbD.jpg",
            "1280": "https://image.tmdb.org/t/p/w1280/Qzpe5J1Q6i4uYw2sGJSBbswqbD.jpg",
            "original": "https://image.tmdb.org/t/p/original/Qzpe5J1Q6i4uYw2sGJSBbswqbD.jpg"
          },
          "originalTitle": "13 Reasons Why",
          "genres": [
            18,
            9648,
            53
          ],
          "countries": [
            "US"
          ],
          "year": 2017,
          "firstAirYear": 2017,
          "lastAirYear": 2020,
          "episodeRuntimes": [
            57
          ],
          "cast": [
            "Dylan Minnette",
            "Christian Navarro",
            "Alisha Boe",
            "Brandon Flynn",
            "Justin Prentice",
            "Miles Heizer",
            "Ross Butler"
          ],
          "significants": [
            "Brian Yorkey"
          ],
          "title": "13 Reasons Why",
          "overview": "After a teenage girl's perplexing suicide, a classmate receives a series of tapes that unravel the mystery of her tragic choice.",
          "video": "QkT-HIMSrRk",
          "posterPath": "/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
          "posterURLs": {
            "92": "https://image.tmdb.org/t/p/w92/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
            "154": "https://image.tmdb.org/t/p/w154/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
            "185": "https://image.tmdb.org/t/p/w185/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
            "342": "https://image.tmdb.org/t/p/w342/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
            "500": "https://image.tmdb.org/t/p/w500/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
            "780": "https://image.tmdb.org/t/p/w780/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
            "original": "https://image.tmdb.org/t/p/original/nel144y4dIOdFFid6twN5mAX9Yd.jpg"
          },
          "seasons": 4,
          "episodes": 49,
          "age": 17,
          "status": 4,
          "tagline": "",
          "streamingInfo": {
            "netflix": {
              "id": {
                "link": "https://www.netflix.com/title/80117470/",
                "added": 1607827529,
                "leaving": 0
              }
            }
          },
          "originalLanguage": "en"
        },
        {
          "imdbID": "tt8615966",
          "tmdbID": "80865",
          "imdbRating": 64,
          "imdbVoteCount": 273,
          "tmdbRating": 64,
          "backdropPath": "/m4d6fZV9Lk0Qsbp89kMTidfeXbn.jpg",
          "backdropURLs": {
            "300": "https://image.tmdb.org/t/p/w300/m4d6fZV9Lk0Qsbp89kMTidfeXbn.jpg",
            "780": "https://image.tmdb.org/t/p/w780/m4d6fZV9Lk0Qsbp89kMTidfeXbn.jpg",
            "1280": "https://image.tmdb.org/t/p/w1280/m4d6fZV9Lk0Qsbp89kMTidfeXbn.jpg",
            "original": "https://image.tmdb.org/t/p/original/m4d6fZV9Lk0Qsbp89kMTidfeXbn.jpg"
          },
          "originalTitle": "13 Reasons Why: Beyond the Reasons",
          "genres": [
            99,
            10767
          ],
          "countries": [
            "US"
          ],
          "year": 2017,
          "firstAirYear": 2017,
          "lastAirYear": 2019,
          "episodeRuntimes": [
            65,
            29
          ],
          "cast": [
            "Jay Asher",
            "Selena Gomez",
            "Kate Walsh",
            "Katherine Langford",
            "Dylan Minnette",
            "Hank Greenspan"
          ],
          "significants": [],
          "title": "13 Reasons Why: Beyond the Reasons",
          "overview": "Cast members, writers, producers and mental health professionals discuss some of the difficult issues and themes explored in \"13 Reasons Why.\"",
          "video": "",
          "posterPath": "/aauFzhjAGSemDpDBSmWDJpkeQiw.jpg",
          "posterURLs": {
            "92": "https://image.tmdb.org/t/p/w92/aauFzhjAGSemDpDBSmWDJpkeQiw.jpg",
            "154": "https://image.tmdb.org/t/p/w154/aauFzhjAGSemDpDBSmWDJpkeQiw.jpg",
            "185": "https://image.tmdb.org/t/p/w185/aauFzhjAGSemDpDBSmWDJpkeQiw.jpg",
            "342": "https://image.tmdb.org/t/p/w342/aauFzhjAGSemDpDBSmWDJpkeQiw.jpg",
            "500": "https://image.tmdb.org/t/p/w500/aauFzhjAGSemDpDBSmWDJpkeQiw.jpg",
            "780": "https://image.tmdb.org/t/p/w780/aauFzhjAGSemDpDBSmWDJpkeQiw.jpg",
            "original": "https://image.tmdb.org/t/p/original/aauFzhjAGSemDpDBSmWDJpkeQiw.jpg"
          },
          "seasons": 3,
          "episodes": 3,
          "age": 17,
          "status": 4,
          "tagline": "",
          "streamingInfo": {
            "netflix": {
              "id": {
                "link": "https://www.netflix.com/title/80996791/",
                "added": 1607825414,
                "leaving": 0
              }
            }
          },
          "originalLanguage": "en"
        },
        {
          "imdbID": "tt8194716",
          "tmdbID": "79932",
          "imdbRating": 83,
          "imdbVoteCount": 2613,
          "tmdbRating": 80,
          "backdropPath": "/7oPlg6DPDklwkyVjSSEaUMdpffG.jpg",
          "backdropURLs": {
            "300": "https://image.tmdb.org/t/p/w300/7oPlg6DPDklwkyVjSSEaUMdpffG.jpg",
            "780": "https://image.tmdb.org/t/p/w780/7oPlg6DPDklwkyVjSSEaUMdpffG.jpg",
            "1280": "https://image.tmdb.org/t/p/w1280/7oPlg6DPDklwkyVjSSEaUMdpffG.jpg",
            "original": "https://image.tmdb.org/t/p/original/7oPlg6DPDklwkyVjSSEaUMdpffG.jpg"
          },
          "originalTitle": "13 novembre : Fluctuat nec mergitur",
          "genres": [
            99
          ],
          "countries": [
            "FR"
          ],
          "year": 2018,
          "firstAirYear": 2018,
          "lastAirYear": 2018,
          "episodeRuntimes": [
            55
          ],
          "cast": [
            "François Hollande"
          ],
          "significants": [
            "Gédéon Naudet",
            "Jules Naudet"
          ],
          "title": "November 13: Attack on Paris",
          "overview": "Survivors and first responders share personal stories of anguish, kindness and bravery that unfolded amid the Paris terror attacks of Nov. 13, 2015.",
          "video": "XLKBBaQLGo8",
          "posterPath": "/4DNfUpOm466GaC46l7AdFyPiKbB.jpg",
          "posterURLs": {
            "92": "https://image.tmdb.org/t/p/w92/4DNfUpOm466GaC46l7AdFyPiKbB.jpg",
            "154": "https://image.tmdb.org/t/p/w154/4DNfUpOm466GaC46l7AdFyPiKbB.jpg",
            "185": "https://image.tmdb.org/t/p/w185/4DNfUpOm466GaC46l7AdFyPiKbB.jpg",
            "342": "https://image.tmdb.org/t/p/w342/4DNfUpOm466GaC46l7AdFyPiKbB.jpg",
            "500": "https://image.tmdb.org/t/p/w500/4DNfUpOm466GaC46l7AdFyPiKbB.jpg",
            "780": "https://image.tmdb.org/t/p/w780/4DNfUpOm466GaC46l7AdFyPiKbB.jpg",
            "original": "https://image.tmdb.org/t/p/original/4DNfUpOm466GaC46l7AdFyPiKbB.jpg"
          },
          "seasons": 1,
          "episodes": 3,
          "age": 17,
          "status": 4,
          "tagline": "",
          "streamingInfo": {
            "netflix": {
              "id": {
                "link": "https://www.netflix.com/title/80190097/",
                "added": 1624013853,
                "leaving": 0
              }
            }
          },
          "originalLanguage": "fr"
        }
      ]
    }
  },
  components: {
    VueSlickCarousel,
    wHeroCard,
    wCardDetail,
  },
  computed: {
    ...mapState('wStoreHome', ['data_set']),
  },
  mounted() {
    // this.getHome();
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