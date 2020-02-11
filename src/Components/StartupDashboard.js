import React from 'react'

const StartupDashboard = () => {
    return (
        <div>
            <div className="list-group"> {/* dashboard list group */}
                <a href="#" className="list-group-item active list-group-item list-group-item-danger">
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                </a>

                <a href="#" className="list-group-item">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Startup
                </a>
                
                <a href="#" className="list-group-item">
                    <span className="glyphicon glyphicon-list" aria-hidden="true"></span> Startup Details
                </a>
                
            </div>
        </div>
    )
}

export default StartupDashboard;
