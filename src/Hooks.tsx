import React from 'react'

type IVideoRef = React.RefObject<HTMLVideoElement>[]
type IVideosRef = React.MutableRefObject<IVideoRef>

const local = ['/Camera.mp4', '/Screen.mp4']

function App() {
  const [videos, setVideos] = React.useState<string[]>([])
  React.useEffect(() => setVideos(local), [])

  const refs = React.useRef<IVideoRef>([])
  videos.forEach((_, i) => {
    refs.current[i] = React.createRef()
  })
  const element = videos.map((src, i) => (
    <video
      key={src}
      src={src}
      width='400'
      ref={refs?.current?.[i]}
      controls
      onLoadedData={(e) => {
        if (e.target instanceof HTMLVideoElement) e.target.volume = 0
      }}
    />
  ))

  const fn = React.useCallback(
    (callback: (el: HTMLVideoElement) => void, refs: IVideosRef) => {
      return () => {
        for (const el of Array.from(refs?.current)) {
          if (el.current) {
            callback(el.current)
          }
        }
      }
    },
    [],
  )

  return (
    <div>
      {element}
      <div>
        <button
          onClick={fn((el) => {
            el.currentTime = 0
            el.play()
          }, refs)}
        >
          Play
        </button>
        <button onClick={fn((el) => el.pause(), refs)}>Pause</button>
        <input
          type='range'
          min='0'
          max='1'
          step='0.1'
          defaultValue='0'
          onChange={(e) =>
            fn((el) => (el.volume = Number(e.target.value)), refs)()
          }
        />
      </div>
    </div>
  )
}

export default App
