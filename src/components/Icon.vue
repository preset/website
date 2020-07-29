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
import leftArrow from '@iconify/icons-bx/bx-left-arrow-alt';
import rightArrow from '@iconify/icons-bx/bx-right-arrow-alt';
import close from '@iconify/icons-bx/bx-x';
import search from '@iconify/icons-bx/bx-search';
import chevronRight from '@iconify/icons-bx/bx-chevron-right';
import book from '@iconify/icons-bx/bxs-book-alt';
import heart from '@iconify/icons-heroicons-solid/heart';

Object.entries({
	menu,
	cross,
	twitter,
	github,
	dark: sunOutline,
	light: sunSolid,
	close,
	leftArrow,
	rightArrow,
	chevronRight,
	search,
	book,
	heart,
}).forEach(([name, icon]) => Icon.addIcon(name, icon));

export default {
	props: ['icon'],
	components: { Icon },
};
</script>
