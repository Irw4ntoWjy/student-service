<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from 'bits-ui';
</script>

<div class="flex flex-col text-base tracking-wide">
	<span
		>Biaya pendidikan dibayarkan masing-masing mahasiswa pada setiap semester/term sebelumk memasuki
		semester/term yang baru sesuai dengan jumlah Credit/SKS yang akan dijalankan oleh mahasiswa.
		Pembayaran uang kuliah dapat dibayarkan sendiri oleh mahasiswa yang bersangkutan atau dapat
		diwakilkan dengan tata cara pembayaran yang ditetapkan oleh Universitas Pelita Harapan. Sebelum
		melakukan pembayaran, mahasiswa wajib mengakses saldo di OPCS pada akun mahasiswa untuk
		memastikan jumlah tagihan yang akan dibayarkan. Pembayaran biaya pendidikan dapat dilakukan
		melalui UPH mobile, ATM NOBU atau dengan mengakses web studentfinance.uph.edu dan login
		menggunakan NIM dan password tanggal lahir (DDMMYYYY).
	</span>

	<span class="font-bold">
		Ada beberapa kondisi administrasi yang dapat dihadapi oleh mahasiswa sebagai berikut:
	</span>
</div>
<Button.Root
	class="shadow-mini hover:bg-dark/95 active:scale-98 inline-flex h-10
w-auto items-center justify-center rounded-md bg-primary
px-[21px] text-sm font-semibold text-background active:transition-all"
	onclick={() => {
		goto('/appointment');
	}}
>
	Buat Appointment
</Button.Root>
