<script context="module">
  /** @type {import('@sveltejs/kit').Load} */ export function load({
    error,
    status
  }) {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    };
  }
</script>

<script>
  export let title;
</script>

<div class="grid place-items-center content-evenly h-4/5">
  <div class="grid place-items-center">
    <h1>An error has occured.</h1>
    <h2>{title}</h2>

    <p>
      Please click <a href="/" class="text-blue-dark underline">here</a> to return
      to the home page.
    </p>
  </div>
</div>
