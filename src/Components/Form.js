import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
    
    }
    
    render(){
        const {companyData, companyName, market, location, date, handleChange, addstartup} = this.props
   
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleInputCompanyName">CompanyName</label>
                    <input type="companyname" value={companyName} name='companyName' onChange={handleChange} className="form-control" id="exampleInputCompanyName" placeholder="CompanyName" />
                 </div>
                    <div className="form-group">
                        <label for="exampleInputLocation">Location</label>
                        <input type="location"   value={location} name='location' onChange={handleChange} className="form-control" id="exampleInputLocation" placeholder="Location" />
                    </div>
                        <div className="form-group">
                            <label for="exampleInputMarket">Market</label>
                            <input type="market"  value={market} name='market' onChange={handleChange} className="form-control" id="exampleInputMarket" />
                        </div>

                            <div className="form-group">
                                <label for="exampleInputDate">Date</label>
                                <input type="date"  value={date} name='date' onChange={handleChange} className="form-control" id="exampleInputLocation" placeholder="Date" />
                            </div>
                            </form>

                        </div>

                        )
                    }
                    
}
export default Form;