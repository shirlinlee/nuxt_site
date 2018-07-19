<template lang="pug">
	div.article
		h1 {{postTitle}}
		img(src="/images/example.jpg")
		slot


</template>

<script>
export default {
	name: 'Article',
	data() {
		return {
			msg: 'Slot with layouts',
		};
	},
	props: ['postTitle'],
};
</script>

<style lang="scss" scoped>
.article {
	width:50%;
	float: left;
	padding: 0 15px;
	padding-bottom: 25px;
	text-align: left;
	h1 {
		font-size: 23px;
		color: #f57f42;
		font-weight: 800;
		line-height: 1.2;
		padding-bottom: 15px;
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

@media screen and (max-width: 414px) {
	.article {
		width:100%;
	}
}

</style>