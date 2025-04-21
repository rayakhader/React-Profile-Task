import SuggestionItem from './SuggestionItem';
import { FaUser } from 'react-icons/fa';
import '../style/Suggestions.css'

export default function Suggestions() {
  return (
    <div className='suggestions'>
      <h1>Who to follow</h1>

      <p className='follow-note'><FaUser /> Node.js and 9 others follow</p>
      <SuggestionItem
        img="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
        name="freeCodeCamp.org"
        handle="@freeCodeCamp"
        desc="We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbeyrenn."
      />

      <p className='follow-note'><FaUser /> Node.js and 5 others follow</p>
      <SuggestionItem
        img="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"
        name="TypeScript"
        handle="@typescript"
        desc="TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript."
      />

      <p className='follow-note'><FaUser /> Yazeed Obaid and 3 others follow</p>
      <SuggestionItem
        img="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
        name="Tailwind CSS"
        handle="@tailwindcss"
        desc="The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML."
        customClass="tailwind-bg"
      />
    </div>
  );
}
