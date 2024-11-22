import React from 'react'

export default function BookList({books, onEdit, onDelete}) {
  return (
    <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
      {books.length === 0 ? (
        <p
          style={{
            textAlign: 'center',
            fontStyle: 'italic',
            color: '#888',
            fontSize: '18px',
            margin: '20px 0',
          }}
        >
          Data tidak tersedia
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {books.map((book, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow =
                  '0 6px 10px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              {book.image && (
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderBottom: '1px solid #ddd',
                  }}
                />
              )}
              <div style={{padding: '15px'}}>
                <h3
                  style={{
                    margin: '0 0 10px',
                    fontSize: '18px',
                    color: '#333',
                    fontWeight: '600',
                  }}
                >
                  {book.title}
                </h3>
                <p style={{margin: '5px 0', fontSize: '14px', color: '#555'}}>
                  <strong>Genre:</strong>{' '}
                  {book.genre || (
                    <span style={{color: '#888'}}>Tidak tersedia</span>
                  )}
                </p>
                <p style={{margin: '5px 0', fontSize: '14px', color: '#555'}}>
                  <strong>Penulis:</strong>{' '}
                  {book.author || (
                    <span style={{color: '#888'}}>Tidak tersedia</span>
                  )}
                </p>
                <p style={{margin: '5px 0', fontSize: '14px', color: '#555'}}>
                  <strong>Tanggal Terbit:</strong>{' '}
                  {book.publishDate || (
                    <span style={{color: '#888'}}>Tidak tersedia</span>
                  )}
                </p>
                <p style={{margin: '5px 0', fontSize: '14px', color: '#555'}}>
                  <strong>Penerbit:</strong>{' '}
                  {book.publisher || (
                    <span style={{color: '#888'}}>Tidak tersedia</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
