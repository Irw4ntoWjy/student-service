<script lang="ts">
	import Qrcode from 'svelte-qrcode';
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	<Qrcode value="https://github.com/" />
	<div>Scan QR Code diatas ini untuk mengambil nomor antrian</div>
</div>
