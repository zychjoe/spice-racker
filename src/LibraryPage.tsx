import React, { ReactNode } from 'react';
import { useState } from 'react';
import LibrarySpice from './interfaces/LibrarySpice';
import './LibraryPage.css';

function LibraryPage(libraryProp: LibrarySpice[]) {

  return (
    <div>
      {libraryProp.map((spice) => <p>{spice.name}</p>)}
    </div>
  )
}

export default LibraryPage;