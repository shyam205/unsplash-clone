//import Image from 'next/image';
//import Image from 'next/image';
//import Logo from '../public/vercel.svg';
import Link from 'next/link';
//import Search from '../public/magnifying-glass-solid.svg';
//import Camera from '../public/camera-solid.svg';

const  Header = () => {
  return (
    <header className='header'>
        <section>
            <nav>
            <svg width="32" height="32" className="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
               <div>
               <button className="searchimg"><svg width="20" height="20" className="DFW_E nT46U VETef" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path></svg></button>
                 <input type="text" placeholder='Search free high-resolution photos' />
                 <button className="imagelogo"><svg width="20" height="20" className="VdNCI nT46U VETef" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path></svg></button>
                 </div>
               <ul>
                 <li>Explore</li>
                 <li>Advertise</li>
                 <li>Blog</li>
               </ul>
               <ul>
                 <li>Log in</li>
                 <li className="submit-photo"><Link href="/">Submit your Photo</Link></li>
                 <li><svg width="24" height="24" className="GxoKE" viewBox="0 0 32 32" version="1.1" aria-hidden="false" fill="#767676"><path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path></svg></li>
               </ul>
            </nav>
        </section>
        <section className="tagsection">
             <section>
               <span>Editorial</span>
               <span>Nature Featured</span>
               <span>Color of Water</span>
               <span>Current Events</span>
               <span>Wallpapers</span>
               <span>3D Renders</span>
               <span>Textures & Patterns</span>
             </section>
        </section>
    </header>
  )
}

export default Header