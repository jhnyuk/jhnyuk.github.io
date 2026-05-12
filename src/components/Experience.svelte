<script lang="ts">
	import { experienceTimeline, type ExperienceTimelineItem } from '$lib/config/pages.js';

	function isPast(item: ExperienceTimelineItem): boolean {
		return !!item.endDate;
	}
</script>

<section class="px-4 md:px-0">
	<div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:justify-start">
		{#each experienceTimeline as item, i (item.company)}
			{@const past = isPast(item)}

			<a
				href={item.careerHref ?? '/career'}
				class="focus-visible:ring-accent group focus-visible:ring-offset-base flex cursor-pointer items-center gap-2 rounded text-sm transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 {past
					? 'opacity-60 hover:opacity-100 focus-visible:opacity-100'
					: 'hover:opacity-80 focus-visible:opacity-100'}"
				aria-label={`${item.role} at ${item.company}`}
			>
				<span class="text-subtext1 group-hover:text-accent group-focus-visible:text-accent transition-colors">
					<span class="whitespace-nowrap">
						<span class={past ? '' : 'text-text font-medium'}>{item.company}</span>
						{#if past}
							<span class="text-overlay0 text-xs"> (Past)</span>
						{/if}
					</span>
				</span>
			</a>

			{#if i < experienceTimeline.length - 1}
				<span class="text-accent hidden md:inline">/</span>
			{/if}
		{/each}
	</div>
</section>
