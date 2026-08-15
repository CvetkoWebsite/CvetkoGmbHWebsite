import './App.css'

function App() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <main className="page">
      <picture className="coming-soon-picture">
        <source
          media="(max-width: 768px)"
          srcSet={`${baseUrl}cvetko-coming-soon-mobile.png`}
        />

        <img
          src={`${baseUrl}cvetko-coming-soon-desktop.jfif`}
          alt="Cvetko GmbH - Webseite in Bearbeitung"
          className="coming-soon-image"
        />
      </picture>
    </main>
  )
}

export default App
