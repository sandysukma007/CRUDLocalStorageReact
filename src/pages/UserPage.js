import React, {useState, useEffect} from 'react'
import BookList from '../components/BookList'

export default function UserPage() {
  const [bookList, setBookList] = useState([])
  const [searchQuery, setSearchQuery] = useState('') // State untuk pencarian
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookList')) || []
    setBookList(storedBooks)
    setFilteredBooks(storedBooks) // Inisialisasi daftar buku yang ditampilkan
  }, [])

  useEffect(() => {
    // Filter buku berdasarkan judul yang sesuai dengan query pencarian
    const filtered = bookList.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredBooks(filtered)
  }, [searchQuery, bookList]) // Jalankan ulang jika query atau daftar buku berubah

  return (
    <div style={{padding: '20px'}}>
      <h1 style={{textAlign: 'center'}}>Daftar Buku</h1>

      {/* Input Pencarian */}
      <div style={{marginBottom: '20px', textAlign: 'center'}}>
        <input
          type="text"
          placeholder="Cari berdasarkan judul buku..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '80%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>

      {/* Tampilkan Daftar Buku yang Difilter */}
      <BookList books={filteredBooks} onEdit={() => {}} onDelete={() => {}} />
    </div>
  )
}
