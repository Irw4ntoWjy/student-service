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
	<span class="font-bold"> 1. Kelebihan Pembayaran </span>
	<span class="text-sm">
		Jika ada satu atau lain hal mahasiswa memiliki kelebihan pembayaran maka akan menjadi deposit
		yang dapat dibawa ke semester selanjutnya. Refund atas deposit hanya dapat dilakukan sesudah
		mahasiswa wisuda.
	</span>
	<span class="font-bold"> 2. Belum Melakukan Pembayaran Seluruhnya</span>
	<span class="text-sm">
		Jika ada satu atau lain hal mahasiswa memiliki tagihan saat semester baru dimulai maka mahasiwa
		yang bersangkutan tidak diijinkan untuk mengikuti perkuliahan pada semester baru.
	</span>
	<span class="font-bold"> 3. Keterlambatan Pembayaran Biaya Pendidikan</span>
	<span class="text-sm">
		Mahasiswa akan dikenakan cuti akademik dan wajib memenuhi kewajiban untuk melunasi biaya
		administrasi cuti akademik.
	</span>
	<span class="font-bold"> 3. Keterlambatan Pembayaran Biaya Pendidikan</span>
	<span class="text-sm">
		Mahasiswa akan dikenakan cuti akademik dan wajib memenuhi kewajiban untuk melunasi biaya
		administrasi cuti akademik.
	</span>
	<span class="font-bold">
		4. Biaya Studi yang melewati 8 (delapan) Semester untuk Program Sarjana</span
	>
	<span class="text-sm">
		Apablia Mahasiswa belum menyelesaikan studi sampai dengan 8 (delapan) semester kuliah, tidak
		termasauk cuti akademik yang secara resmi diajukan dan disetujui serta yang diperbolehkan selama
		4 (empat) semester sesuai dengan yang diatur dalam SK Senat UPH Nomor 001/SK-Senat/UPH/III/2006,
		maka biaya pendidikan setelah 8 (delapan) semester kuliah ditambah jumlah semester cuti yang
		diambil, adalah mengikuti ketentuan biaya pendidikan yang baru (mengikuti harga baru yang sedang
		berlaku meliputi BPP, Herm biaya sidang, biaya wisuda). Biaya studi ini berlaku mulai intake
		ganjil 2020/2021.
	</span>
</div>

<div class="mt-32 flex flex-col justify-end gap-4">
	<span>Jika permasalahan anda termaksud pada poin diatas silahkan tekan tombol dibawah ini </span>
	<Button.Root
		class="shadow-mini hover:bg-dark/95 active:scale-98 inline-flex
			h-10 w-auto items-center justify-center self-start
			rounded-md bg-primary px-[21px] text-sm font-semibold text-background active:transition-all"
		onclick={() => {
			window.location.href =
				'https://drive.google.com/drive/folders/1nqXkcm7Jis4KZBSITfS1WwhK9M7iSsoh';
		}}
	>
		Link
	</Button.Root>

	<span>Ingin bantuan lebih lanjut ? </span>
	<Button.Root
		class="shadow-mini hover:bg-dark/95 active:scale-98  inline-flex
			h-10 w-auto items-center justify-center self-start
			rounded-md bg-primary px-[21px] text-sm font-semibold text-background active:transition-all"
		onclick={() => {
			goto('/appointment');
		}}
	>
		Buat Appointment
	</Button.Root>
</div>
