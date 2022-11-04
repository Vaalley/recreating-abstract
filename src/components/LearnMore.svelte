<script>
	let data = [
		{
			imageSrc:
				'https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png',
			imageAlt: 'Just an alt',
			header: 'Header1',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
			link: 'Learn More →'
		},
		{
			imageSrc:
				'https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png',
			imageAlt: 'Just an alt',
			header: 'Header2',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
			link: 'Learn More →'
		},
		{
			imageSrc:
				'https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png',
			imageAlt: 'Just an alt',
			header: 'Header3',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
			link: 'Learn More →'
		},
		{
			imageSrc:
				'https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png',
			imageAlt: 'Just an alt',
			header: 'Header4',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
			link: 'Learn More →'
		},
		{
			imageSrc:
				'https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png',
			imageAlt: 'Just an alt',
			header: 'Header5',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
			link: 'Learn More →'
		},
		{
			imageSrc:
				'https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png',
			imageAlt: 'Just an alt',
			header: 'Header6',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
			link: 'Learn More →'
		}
	];
</script>

<div class="flex">
	<div class="grid grid-cols-2 gap-20 my-48 mx-48">
		{#each data as item}
			<div class="flex">
				<div class="min-w-[90px] mr-8">
					<img src={item.imageSrc} alt={item.imageAlt} />
				</div>
				<div>
					<h3 class="mb-4 text-2xl font-bold">{item.header}</h3>
					<p class="mb-4 text-2xl">{item.text}</p>
					<a href="/" class="text-xl text-primary">{item.link}</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	a:hover {
		border-bottom: 2px solid #4c5fd5;
	}
</style>
