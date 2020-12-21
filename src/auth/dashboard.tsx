import React from "react";
import Wrapper from "./components/wrapper"

const Dashboard = () => (
  <Wrapper>
    <main className="column main">
        <nav className="breadcrumb is-small" aria-label="breadcrumbs">
          <ul>
            <li><a href="/">Home</a></li>
            <li className="is-active"><a href="#" aria-current="page">Dashboard</a></li>
          </ul>
        </nav>

        <div className="level mt-2 mr-2 content-title">
          <div className="level-left">
            <div className="level-item">
              <div className="title has-text-primary">
                <span className="icon is-small icon-title">
                  <i className="fa fa-tachometer"></i>
                </span>
                <span>Dashboard</span>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button type="button" className="button is-small">March 8, 2017 - April 6, 2017</button>
            </div>
          </div>
        </div>


        <div className="columns is-multiline">
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

        <div className="columns is-multiline">
          <div className="column is-6">
            <article className="message is-dark">
              <div className="message-header">
                <p>Chart</p>
              </div>
              <div className="message-body">
                <div id="chartLine" style={{width: "100%"}}></div>
              </div>
            </article>
          </div>
          <div className="column is-6">
            <article className="message is-dark">
              <div className="message-header">
                <p>Chart</p>
              </div>
              <div className="message-body">
                <div id="chartScatter" style={{width: "100%"}}></div>
              </div>
            </article>
          </div>
          <div className="column is-6">
            <article className="message is-dark">
              <div className="message-header">
                <p>Chart</p>
              </div>
              <div className="message-body">
                <div id="chartDoughnut" style={{width: "100%"}}></div>
              </div>
            </article>
          </div>
          <div className="column is-6">
            <article className="message is-dark">
              <div className="message-header">
                <p>Chart</p>
              </div>
              <div className="message-body">
                <div id="chartBar" style={{width: "100%"}}></div>
              </div>
            </article>
          </div>
        </div>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
       
        <ins className="adsbygoogle" style={{display: "inline-block", width: "728px", height: "90px"}}
          data-ad-client="ca-pub-5442972248172818" data-ad-slot="7319719723" />
        <script>
            ; (adsbygoogle = window.adsbygoogle || []).push({})
        </script>

      </main>
  </Wrapper>
)

export default Dashboard;
