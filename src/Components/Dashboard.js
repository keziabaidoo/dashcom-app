import React from 'react'
import MainContent from './MainContent'
import Form from './Form'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        companyName: '',
        location: '',
        market: '',
        date: '',
        id:'',
        companyData: [
            {
                companyName: 'comp1',
                location: 'lagos',
                market: 'Real state',
                date: "Dec,15 2016",
                id: "1"
            },
            {
                companyName: 'comp2',
                location: 'Accra',
                market: 'Real state',
                date: "Dec,12 2016",
                id: "2"
            },
            {
                companyName: 'comp3',
                location: 'Bamako',
                market: 'Real state',
                date: "Dec,20 2016",
                id: "3"
            }
        ]
    };

    this.handleChange = this.handleChange.bind(this);
    
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    console.log(e.target.name)
};
addstartup =()=>{
    const laststartup = this.state.companyData;
    const { companyName, market, location, date} = this.state
    
    this.setState({
        companyData: [...laststartup, 
            {
            companyName,
            location,
            market,
            date,
            id: laststartup.length +1
        }
        ]
    })

};
render(){
  const {companyData, companyName, market, location, date, handleChange} = this.state

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">  {/* panel */}
              <div className="panel-heading">
                <div className="row panelhead"> {/* panelhead */}
                  <div className="col-lg-9 paneldashboard paneldashboardRight">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>Dashboard
                  </div>
                  <div className="col-lg-3 paneldashboard">
                    
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#form">
                                   Add Startup   <span className="caret"></span>
                                </button>

                      
                                {/* modal */}

                                
                                
                <div className="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                <h4 className="modal-title" id="myModalLabel">Add Startup</h4>
                                            </div>
                                            <div className="modal-body">
                                                <Form 
                                                handleChange={this.handleChange}
                                                {...this.state} 
                                                addstartup = {this.addstartup} />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                <button type="button" onClick={this.addstartup} className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* modal */}

                  </div>
                </div>
              </div>
              <div className="panel-body"> {/* panel body */}
                <MainContent 
                 handleChange={this.handleChange}
                 {...this.state} 
                 addstartup = {this.addstartup}/>
              </div>
            </div>   {/* panel */}
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default Dashboard;
