import React from 'react';
import Link from 'next/link';

import { Button } from '../button/Button';
import './footer.css';

export const Footer = () => (
  <footer>
    <div className="footer">
      <div className='by'>
        <label> Hecho en Argentina y Costa Rica - <Link className='contact' href={'mailto:leandro@thappie.com'} > Contacto </Link> </label>
      </div>
      <div>
        <>
          <Button size="large" label="Lista de espera" />
        </>
      </div>
    </div>
  </footer>
);
