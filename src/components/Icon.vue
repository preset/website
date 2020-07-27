<template>
	<icon height="auto" width="auto" :icon="icon" />
</template>

<script>
import Icon from '@iconify/vue';
import menu from '@iconify/icons-bx/bx-menu';
import cross from '@iconify/icons-bx/bx-x';
import twitter from '@iconify/icons-bx/bxl-twitter';
import github from '@iconify/icons-bx/bxl-github';
import sunOutline from '@iconify/icons-bx/bx-sun';
import sunSolid from '@iconify/icons-bx/bxs-sun';
import close from '@iconify/icons-bx/bx-x';

Object.entries({
	menu,
	cross,
	twitter,
	github,
	dark: sunOutline,
	light: sunSolid,
	close,
}).forEach(([name, icon]) => Icon.addIcon(name, icon));

export default {
	props: ['icon'],
	components: { Icon },
};
</script>
