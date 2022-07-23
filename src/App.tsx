import React from 'react';
import * as Notification from './components/Notifications';
import { Button } from '@mui/material';

function App() {
  return (
    <div className='bg-lightblue'>
      <Button onClick={() => Notification.Success({ msg: 'Ala, funfa msm' })}>Success</Button>
      <Button onClick={Notification.Error}>Error</Button>
      <Button onClick={Notification.Warning}>Warning</Button>
    </div>
  );
}

export default App;
