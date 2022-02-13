<script>
export default {
	data: () => ({
		activeCategory: '',
		categories: [
			{ key: '', name: 'All', icon: 'fas fa-border-all' },
			{ key: 'web', name: 'Web Apps', icon: 'fas fa-globe' },
			{ key: 'game', name: 'Games', icon: 'fas fa-gamepad' },
			{ key: 'blockchain', name: 'Blockchain', icon: 'fa-brands fa-ethereum' },
			{ key: 'cli', name: 'CLI', icon: 'fas fa-terminal' },
			{ key: 'npm', name: 'NPM', icon: 'fa-brands fa-npm' },
		],
		items: [
			{
				category: 'web',
				image: '/src/assets/project-thumbnails/svelte-chat.jpg',
				name: 'Svelte Chat',
				description: 'Chat Application Backed by Firestore',
				live: 'https://svelte-chat-berkinakkaya.web.app/',
				source: 'https://github.com/BerkinAKKAYA/svelte-chat',
			},
			{
				category: 'web',
				image: '/src/assets/project-thumbnails/vueweeter.jpg',
				name: 'Vueweeter',
				description: 'Realtime Social Media App',
				live: 'https://berkinakkaya.github.io/vueweeter',
				source: 'https://github.com/BerkinAKKAYA/vueweeter',
			},
			{
				category: 'npm',
				image: '/src/assets/project-thumbnails/svelte-image-gallery.jpg',
				name: 'svelte-image-gallery',
				description: 'Fluid Image Container for Svelte',
				live: 'http://npmjs.com/package/svelte-image-gallery',
				source: 'https://github.com/BerkinAKKAYA/svelte-image-gallery',
			},
			{
				category: 'game',
				image: '/src/assets/project-thumbnails/stay-in-the-shadows.jpg',
				name: 'Stay In The Shadows',
				description: 'Stealth & Action Game',
				live: 'https://play.google.com/store/apps/details?id=com.BerkinAkkaya.StayintheShadows',
				source: null,
			},
			{
				category: 'game',
				image: '/src/assets/project-thumbnails/split.webp',
				name: 'Split',
				description:
					'Split is a hyper-casual endless game that you try to dodge obstacles as the game gets faster over time.',
				live: 'https://play.google.com/store/apps/details?id=com.BerkinAkkaya.Split',
				source: 'https://github.com/BerkinAKKAYA/Split',
			},
			{
				category: 'game',
				image: '/src/assets/project-thumbnails/jumpy.jpg',
				name: 'Jumpy',
				description: 'Infinite Arcade Platformer',
				live: 'https://play.google.com/store/apps/details?id=com.BerkinAkkaya.Jumpy',
				source: 'https://github.com/BerkinAKKAYA/Jumpy',
			},
			{
				category: 'web',
				image: '/src/assets/project-thumbnails/timeline.jpg',
				name: 'Timeline',
				description: 'Minimalistic Calendar',
				live: 'http://timeline-berkin.web.app/',
				source: 'https://github.com/BerkinAKKAYA/Timeline',
			},
			{
				category: 'web',
				image: '/src/assets/project-thumbnails/pomolog.jpg',
				name: 'Pomolog',
				description: 'Save how many pomodoros have you done, see monthly charts.',
				live: 'https://pomolog-berkinakkaya.web.app/',
				source: 'https://github.com/BerkinAKKAYA/Pomolog',
			},
			{
				category: 'web',
				image: '/src/assets/project-thumbnails/focused-youtube.jpg',
				name: 'Focused YouTube',
				description: 'YouTube without distractions, with bookmarks.',
				live: 'https://focused-yt.web.app/',
				source: 'https://github.com/BerkinAKKAYA/Focused-YouTube',
			},
			{
				category: 'cli',
				image: '/src/assets/project-thumbnails/python.png',
				name: 'Weather Scraper',
				description: 'Get monthly weather forecast via terminal, built with Selenium.',
				live: null,
				source: 'https://github.com/BerkinAKKAYA/WeatherScraper',
			},
		],
	}),
};
</script>

