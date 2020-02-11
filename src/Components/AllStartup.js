import React from 'react'
import Form from './Form'





class AllStartup extends React.Component {
   
    render() {

        const {companyData, companyName, market, location, date, handleChange, addstartup} = this.props
        return (
            <div>

                <div className="panel panel-danger"> {/*  panel */}
                    <div className="panel-heading">
                        <h3 className="panel-title ">AllStartup</h3> {/* panel title */}
                    </div>
                    <div className="panel-body"> {/* panel body */}
                        <div className="searchbox"> {/* search box */}
                            <div>
                                <form>
                                    <div className="form-group">
                                        <input type="search" className="form-control" id="search" placeholder="Filter Startup" />
                                    </div>
                                </form>
                            </div>
                            <div>
                                <table className="table table-striped">
                                    <tbody>
                                        <tr className="">
                                            <th>Company</th>
                                            <th>Market/Industry</th>
                                            <th>Location</th>
                                            <th>Joined</th>
                                            <th>Action</th>
                                        </tr>
                                        {
                                            this.props.companyData.map(ent => (
                                                <tr>
                                                    <td> {ent.companyName} </td>
                                                    <td> {ent.market} </td>
                                                    <td> {ent.location}  </td>
                                                    <td> {ent.date}</td>
                                                    <td>{

                                                        <button type="button" className="btn btn-primary">
                                                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                                        </button>}

                                                        {<button type="button" className="btn btn-danger btnpadding">
                                                            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                                        </button>}
                                                    </td>
                                                </tr>


                                            ))
                                        }
                                    </tbody>
                                </table>



                                {/* modal */}

                                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#form">
                                   Add Startup
                                </button>

                                
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
                </div> {/* panel */}

            </div>

        )

    }

}

export default AllStartup;
