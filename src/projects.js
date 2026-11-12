import rentalImg from './assets/dashboard_rental.PNG'
import ownerImg from './assets/owner-dashboard.PNG'
import fypImg from './assets/dashboard_fyp.jpeg'
import fypDashboard from './assets/dashboard2_fyp.jpg'
import fypDashboard2 from './assets/dashboard3_fyp.jpg'
import fypHistory from './assets/history_fyp.jpg'
import fypPayment from './assets/payment_fyp.jpg'

export const projects = [
    {
       id:1,
       title:'Rental Scheduling System',
       category:'Web Development',
       year:'2026',
       description:
        'A web-based system for managing rental property viewings and scheduling.', 
        images:[
            ownerImg,
            rentalImg,
        ],
        technologies:[
            'HTML',
            'CSS',
            'Javascript',
            'Node.js',
            'Express',
            'MySQL'
        ],
        github:'https://github.com/Ridhwan-Zainal/rental_scheduling_system'
    },
    {
       id:2,
       title:'Clustering-Based Recommendation System Based on E-Wallet Users’ Spending Behavior',
       category:'Academic Project',
       year:'2025',
       description:
        'Developed an e-wallet prototype which demonstrate user spending behavior and clustering using K-means algorithm.', 
        images:[
            fypImg,
            fypDashboard2,
            fypPayment,
            fypHistory,
            fypDashboard,
        ],
        technologies:[
           'React Native',
            'Expo',
            'Firebase',
            'Javascript',
            'Python' 
        ],  
    }
]