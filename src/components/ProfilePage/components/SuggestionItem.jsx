import '../style/SuggestionItem.css'


export default function SuggestionItem({ img, name, handle, desc, customClass = '' }) {
    return (
      <div className='suggestion-item'>
        <div className='suggestion-profile'>
          <img src={img} alt="" className={`user-avatar ${customClass}`} />
          <div>
            <h3>{name}</h3>
            <p className='profile-handle'>{handle}</p>
            <p>{desc}</p>
          </div>
        </div>
        <button className='follow-button'>Follow</button>
      </div>
    );
  }
  