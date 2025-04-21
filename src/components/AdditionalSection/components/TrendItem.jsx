import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import '../style/TrendItem.css'

function TrendItem({ category, hash, posts, arabicTexts = [],secPosts }) {
  return (
    <li>
    <div className='trend'>
      <div className='trend-header'>
        <div className='trend-title'>
          {category && <p className='trend-category'>{category}</p>}
          {hash && <p className='trend-hash'>{hash}</p>}
          {posts && <p className='trend-posts'>{posts}</p>}
        </div>
        <span><FaEllipsisH /></span>
      </div>
      {arabicTexts.map((text, idx) => (
        <p key={idx} className='trend-arabic-text'>{text}</p>
      ))}
      {secPosts && <p>{secPosts}</p>}
    </div>
  </li>
  )
}

export default TrendItem
