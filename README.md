# HR Dashboard - Succession Planning Matrix

DESKRIPSI
Aplikasi React JS untuk memvisualisasikan peta kesiapan talenta (Talent Readiness Heatmap) dalam organisasi. Menampilkan distribusi karyawan berdasarkan Departemen (Column) dan Level Jabatan (Row).

## STACK

- React JS
- Tailwind CSS
- React Router DOM
- clsx & tailwind-merge

## FITUR UTAMA

1. Matriks Dinamis: Grid otomatis menyesuaikan jumlah departemen dan level.
2. Status Color Code:
   - Hijau: Potentially Ready
   - Kuning: Ready with Development
   - Merah: Not Ready Yet
3. Focus Stream Indicator: Border hitam tebal sepertinya untuk talenta prioritas. (belum pasti)
4. Auto Sorting: Karyawan dalam sel otomatis diurutkan berdasarkan prioritas status (Hijau -> Kuning -> Merah).

## CARA MENJALANKAN

### 1. Install dependencies:

```
npm install
```

atau

```
yarn
```

### 2. Jalankan development server:

```
npm run dev
```

```
yarn dev
```

## Note
Mock data ada di folder src/data/successionData.js