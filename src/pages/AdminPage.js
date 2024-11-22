import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import AddBookForm from '../components/AddBookForm'
import BookList from '../components/BookList'

export default function AdminPage() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null)
  const [bookList, setBookList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [genre, setGenre] = useState('')
  const [author, setAuthor] = useState('')
  const [publishDate, setPublishDate] = useState('')
  const [publisher, setPublisher] = useState('')

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookList')) || []
    setBookList(storedBooks)
  }, [])

  useEffect(() => {
    localStorage.setItem('bookList', JSON.stringify(bookList))
  }, [bookList])

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn')
    navigate('/')
  }

  const handleAddBook = () => {
    if (title.trim() === '') {
      alert('Judul buku tidak boleh kosong')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      const base64Image = image ? reader.result : null
      const newBook = {
        title,
        genre,
        author,
        publishDate,
        publisher,
        image: base64Image,
      }

      if (isEditing) {
        const updatedBooks = [...bookList]
        updatedBooks[currentIndex] = newBook
        setBookList(updatedBooks)
        setIsEditing(false)
        setCurrentIndex(null)
      } else {
        setBookList([...bookList, newBook])
      }

      setTitle('')
      setImage(null)
      setGenre('')
      setAuthor('')
      setPublishDate('')
      setPublisher('')
    }

    if (image) {
      reader.readAsDataURL(image)
    } else {
      const newBook = {
        title,
        genre,
        author,
        publishDate,
        publisher,
        image: null,
      }
      setBookList([...bookList, newBook])
    }
  }

  const handleEditBook = (index) => {
    const book = bookList[index]
    setTitle(book.title)
    setGenre(book.genre || '')
    setAuthor(book.author || '')
    setPublishDate(book.publishDate || '')
    setPublisher(book.publisher || '')
    setImage(null)
    setIsEditing(true)
    setCurrentIndex(index)
  }

  const handleDeleteBook = (index) => {
    const updatedBooks = bookList.filter((_, i) => i !== index)
    setBookList(updatedBooks)
  }

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <div style={{padding: '20px'}}>
        <AddBookForm
          title={title}
          setTitle={setTitle}
          image={image}
          setImage={setImage}
          genre={genre}
          setGenre={setGenre}
          author={author}
          setAuthor={setAuthor}
          publishDate={publishDate}
          setPublishDate={setPublishDate}
          publisher={publisher}
          setPublisher={setPublisher}
          isEditing={isEditing}
          onAddBook={handleAddBook}
        />
        <BookList
          books={bookList}
          onEdit={handleEditBook}
          onDelete={handleDeleteBook}
        />
      </div>
    </div>
  )
}
