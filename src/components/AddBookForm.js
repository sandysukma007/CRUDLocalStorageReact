import React from 'react'

export default function AddBookForm({
  title,
  setTitle,
  genre,
  setGenre,
  author,
  setAuthor,
  publishDate,
  setPublishDate,
  publisher,
  setPublisher,
  image,
  setImage,
  isEditing,
  onAddBook,
}) {
  return (
    <div style={{marginBottom: '20px'}}>
      <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Judul Buku"
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>

      <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Penulis"
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>

      <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
        <input
          type="date"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          placeholder="Tanggal Terbit"
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          placeholder="Penerbit"
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>

      <button
        onClick={onAddBook}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isEditing ? '#FFA500' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        {isEditing ? 'Simpan Perubahan' : 'Tambah'}
      </button>
    </div>
  )
}
