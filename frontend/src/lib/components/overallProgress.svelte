<script lang="ts">
  let modPrint = 'Completed : 10 / 40';
  let timePrint = 'Time Remaining : 50 Hrs';
</script>

<br /><br />
<center>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-title justify-left bg-base-400">
      <h4>Overall Progress</h4>
    </div>
    <div class="card-body text-left">
      Module Completion
      <div class="w-full bg-gray-200 rounded-full">
        <div
          class="bg-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded"
          style="width: 25%"
        >
          25%
        </div>
      </div>
      <div class="font-xs text-base-400">{modPrint}</div>
      Target Training Time
      <div class="w-full bg-gray-200 rounded-full">
        <div
          class="bg-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded"
          style="width: 88%"
        >
          88%
        </div>
      </div>
      <div class="font-xs text-base-400">{timePrint}</div>
    </div>
  </div>
</center>
