import { useState } from 'react'
import { projects } from './projects'
import './App.css'



function App() {

  const [activeProject, setActiveProject] = useState(0)
  const [activeImage,setActiveImage] = useState(0)

  const project = projects[activeProject]

  const changeProject= (index) =>{
    setActiveProject(index)
    setActiveImage(0)
  }


  return (
    <>
      <header>
      <h1>Muhammad Ridhwan Bin Zainal Abidin</h1>
      <h2>Computer Science Student | Software Development</h2>

      <p>
      Computer Science student building web applications
      and learning full-stack development.
      </p>

      <div className="profile-links">
      <a 
      href="https://github.com/Ridhwan-Zainal"
      target="_blank"
      rel="noreferrer"
      >Github</a>
     
      <a 
      href="https://www.linkedin.com/in/muhammad-ridhwan-bin-zainal-abidin-82312b247/"
      target="_blank"
      rel="noreferrer"
      >LinkedIn</a>
      </div>

      </header>

    <main>
      <section className="project-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / MY WORK</p>
            <h2>Projects.</h2>
          </div>
        </div>

        <div className="project-nav">
          {projects.map((item, index)=>(
            <button
              key={item.id}
              type="button"
              className={activeProject===index ? 'selected' : ''}
              onClick={()=> changeProject(index)}
              >
                0{item.id} - {item.title}
              </button>
          ))}
        </div>

        <article className="project-detail">
          <p>Project 0{project.id}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="main-image-wrapper">
            <img
              className="main-image"
              src={project.images[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
              />
          </div>

          <div className="gallery-heading">
            <span>PROJECT SCREENSHOTS</span>
            <span>
              {activeImage + 1} / {project.images.length}
            </span>
          </div>

          <div className="image-gallery">
            {project.images.map((image, index)=>(
              <button
                key={index}
                type="button"
                className={activeImage === index ? `selected` : ''}
                onClick={()=> setActiveImage(index)}
                aria-label={`View screenshots ${index + 1}`}
                aria-pressed={activeImage === index}
              >
                <img src={image} alt ={`Screenshot ${index + 1}  preview`}/>
              </button>
            ))}

          </div>

        </article>
      </section>
    </main>


    </>
  )
}

export default App