<template>
    <div class="mt-5 p-5">
        <mdb-card>
            <mdb-card-body>
                    <form novalidate @submit.prevent="login">
                        <p class="h4 text-center mb-4">Sign in</p>

                        <div class="grey-text mt-5">
                            <mdb-input v-model="email" label="Email" icon="envelope" type="email" required />
                            <mdb-input v-model="password" label="Password" icon="lock" type="password" required />
                        </div>
                        <div class="text-center">
                            <mdb-btn type="submit">Login</mdb-btn>
                        </div>
                        <router-link to="register">Register</router-link>
                    </form>
            </mdb-card-body>
        </mdb-card>
    </div>
</template>
<script>
export default {
    name: "AdminLogin"
};
</script>
