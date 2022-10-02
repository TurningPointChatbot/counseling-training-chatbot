<script lang="ts">
    import ForumPostRow from './ForumPostRow.svelte';
</script>

<div class="card bg-base-100 shadow-xl">
  <!-- Forum module name title -->
  <div>
    <h3 class="h2-counsellor-dashboard">Module Name</h3>
  </div>
  <hr />
  <div class="card-body grid grid-cols-40 gap-3 w-full">
    <center>
        <h2>How To Manage My Addiction Withdrawal</h2>
    </center>
    <hr/><br>
    <h2 class = "h2-counsellor_dashboard">Post        Author        Date</h2>
    <!-- Forum posts list -->
    <div><ForumPostRow PostSubject = "Sample 1" FullPost = "Sample 1" Author = "Sample 1" ApprovalStatus = "Sample 1" /></div>
    <div><ForumPostRow PostSubject = "Sample 2" FullPost = "Sample 2" Author = "Sample 2" ApprovalStatus = "Sample 2" /></div>
    <div><ForumPostRow PostSubject = "Sample 3" FullPost = "Sample 3" Author = "Sample 3" ApprovalStatus = "Sample 3" /></div>
  </div>
</div>
