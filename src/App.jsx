import { Suspense, useState, useEffect } from 'react';
import './app.css'
import { toast, ToastContainer } from 'react-toastify';
import Banner from './components/banner';
import Body from './components/body';
import Navbar from './components/navbar';
import Footer from './components/footer';

const fetchTickets = async() =>{
  const res = await fetch("/tickets.json");
  return res.json();
}

function App() {
  
  const [tickets, setTickets] = useState([]);
  
  const [taskStatusTickets, setTaskStatusTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  
 
  const [inProgressCount, setInProgressCount] = useState(0); 
  const [resolvedCount, setResolvedCount] = useState(0);
  
  const ticketsPromise = fetchTickets();

  
  useEffect(() => {
   
    const loadInitialTickets = async () => {
      try {
        const initialTickets = await ticketsPromise;
        setTickets(initialTickets);
        
      } catch (error) {
        console.error("Failed to fetch initial tickets:", error);
      }
    };
    loadInitialTickets();
  }, [ticketsPromise]);

  
  const addTask = (ticketId) => {
    const ticketToAdd = tickets.find(t => t.id === ticketId);
    
    
    if (ticketToAdd && !taskStatusTickets.some(t => t.id === ticketId)) {
      setTaskStatusTickets(prev => [...prev, ticketToAdd]);
      
     
      setInProgressCount(prev => prev + 1);
      
      
      setTickets(prevTickets => 
        prevTickets.map(t => 
          t.id === ticketId ? { ...t, status: 'In-Progress' } : t
        )
      );

      
      toast(`Ticket ${ticketId} added to Task Status.`);
    }
  };

  
  const completeTask = (ticketId) => {
    const completedTicket = taskStatusTickets.find(t => t.id === ticketId);

    if (completedTicket) {
      
      setTaskStatusTickets(prev => prev.filter(t => t.id !== ticketId));
      
      
      setResolvedTickets(prev => [...prev, completedTicket]);
      
      
      setInProgressCount(prev => Math.max(0, prev - 1));
      
      
      setResolvedCount(prev => prev + 1);

      
      setTickets(prevTickets => 
        prevTickets
          .filter(t => t.id !== ticketId) 
      );
      
      
      toast(`Ticket ${ticketId} completed and resolved!`);
    }
  };


  return (
    <>
      <div className="bg-white min-h-screen" data-theme="light">
        <Navbar />
        <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
        
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Body 
            tickets={tickets} 
            taskStatusTickets={taskStatusTickets} 
            resolvedTickets={resolvedTickets} 
            onTicketClick={addTask} 
            onComplete={completeTask} 
          />
        </Suspense>
        <Footer></Footer>
      </div>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App;