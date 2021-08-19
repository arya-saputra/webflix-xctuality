<template>
    <section class="bg-dark">
        <b-container class="py-3">
            <p>Questions? Call <a class="text-danger" href="tel:007-803-321-2130">007-803-321-2130</a></p> 
            <b-row>
                <b-col cols="6" md="3" sm="6">
                    <router-link to="/">
                        <p class="text-secondary">F.A.Q</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Investor</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Privacy</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Speed Test</p>
                    </router-link>
                </b-col>
                <b-col cols="6" sm="6" md="3">
                    <router-link to="#">
                        <p class="text-secondary">Help Center</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Jobs</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Cookies Preferences</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Legal Notices</p>
                    </router-link>
                </b-col>
                <b-col cols="6" md="3" sm="6">
                    <router-link to="#">
                        <p class="text-secondary">Account</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Ways to Watch</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Corporate</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Only on Webflix</p>
                    </router-link>
                </b-col>
                <b-col cols="6" md="3" sm="6">
                    <router-link to="#">
                        <p class="text-secondary">Media Center</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Terms of use</p>
                    </router-link>
                    <router-link to="#">
                        <p class="text-secondary">Contact Us</p>
                    </router-link>
                </b-col>
            </b-row>
        </b-container>
    </section>    
</template>
<style scoped>
p {
    font-size: 12px;
}

a {
    text-decoration: none;
}
</style>