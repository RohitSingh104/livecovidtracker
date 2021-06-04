import React ,{useState,useEffect} from 'react'
import './statewise.css'
const Statewise = () => {

    const [data,setData] = useState([]);
    const getCovidData = async ()=>{
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData= await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise)
    
    }
    useEffect(() => {
       getCovidData();
    }, [])
    return (
        
        
        <div className="container">
            <div className="main-heading">
                <h1 className="heading"><span>INDIA</span> COVID-19 Dashboard</h1>
            </div>

            <div className="table-responsive">
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((currVal,ind)=>{
                                return(
                                    <tr key={ind}>
                                        <td>{currVal.state}</td>
                                        <td>{currVal.confirmed}</td>
                                        <td>{currVal.recovered}</td>
                                        <td>{currVal.deaths}</td>
                                        <td>{currVal.active}</td>
                                        <td>{currVal.lastupdatedtime}</td>
                                    </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    
    )
}

export default Statewise
