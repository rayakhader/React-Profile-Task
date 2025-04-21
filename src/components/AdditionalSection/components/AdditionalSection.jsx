import React from 'react'
import LikeItem from './LikeItem';
import TrendItem from './TrendItem';
import '../style/AdditionalSection.css'
import { FaSearch } from 'react-icons/fa';

function AdditionalSection() {
    const likes = [
        {
          img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
          name: 'Tailwind CSS',
          handle: '@tailwindcss'
        },
        {
          img: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
          name: 'TypeScript',
          handle: '@typescript'
        },
        {
          img: 'https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png',
          name: 'freeCodeCamp.org',
          handle: '@freeCodeCamp'
        }
      ];
      
      const trends = [
        {
          category: 'Gaming . Trending',
          hash: '#VALORANTChampions',
          posts: '27.9K posts',
          arabicTexts: ['الانستا'],
          secPosts: '1,411 posts'
        },
        {
          category: 'Gaming . Trending',
          hash: 'Mako',
          posts: '27.9K posts',
          arabicTexts: ['#رسالة اليوم'],
          secPosts: '22.3K posts'
        },
        {
          hash: '#Messi',
          posts: '77.2K posts',
          arabicTexts: ['#جامعه_طيبه', 'ايفون'],
          secPosts: '27.6K posts'
        },
        {
          category: 'Gaming . Trending',
          hash: 'fnatic',
          posts: '8,748 posts',
          arabicTexts: ['الاعلام العبري']
        },
        {
          hash: '#InterMiamiCF',
          posts: '68.4K posts'
        }
      ];
  return (
    <div className='additional-section'>
      <div className="search-wrapper">
        <FaSearch className='search-icon'/>
        <input type="text" placeholder='Search' className='search-input' />
      </div>

    <div className='like-suggestion'>
      <h1>You might like</h1>
      <ul>
        {likes.map((item, i) => (
          <LikeItem key={i} {...item} />
        ))}
      </ul>
      <div className='show-more'><p>Show more</p></div>
    </div>

    <div className='trends'>
      <h1>Trends for you</h1>
      <ul>
        {trends.map((item, i) => (
          <TrendItem key={i} {...item} />
        ))}
      </ul>
      <div className='show-more'><p>Show more</p></div>
    </div>
  </div>
  )
}

export default AdditionalSection
