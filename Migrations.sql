CREATE DATABASE backend_warga_siaga;
USE backend_warga_siaga;

-- Tabel akun
CREATE TABLE `akun` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `akun` (`id`, `email`, `password`) VALUES
(1, 'user@gmail.com', '123456'),
(2, 'admin@gmail.com', '123456');


-- Tabel iuran
CREATE TABLE `iuran` (
  `id` int(11) NOT NULL,
  `nama` varchar(45) NOT NULL,
  `tanggal` date NOT NULL,
  `jumlah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `iuran` (`id`, `nama`, `tanggal`, `jumlah`) VALUES
(1, 'Haji Miing', '2024-11-01', 5000),
(2, 'Haji Miing', '2024-11-08', 5000),
(3, 'Haji Miing', '2024-11-15', 5000),
(4, 'Pak Budi', '2024-11-01', 5000),
(5, 'Pak Budi', '2024-11-08', 5000),
(6, 'Pak Budi', '2024-11-15', 5000),
(7, 'Pak Aji', '2024-11-01', 5000),
(8, 'Pak Aji', '2024-11-08', 5000),
(9, 'Pak Aji', '2024-11-15', 5000);

-- Tabel pelaporan
CREATE TABLE `pelaporan` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `lokasi` varchar(50) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `waktu` time NOT NULL,
  `tanggal` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `pelaporan` (`id`, `nama`, `lokasi`, `deskripsi`, `waktu`, `tanggal`) VALUES
(1, 'Haji Miing', 'Jalan Raya Pantura No.13, Tambun, Bekasi', 'Terjadi pencurian di perumahan Bekasi Residence. Pelaku berjumlah dua orang dan berhasil mencuri 2 unit hp, 1 unit laptop, dan sejumlah perhiasan.  ', '22:10:02', '2024-11-01'),
(2, 'Bapak Aji', 'Jalan Raya Pengasinan No.13, Rawalumbu, Bekasi', 'Kondisi sekitar terpantau aman dan tidak ada aktivitas yang mencurigakan.  ', '00:13:42', '2024-11-02');


-- Tabel petugas ronda
CREATE TABLE `petugas_ronda` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `tanggal` date NOT NULL
)


INSERT INTO `petugas_ronda` (`id`, `nama`, `tanggal`, `lokasi`) VALUES
(1, 'Bapak Aji', '2024-10-30', 'Pos 1'),
(2, 'Bapak Budi', '2024-10-29', 'Pos 1'),
(3, 'Bapak Joko', '2024-10-28', 'Pos 1'),
(4, 'Bapak Andi', '2024-10-27', 'Pos 1');


-- Tabel profil
CREATE TABLE `profil` (
  `id` int(11) NOT NULL,
  `nama_lengkap` varchar(45) NOT NULL,
  `no_telp` varchar(45) NOT NULL,
  `alamat` varchar(255) NOT NULL
)


INSERT INTO `profil` (`id`, `nama_lengkap`, `no_telp`, `alamat`) VALUES
(1, 'Miing Hartanto', '081298762345', 'Jl, Kalimalang Utara No.16 RT006/003, Duren Sawit, Jakarta Timur');
