import { pageLinks, socialLinks } from '../data/data';

const Foter = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((pageLink) => {
          return (
            <li key={pageLink.id}>
              <a href={pageLink.href} className='footer-link'>
                {pageLink.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>

        {
          socialLinks.map((link)=>{
            return (
              <li key={link.id}>
                <a href={link.href} target='_blank' className='footer-icon'>
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })
        }
        
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};

export default Foter;
