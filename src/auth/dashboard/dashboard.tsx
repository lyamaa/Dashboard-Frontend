import React, { Component } from "react";
import Wrapper from "../components/wrapper";
import c3 from "c3";
import axios from "axios";

export default class dashboard extends Component {
  componentDidMount = async () => {
    let chart = c3.generate({
      bindto: "#chart",
      data: {
        x: "x",
        columns: [["x"], ["Sales"]],
        types: {
          Sales: "bar",
        },
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m-%d",
          },
        },
      },
    });

    let chart2 = c3.generate({
      bindto: "#chart2",
      data: {
        x: "x",
        columns: [["x"], ["Sales"]],
        
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m-%d",
          },
        },
      },
    });

    let charts1 = c3.generate({
      bindto: "#charts1",
      data: {
        x: "x",
          // iris data from R
          columns: [
              ["x"],
              ["Sales"],
  
          ],
          type: 'scatter'
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m-%d",
          },
        },
      },
  });
  let charts = c3.generate({
    bindto: "#charts",
    data: {
      x: "x",
        columns: [
            ["x"], ["Sales"]
        ],
        type: 'bar',
        types: {
            x: 'step',
            Sales: 'step',
           
            
        },
        
        groups: [
            ['x','sales']
        ]
        
    },
    axis: {
      x: {
        type: "timeseries",
        tick: {
          format: "%Y-%m-%d",
        },
      },
    },
    zoom: {
      enabled: true
    }
});
  

    const res = await axios.get("chart");
    const record: { date: string; sum: number }[] = res.data.data;
    console.log(record);

    chart.load({
      columns: [
        ["x", ...record.map((r) => r.date)],
        ["Sales", ...record.map((r) => r.sum)],
      ],
    });
   
    chart2.load({
      columns: [
        ["x", ...record.map((r) => r.date)],
        ["Sales", ...record.map((r) => r.sum)],
      ],
    });

    charts1.load({
      columns: [
        ["x", ...record.map((r) => r.date)],
        ["Sales", ...record.map((r) => r.sum)],
      ],
    });

    charts.load({
      columns: [
        ["x", ...record.map((r) => r.date)],
        ["Sales", ...record.map((r) => r.sum)],
      ],
    });


   
  
  
  };

  render() {
    return (
      <Wrapper>
        <div className="columns is-multiline mt-5 ml-2">
            <div className="column">
              <div className="box notification is-primary">
                <div className="heading">Top Seller Total</div>
                <div className="title">56,950</div>
                <div className="level">
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Sales $</div>
                      <div className="title is-5">250K</div>
                    </div>
                  </div>
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Overall $</div>
                      <div className="title is-5">750K</div>
                    </div>
                  </div>
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Sales %</div>
                      <div className="title is-5">25%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box notification is-warning">
                <div className="heading">Revenue / Expenses</div>
                <div className="title">55% / 45%</div>
                <div className="level">
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Rev Prod $</div>
                      <div className="title is-5">30%</div>
                    </div>
                  </div>
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Rev Serv $</div>
                      <div className="title is-5">25%</div>
                    </div>
                  </div>
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Exp %</div>
                      <div className="title is-5">45%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box notification is-info">
                <div className="heading">Feedback Activity</div>
                <div className="title">78% &uarr;</div>
                <div className="level">
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Pos</div>
                      <div className="title is-5">1560</div>
                    </div>
                  </div>
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Neg</div>
                      <div className="title is-5">368</div>
                    </div>
                  </div>
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Pos/Neg %</div>
                      <div className="title is-5">77% / 23%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box notification is-danger">
                <div className="heading">Orders / Returns</div>
                <div className="title">75% / 25%</div>
                <div className="level">
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Orders $</div>
                      <div className="title is-5">425K</div>
                    </div>
                  </div>
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Returns $</div>
                      <div className="title is-5">106K</div>
                    </div>
                  </div>
                  <div className="level-item">
                    <div className="">
                      <div className="heading">Success %</div>
                      <div className="title is-5">+ 28,5%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="columns is-multiline mt-5 ml-2">
            <div className="column is-6">
              <article className="message is-dark">
                <div className="message-header">
                  <p>Chart</p>
                </div>
                <div className="message-body">
                  <div id="chart" style={{width: "100%"}}></div>
                </div>
              </article>
            </div>


            <div className="column is-6">
              <article className="message is-dark">
                <div className="message-header">
                  <p>Chart</p>
                </div>
                <div className="message-body">
                  <div id="chart2" style={{width: "100%"}}></div>
                </div>
              </article>
            </div>

            <div className="column is-6">
              <article className="message is-dark">
                <div className="message-header">
                  <p>Chart</p>
                </div>
                <div className="message-body">
                  <div id="charts" style={{width: "100%"}}></div>
                </div>
              </article>
            </div>


            <div className="column is-6">
              <article className="message is-dark">
                <div className="message-header">
                  <p>Chart</p>
                </div>
                <div className="message-body">
                  <div id="charts1" style={{width: "100%"}}></div>
                </div>
              </article>
            </div>
          </div>

      </Wrapper>
    );
  }
}
