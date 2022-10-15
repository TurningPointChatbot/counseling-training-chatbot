<script lang="ts">
    import LandingPageTile from "$lib/components/LandingPageTile.svelte";
</script>

<h1 class="m-8">Training Modules</h1>
<div class="grid grid-cols-2 gap-2 m-8 py-8 grid-rows-2 flex items-start">
    <LandingPageTile path = '/counsellor/modules' imgUrl='https://api.lorem.space/image/furniture?w=400&h=225&hash=33751' trainingType='Live Chat' description='Simulation of a live chat counselling service'></LandingPageTile>
    <LandingPageTile path = '/counsellor/forumPost' imgUrl='https://api.lorem.space/image/furniture?w=400&h=225&hash=33751' trainingType='Forum Moderation' description='Practice forum moderation following Turning Points Forum guidelines'></LandingPageTile>
    <LandingPageTile path = '/' imgUrl='https://api.lorem.space/image/furniture?w=400&h=225&hash=' trainingType='Email Correspondance' description='Coming soon...'></LandingPageTile>
</div>