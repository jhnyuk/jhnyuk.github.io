<script lang="ts">
	import { IconBrandGithub, IconBrandLinkedin, IconMail, IconUser } from '@tabler/icons-svelte';
	import Site from '$lib/config/common';
</script>

<svelte:head>
	<title>About | 김지현</title>
	<meta name="description" content="안녕하세요, 개발자 김지현입니다." />
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-8 md:px-6">
	<section class="space-y-8">
		<h1 class="text-2xl font-bold">About Me</h1>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Photo -->
			<div class="md:col-span-1">
				<div class="border-surface0 bg-surface0 flex w-full items-center justify-center overflow-hidden rounded-xl border">
					<img src="/me.JPG" alt="김지현" class="h-full w-full object-cover" />
				</div>
			</div>

			<!-- Bio -->
			<div class="flex flex-col justify-center space-y-4 md:col-span-2">
				<p class="text-subtext0 leading-relaxed">
					안녕하세요, 개발자 <span class="text-text font-semibold">김지현</span>입니다.
				</p>
				<p class="text-subtext0 leading-relaxed">
					AI가 반복적인 작업을 처리하는 동안, 저는 더 중요한 질문에 시간을 씁니다.
					<span class="text-text">"이 제품이 고객의 하루를 어떻게 바꿀 수 있을까?"</span>
					기술의 효율성을 확보하는 것만큼, 그 여백으로 무엇을 만들어낼지가 더 중요하다고 생각합니다.
				</p>
				<p class="text-subtext0 leading-relaxed">
					AI를 가장 잘 활용하는 개발자란 단순히 빠른 개발자가 아니라, 확보한 시간으로 팀원의 고민을 함께 나누고 클라이언트 경험의 본질을 파고드는 개발자라고 믿습니다.
				</p>
				<p class="text-subtext0 leading-relaxed">
					코드 한 줄이 누군가의 불편을 없애고 새로운 일상을 여는 순간, AI와 함께 누군가의 일상을 조금씩 더 나은 방향으로 바꾸는 이야기를 써가고 있습니다.
				</p>

				<div class="flex flex-wrap gap-3 pt-2 text-sm">
					<a
						href={Site.out.github}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-accent inline-flex items-center gap-1.5 transition-colors"
					>
						<IconBrandGithub size={15} /> GitHub
					</a>
					<span class="text-surface1">·</span>
					<a
						href={Site.out.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-accent inline-flex items-center gap-1.5 transition-colors"
					>
						<IconBrandLinkedin size={15} /> LinkedIn
					</a>
					<span class="text-surface1">·</span>
					<a
						href={Site.out.email}
						class="hover:text-accent inline-flex items-center gap-1.5 transition-colors"
					>
						<IconMail size={15} /> debussysuh@gmail.com
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
