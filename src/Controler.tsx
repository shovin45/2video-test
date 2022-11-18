import React from 'react'

import { main } from './module/main'

function App() {
  React.useEffect(() => {
    main()
  }, [])
  return (
    <div className='player'>
      <div className='preview'>
        <video src='/Camera.mp4' width='640' height='268'></video>
        <video src='/Screen.mp4' width='640' height='268'></video>
      </div>

      <div className='clip'>
        <label>
          <input data-play-segments type='checkbox' /> Play in time range
        </label>
        <span data-start-time='120' data-end-time='130'></span>
        <span data-start-time='60' data-end-time='70'></span>
        <span data-start-time='180' data-end-time='190'></span>
      </div>

      <div className='control'>
        <input
          data-seek
          type='range'
          value='0'
          min='0'
          max='0'
          style={{ width: 600 }}
        />
        <br />
        <button data-play>Play</button>
        <button data-pause>Pause</button>
        <button data-stop>Stop</button>
        <span>PlaybackRate</span>
        <input
          data-playback-rate
          type='range'
          value='1'
          min='0.25'
          max='2'
          step='0.25'
        />
        <span data-current-time='0'>0</span>
        <span>/</span>
        <span data-duration='0'>0</span>
        <span>Volume</span>
        <input data-volume type='range' value='1' min='0' max='1' step='0.2' />
        <button data-muted='true'>Mute</button>
        <button data-muted=''>Unmute</button>
      </div>
    </div>
  )
}

export default App
