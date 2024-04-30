export function VideoNav () {
  return (
    <>
      <video
        poster='https://images.unsplash.com/photo-1713813091291-ba9b947b8803?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        preload='auto' autoPlay playsInline loop muted className=' w-[100%] max-h-[100%] box-border inline object-cover relative -z-10'
      >
        <source
          src='../../../../../build/videos/App/background_vide_home_page.mp4'
          type='video/mp4'
        />
      </video>
    </>

  )
}
