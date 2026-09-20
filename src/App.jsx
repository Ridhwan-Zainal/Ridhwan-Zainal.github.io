import rentalImg from './assets/dashboard_rental.PNG'
import fypImg from './assets/dashboard_fyp.jpeg'
import './App.css'
import ProjectCard from './ProjectCard'


function App() {
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
      <section>

      <h2>Projects</h2>
      <div className="project-grid">
      <ProjectCard
        title="Rental Scheduling System"
        description="A web-based system for managing rental property
        viewings and scheduling."
        image={rentalImg}
        technologies={[
          'HTML',
          'CSS',
          'Javascript',
          'Node.js',
          'Express',
          'MySQL'
        ]}
        github="https://github.com/Ridhwan-Zainal/rental_scheduling_system"
      />
  
    
     <ProjectCard
      title="Clustering-Based Recommendation System Based on E-Wallet Users’
Spending Behavior"
      description="Developed an e-wallet prototype which demonstrate user spending
behavior and clustering using K-means algorithm."
      image={fypImg}
      technologies={[
       'React Native',
       'Expo',
       'Firebase',
       'Javascript',
       'Python' 
      ]}
     />
     </div>
    </section>
    </main>


    </>
  )
}

export default App