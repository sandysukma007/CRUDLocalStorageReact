import React from 'react'

export default function Navbar({onLogout, isAdmin}) {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#2196F3',
        color: 'white',
      }}
    >
      <h1>Book App</h1>
      <div>
        <button
          onClick={onLogout}
          style={{
            padding: '10px',
            backgroundColor: '#F44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}
