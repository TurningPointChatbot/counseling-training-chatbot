<script lang="ts">
    export let instructionsDescription: string;
</script>

<div>
    <!-- Block to be included in learning outcome page, under LearningOutcomeRow - need confirmation from client on what content is required here, ie should it be a numbered list, body of text etc-->
    <p
    class="mt-2 text-2xl leading-8 tracking-tight text-gray-900 sm:text-4xl"
    >
    <!-- Title -->
    Instructions
    </p>
    <dd class="mt-2 ml-16 max-w-2xl text-base text-gray">
        <!-- Description -->
        {instructionsDescription}
    </dd>
</div>