<template>
	<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		<div class="max-w-xl mx-auto lg:max-w-2xl">
			<div class="flex flex-col mb-16 text-center sm:mb-0">
				<a href="/" class="mb-6 mx-auto">
					<div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
						<svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
							<polygon
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
								fill="none"
								points="29 13 14 29 25 29 23 39 38 23 27 23"
							></polygon>
						</svg>
					</div>
				</a>
				<div class="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12">
					<h2
						class="
							max-w-lg
							mb-6
							font-sans
							text-3xl
							font-bold
							leading-none
							tracking-tight
							text-gray-900
							sm:text-4xl
							mx-auto
						"
					>
						<span class="relative inline-block">
							<svg
								viewBox="0 0 52 24"
								fill="currentColor"
								class="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 block"
							>
								<defs>
									<pattern id="e77df901-b9d7-4b9b-822e-16b2d410795b" x="0" y="0" width=".135" height=".30">
										<circle cx="1" cy="1" r=".7"></circle>
									</pattern>
								</defs>
								<rect fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)" width="52" height="24"></rect>
							</svg>
							<span class="relative">Berkin AKKAYA</span>
						</span>
					</h2>
					<p class="text-base text-gray-700 md:text-lg">
						Hi, i'm Berkin. I am a <b>front-end developer</b>. I also developed <i>mobile games</i>,
						<i>productivity apps</i>, <i>npm packages</i> and <i>cli tools</i> before.
					</p>
				</div>
				<div class="flex items-center justify-center">
					<router-link
						to="/about"
						aria-label="About"
						class="
							inline-flex
							items-center
							justify-center
							h-12
							px-6
							mr-6
							font-medium
							tracking-wide
							text-white
							transition
							rounded
							shadow-md
							bg-deep-purple-accent-400
							hover:bg-deep-purple-accent-700
							focus:shadow-outline focus:outline-none
						"
					>
						About Me
					</router-link>
					<router-link
						to="/projects"
						aria-label="Projects"
						class="
							inline-flex
							items-center
							font-semibold
							text-gray-800
							transition-colors
							hover:text-deep-purple-accent-700
						"
					>
						Projects &nbsp;
						<i class="fas fa-angle-right"></i>
					</router-link>
				</div>
			</div>
		</div>
	</div>

	<div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-25">
		<div class="grid gap-10 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
			<div class="px-12 text-center sm:px-0">
				<div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
					<i class="fas fa-bolt"></i>
				</div>
				<h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Creative</h6>
				<div class="mb-2 text-gray-700">Always in search for a better way</div>
			</div>
			<div class="px-12 text-center sm:px-0">
				<div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
					<i class="fas fa-code"></i>
				</div>
				<h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Multidisciplinary</h6>
				<div class="mb-2 text-gray-700">A broad spectrum of experience</div>
			</div>
			<div class="px-12 text-center sm:px-0">
				<div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
					<i class="fas fa-users"></i>
				</div>
				<h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Fast Learner</h6>
				<div class="mb-2 text-gray-700">Eager to learn about new technologies</div>
			</div>
			<div class="px-12 text-center sm:px-0">
				<div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
					<i class="fas fa-users"></i>
				</div>
				<h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Enthusiast</h6>
				<div class="mb-2 text-gray-700">Vim User, Arch Linux Fan</div>
			</div>
		</div>
	</div>
</template>