<template>
	<div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
		<div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
			<div>
				<p
					class="
						inline-block
						px-3
						py-px
						mb-4
						text-xs
						font-semibold
						tracking-wider
						text-teal-900
						rounded-full
						bg-teal-accent-400
					"
				>
					PROJECTS
				</p>
			</div>
			<h2
				class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto"
			>
				<span class="relative inline-block">
					<svg
						viewBox="0 0 52 24"
						fill="currentColor"
						class="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10"
					>
						<defs>
							<pattern id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6" x="0" y="0" width=".135" height=".30">
								<circle cx="1" cy="1" r=".7"></circle>
							</pattern>
						</defs>
						<rect fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)" width="52" height="24"></rect>
					</svg>
					<span class="relative">{{ items.length }} of my Personal Projects</span>
				</span>
			</h2>
			<p class="text-base text-gray-700 md:text-lg">
				See More On <a href="https://github.com/berkinakkaya" target="_blank" class="underline">GitHub</a>
			</p>
		</div>

		<div class="grid grid-cols-2 justify-around mb-8 mt-16 sm:flex xs:grid-cols-3 flex-wrap">
			<div
				class="text-center cursor-pointer mb-8 sm:mt-0"
				v-for="category in categories"
				:key="category.key"
				@click="activeCategory = category.key"
			>
				<div
					class="flex items-center justify-center w-10 h-10 mx-auto rounded-full sm:w-12 sm:h-12 duration-100"
					:class="activeCategory == category.key ? 'bg-teal-400 text-white' : 'bg-indigo-50 text-black'"
				>
					<i :class="category.icon"></i>
				</div>
				<h6
					class="text-sm leading-5 font-bold uppercase mt-2"
					:class="activeCategory == category.key ? 'tracking-wider' : 'opacity-50'"
				>
					{{ category.name }}
				</h6>
			</div>
		</div>

		<div class="grid gap-5 row-gap-5 lg:grid-cols-4 sm:grid-cols-2">
			<a
				class="project inline-block overflow-hidden shadow-sm border rounded bg-white relative cursor-default"
				:class="
					(!activeCategory || item.category == activeCategory ? '' : 'scale-0') +
					' ' +
					(item.live ? 'hover:z-10 hover:shadow-md cursor-pointer hover:scale-105' : '')
				"
				v-for="item in items"
				target="_blank"
				:key="item.name"
				:href="item.live"
				:aria-label="item.name"
			>
				<a
					target="_blank"
					class="
						absolute
						right-0
						bg-white
						rounded-bl-xl
						px-2
						py-1
						shadow-md
						hover:shadow-lg
						md:opacity-60
						hover:opacity-90 hover:px-3 hover:py-2
					"
					v-if="item.source"
					:href="item.source"
				>
					<i class="fa-brands fa-github text-2xl"></i>
				</a>
				<div class="flex flex-col h-full">
					<img :src="item.image" class="w-full h-48 object-contain" :alt="item.name" />
					<div class="flex-grow border-t relative">
						<div class="p-5">
							<h6 class="mb-2 font-semibold leading-5">{{ item.name }}</h6>
							<p class="text-sm text-gray-900">
								{{ item.description }}
							</p>
						</div>

						<div
							class="
								hover-icon
								grid
								place-items-center
								absolute
								left-0
								right-0
								top-0
								bottom-0
								opacity-0
								duration-700
								bg-white
							"
							v-if="item.live"
						>
							<i
								class="text-4xl"
								:class="item.category === 'game' ? 'fa-brands fa-google-play' : 'fas fa-external-link'"
								v-if="item.live"
							></i>
						</div>
					</div>
				</div>
			</a>
		</div>

		<p v-if="activeCategory && items.filter((x) => x.category === activeCategory).length == 0" class="text-center mt-5">
			There is nothing to show here yet, but there will be very soon!
		</p>
	</div>
</template>