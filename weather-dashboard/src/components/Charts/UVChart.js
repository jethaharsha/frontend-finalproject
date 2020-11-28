import React from "react";
import axios from "axios";
import ReactStoreIndicator from 'react-score-indicator';
import "./UVChart.css";

class UVChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         uvindex:4,
         width:undefined,
         option:undefined    
        }
        };
        componentDidUpdate(prevProps) {
            if (
              prevProps.lat !== this.props.lat ||
              prevProps.lon !== this.props.lon
            ) {
              this.componentDidMount();
            }
          }
          componentDidMount = () =>
          {   
          axios.get 
          ("https://api.openweathermap.org/data/2.5/onecall?lat="+this.props.lat+"&lon="+this.props.lon+"&exclude=minutely&appid=771164bf0a4b1c7e73d4a81d4f3b9485&units=imperial")

            .then((response) => {
                const uv = response.data.current.uvi;
                //console.log(uv);
                this.setState({
                    uvindex:uv, 
                }
                )
            }
            );
            }
          render(){
              return(
                  <div>
                      <p className="uv"><b>UVIndex</b></p>
                      <ReactStoreIndicator 
                      value={this.state.uvindex}
                      maxValue={12}
                      />
                  </div>
              );
          }
        }
export default UVChart;