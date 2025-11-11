import React from 'react';
import './body.css';



const Body = ({ tickets, taskStatusTickets, resolvedTickets, onTicketClick, onComplete }) => {
 
    const getStatusClass = (status) => {
        switch (status.toLowerCase().replace('-', ' ')) {
            case 'open':
                return 'status-open';
            case 'in-progress':
                return 'status-in-progress';
            case 'resolved':
                return 'status-resolved'; 
            default:
                return 'status-open';
        }
    };
    

    const getPriorityClass = (priority) => {
        switch (priority.toLowerCase().replace('-', ' ')) {
            case 'high priority':
                return 'priority-high';
            case 'medium priority':
                return 'priority-medium';
            case 'low priority':
                return 'priority-low';
            default:
                return '';
        }
    };

    return (
        <div className="main-content-wrapper">
            <div className="tickets-grid-container">
                
                {
                    tickets.map(ticket => (
                        <div 
                            className="ticket-card" 
                            key={ticket.id}
                            
                            onClick={() => onTicketClick(ticket.id)} 
                        >
                            <div className="card-header">
                                <h3 className="card-title">{ticket.title}</h3>
                               
                                <div className={`card-status ${getStatusClass(ticket.status)}`}>
                                    {ticket.status}
                                </div>
                            </div>

                            <p className="card-description">
                                {ticket.description}
                            </p>


                            <div className="card-footer">
                                <div className="details-left">
                                    <span className="ticket-id">{ticket.id}</span>
                                    <span className={`card-priority ${getPriorityClass(ticket.priority)}`}>
                                        {ticket.priority}
                                    </span>
                                </div>
                                <div className="details-right">
                                    <span className="assignee">{ticket.customer}</span>
                                    <span className="date">📅 {ticket.createdAt}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            
            <div className="task-sidebar">
                <div className="task-status-card">
                    <h3 className="sidebar-title">Task Status</h3>
                    {taskStatusTickets.length === 0 ? (
                        <p className="sidebar-text">Select a ticket to add to Task Status</p>) :
                         (taskStatusTickets.map(task => (
                            <div key={task.id} className="task-item">
                                
                                <p className="task-title">{task.title}</p>
                                <button 
                                    className="complete-button"
                                    
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        onComplete(task.id);
                                    }}
                                >
                                    Complete
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="resolved-task-card">
                    <h3 className="sidebar-title">Resolved Task</h3>
                    {resolvedTickets.length === 0 ? (
                        <p className="sidebar-text">No resolved tasks yet.</p>
                    ) : (
                        
                        resolvedTickets.map(resolved => (
                            <div key={resolved.id} className="resolved-item">
                                <p className="resolved-title">{resolved.title}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;