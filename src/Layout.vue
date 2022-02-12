<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
	components: { Header, Footer }
}
</script>

<template>
	<Header />

	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
		<router-view></router-view>
	</div>

	<Footer />
</template>