<template lang="pug">
	div#slot
		h1 {{postTitle}}
		img(src="/images/example.jpg")
		slot


</template>

<script>
export default {
	name: 'LayoutDefault',
	data() {
		return {
			msg: 'Slot with layouts',
		};
	},
	props: ['postTitle'],
};
</script>

<style lang="scss" scoped>
#slot {
	padding-bottom: 25px;
	h1 {
		font-size: 30px;
		color: #f57f42;
		font-weight: 800;
		line-height: 2;
	}
	img{
		width: 100%;
		margin: 0 0 25px;
	}
	p{
		color: #464665;
		line-height: 1.6;
	}
}

</style>