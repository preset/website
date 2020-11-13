<template>
	<svg :width="getWidth" :height="getHeight" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M88 319.843L229.421 178.421L370.843 319.843L229.421 461.264L88 319.843Z" fill="#7F9CF5" />
		<path d="M229.421 178.421L370.843 37L512.264 178.421L370.843 319.843L229.421 178.421Z" fill="#667EEA" />
		<path d="M229.421 461.264L370.843 319.843L512.264 461.264L370.843 602.685L229.421 461.264Z" fill="#A3BFFA" />
	</svg>
</template>

	<script>
		export default {
			props: {
				width: {
					type: Number,
					default: 40,
				},
			},

			computed: {
				getWidth() {
					return this.width;
				},

				getHeight() {
					return Math.ceil((this.getWidth / 48) * 48);
				},
			},
		};
	</script>
</template>
