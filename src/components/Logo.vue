<template>
	<svg
		:width="getWidth"
		:height="getHeight"
		viewBox="0 0 283 566"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M128.603 76.9091L129.33 154.364L51.2234 154.364L51.9499 0.181822L179.645 0C222.15 0 256.843 34.7273 257.207 77.6364L128.603 76.9091ZM51.0417 411.636L128.785 410.545L128.603 283.091L51.9499 283.091L51.0417 411.636ZM154.942 128.727L283 128.545L282.637 179.818L257.207 179.818L256.117 566H154.033L154.215 257.455L0 256.545V179.818L154.942 180L154.942 128.727Z"
			fill="#7F9CF5"
		/>
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
