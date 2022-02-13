<template>
	<div class="bg-gray-900">
		<div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div class="relative flex items-center justify-between">
				<router-link to="/" aria-label="berkinakkaya" title="berkinakkaya" class="inline-flex items-center">
					<h2 class="text-2xl leading-none tracking-tight font-bold text-white sm:text-3xl md:mx-auto">
						berkinakkaya
						<small class="opacity-30">.dev</small>
					</h2>
				</router-link>
				<ul class="flex items-center hidden space-x-8 lg:flex">
					<li>
						<router-link
							to="about"
							aria-label="About Me"
							title="About Me"
							class="font-medium tracking-wide text-gray-100 transition-colors hover:text-teal-accent-400"
						>
							About Me
						</router-link>
					</li>
					<li>
						<router-link
							to="projects"
							aria-label="Projects"
							title="Projects"
							class="font-medium tracking-wide text-gray-100 transition-colors hover:text-teal-accent-400"
						>
							Projects
						</router-link>
					</li>
					<li>
						<router-link
							to="contact"
							aria-label="contact"
							title="Contact"
							class="font-medium tracking-wide text-gray-100 transition-colors hover:text-teal-accent-400"
						>
							Contact
						</router-link>
					</li>
					<li>
						<a
							href="https://berkinakkaya.medium.com/"
							target="_blank"
							class="font-medium tracking-wide text-gray-100 transition-colors hover:text-teal-accent-400"
						>
							Blog&nbsp; <i class="fas fa-external-link-alt"></i>
						</a>
					</li>
				</ul>
				<ul class="flex items-center hidden space-x-8 lg:flex">
					<li>
						<a
							href="public/resume.pdf"
							target="_blank"
							class="
								inline-flex
								items-center
								justify-center
								h-12
								px-6
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
							aria-label="Blog"
							title="Blog"
						>
							Resume &nbsp;
							<i class="fas fa-external-link-alt"></i>
						</a>
					</li>
				</ul>
				<div class="lg:hidden">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						class="p-2 -mr-1 transition rounded focus:outline-none focus:shadow-outline"
						@click="isMenuOpen = true"
					>
						<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
							></path>
							<path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
							<path
								fill="currentColor"
								d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
							></path>
						</svg>
					</button>
					<div v-if="isMenuOpen" class="absolute top-0 left-0 w-full z-10">
						<div class="p-5 bg-white border rounded shadow-sm">
							<div class="flex items-center justify-between mb-4">
								<div>
									<router-link to="/" aria-label="berkinakkaya" title="berkinakkaya" class="inline-flex items-center">
										<h2 class="text-2xl leading-none tracking-tight font-bold text-gray-900 sm:text-3xl md:mx-auto">
											berkinakkaya
										</h2>
									</router-link>
								</div>
								<div>
									<button
										aria-label="Close Menu"
										title="Close Menu"
										class="
											p-2
											-mt-2
											-mr-2
											transition
											rounded
											hover:bg-gray-200
											focus:bg-gray-200 focus:outline-none focus:shadow-outline
										"
										@click="isMenuOpen = false"
									>
										<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
											></path>
										</svg>
									</button>
								</div>
							</div>
							<nav>
								<ul class="space-y-4">
									<li>
										<router-link
											to="about"
											aria-label="About Me"
											title="About Me"
											class="
												font-medium
												tracking-wide
												text-gray-700
												transition-colors
												hover:text-deep-purple-accent-400
											"
										>
											About Me
										</router-link>
									</li>
									<li>
										<router-link
											to="/projects"
											aria-label="Projects"
											title="Projects"
											class="
												font-medium
												tracking-wide
												text-gray-700
												transition-colors
												hover:text-deep-purple-accent-400
											"
											>Projects</router-link
										>
									</li>
									<li>
										<router-link
											to="/contact"
											aria-label="Contact"
											title="Contact"
											class="
												font-medium
												tracking-wide
												text-gray-700
												transition-colors
												hover:text-deep-purple-accent-400
											"
											>Contact</router-link
										>
									</li>
									<li>
										<a
											href="https://berkinakkaya.medium.com/"
											target="_blank"
											aria-label="Blog"
											title="Blog"
											class="
												font-medium
												tracking-wide
												text-gray-700
												transition-colors
												hover:text-deep-purple-accent-400
											"
											>Blog</a
										>
									</li>
									<li>
										<div class="flex items-center space-x-5 text-2xl">
											<a
												href="https://twitter.com/berkinakkaya"
												target="_blank"
												class="text-gray-500 transition-colors hover:text-deep-purple-accent-400"
											>
												<i class="fab fa-twitter"></i>
											</a>
											<a
												href="https://www.linkedin.com/in/berkinakkaya"
												target="_blank"
												class="text-gray-500 transition-colors hover:text-deep-purple-accent-400"
											>
												<i class="fab fa-linkedin"></i>
											</a>
											<a
												href="https://github.com/berkinakkaya"
												target="_blank"
												class="text-gray-500 transition-colors hover:text-deep-purple-accent-400"
											>
												<i class="fab fa-github"></i>
											</a>
										</div>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isMenuOpen: false,
		};
	},
};
</script>