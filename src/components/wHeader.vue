<template>
    <section>
        <b-container class="py-3 is-desktop">
            <b-row>
                <b-col
                  md="2"
                  sm="12"
                  class="d-flex align-items-center">
                  <img alt="Vue logo" src="../assets/logo.png" width="120">
                </b-col>
                <b-col
                  md="4"
                  sm="12">
                  <b-nav class="text-light">
                    <b-nav-item active>Home</b-nav-item>
                    <b-nav-item>TV Series</b-nav-item>
                    <b-nav-item>Movies</b-nav-item>
                    <b-nav-item>Watch List</b-nav-item>
                  </b-nav>
                </b-col>
                <b-col
                  md="6"
                  sm="12"
                  class="text-right align-items-center d-flex justify-content-end">
                  <!-- <b-button
                    variant="danger"
                    class="mr-3">
                      Sign In
                  </b-button>
                  <router-link to="/form/signup/">
                    Sign Up
                  </router-link> -->
                  <!-- <b-input-group
                    class="mr-3"
                  >
                    <b-form-input placeholder="Title, category, country"></b-form-input>
                    <b-input-group-append>
                      <b-button text="Button" variant="danger">search</b-button>
                    </b-input-group-append>
                  </b-input-group> -->

                  <b-iconstack font-scale="2.5" class="mr-3">
                    <b-icon stacked icon="search" scale="0.5" variant="white"></b-icon>
                  </b-iconstack>
                  <b-iconstack font-scale="2.5" class="mr-3">
                    <b-icon stacked icon="bell-fill" scale="0.5" variant="white"></b-icon>
                  </b-iconstack>
                  <b-avatar variant="danger" text="AR" class="bg-success"></b-avatar>
                </b-col>
            </b-row>
        </b-container>
        <b-container :class="hang? 'py-3 is-mobile position-fixed top-0 bg-dark w-navbar' : 'py-3 is-mobile'">
            <b-row>
                <b-col
                  cols="10"
                  class="d-flex text-center align-items-center">
                  <img alt="Vue logo" src="../assets/logo.png" width="80">
                </b-col>
                <b-col
                  cols="1"
                  class="d-flex text-center align-items-center justify-content-end">
                  <b-iconstack font-scale="2.5" class="mr-3">
                    <b-icon stacked icon="search" scale="0.5" variant="white"></b-icon>
                  </b-iconstack>
                  <b-iconstack font-scale="2.5" class="mr-3">
                    <b-icon stacked icon="bell-fill" scale="0.5" variant="white"></b-icon>
                  </b-iconstack>
                </b-col>
                <b-col
                  cols="1"
                  class="d-flex text-right align-items-center justify-content-end" @click="openMenu= !openMenu">
                  <b-icon :icon="openMenu? 'X' : 'list'" font-scale="2.3rem" />
                </b-col>
                <b-col
                  v-if="openMenu"
                  cols="12"
                  class="bg-dark p-0 ">
                  <b-list-group class="bg-dark mt-2">
                    <b-list-group-item variant="dark" href="#foobar" active>Home</b-list-group-item>
                    <b-list-group-item variant="dark" href="#some-link">TV Series</b-list-group-item>
                    <b-list-group-item variant="dark" href="#">Movies</b-list-group-item>
                    <b-list-group-item variant="dark" href="#">Watch List</b-list-group-item>
                  </b-list-group>
                  <b-list-group class="bg-dark mt-2">
                    <b-list-group-item variant="dark" href="#foobar">Profile</b-list-group-item>
                    <b-list-group-item variant="dark" href="#some-link">Log out</b-list-group-item>
                  </b-list-group>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>
<script>
export default {
    data() {
        return {
            openMenu: false,
            hang: false,
        };
    },
    mounted() {
        this.scroll();
    },
    methods: {
      isScrolledIntoView (el) {
        let rect = el.getBoundingClientRect()
        let elemTop = rect.top
        let elemBottom = rect.bottom

        let isVisible = elemTop < window.innerHeight && elemBottom >= 0
        return isVisible
      },
      scroll () {
        window.onscroll = () => {
            let scrolledTo = document.querySelector('.main-section')

            if (scrolledTo && this.isScrolledIntoView(scrolledTo)) {
            this.hang = false;
            } else {
            this.hang = true;
            }
        }
      }
    }
}
</script>
<style scoped>
a {
    color: whitesmoke;
    text-decoration: none;
}

a.list-group-item-dark {
    color: black;
}

a:hover {
    color: rgb(196, 27, 27) !important;
}

a.disabled {
    color: rgb(69, 69, 69) !important;
}

.w-navbar {
    z-index: 10;
}

.b-icon {
  cursor: pointer;
}
</style>