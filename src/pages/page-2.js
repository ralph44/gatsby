import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Progress } from 'reactstrap';
import '../components/boxes.css'

var divStyle = {
  background: 'grey',
  opacity: '0.8',
  borderRadius: '20px',
  padding: '50px'
}
var abstand = {
  paddingBottom: '20px'
}
var abstand1 = {
  paddingTop: '10px'
}
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div>
    <br></br>
    <div style={divStyle}>
      
      <h2><a name="Studium" class="anchor" href="#education"><span class="octicon octicon-link"></span></a>Aktueller Job</h2>

        <ul>
          <li style={abstand1}>Februar 2019</li>
          <ul>
            <li style={abstand1}>Jade Hochschule: Jugendforscher</li>
            <li>Projekt: Reinforcement Learning Framework für Unternehmensprozesse</li>
          </ul>
        </ul>
        </div>
        <br></br>
        <div style={divStyle}> 
        <h2>
        <a name="Education" class="anchor" href="#education"><span class="octicon octicon-link"></span></a>Bildungsweg</h2>

        <ul>
        <li style={abstand1}>Sommer 2018</li>
            <ul>
              <li style={abstand1}>Praktikum Senacor</li> 
              <li>Bereich: Technischer Berater für Testautomatisierung</li>
            </ul>
          <li style={abstand1}>2014-heute</li>
            <ul>
            <li style={abstand1}>Jade Hochschule Wilhelmshaven</li>
            <ul>
              <li>Studium: 10 Semester Wirtschaftsinformatik</li>
            </ul>
             </ul>
          <li style={abstand1}>2012-2014</li>
          <ul>
            <li style={abstand1}>TU Braunschweig</li>
            <ul>
              <li>Studium: 1 Semester Wirtschaftsinformatik</li>
              <li>Studium: 2 Semester Wirtschaftsingenieur</li>
            </ul>
          </ul>
        </ul>
        </div>
        <br></br>
        <div style={divStyle}>
        <h2>
          <a name="computerskills" class="anchor" href="#computerskills"><span class="octicon octicon-link"></span></a>Fähigkeiten
        </h2>

        <ul>
          <li  style={abstand1}>Programmiersprachen</li>
              <div className="text-center" style={abstand1}>Python</div>
              <Progress value="10" color="success" className="text-center" animated="True" >10%</Progress>
              <div className="text-center" style={abstand1}>Javascript</div> 
              <Progress value="40" color="success" className="text-center" animated="True">40%</Progress>
              <div className="text-center" style={abstand1}>React</div>
              <Progress value="30" color="success" className="text-center" animated="True">30%</Progress>
              <div className="text-center" style={abstand1}>Java</div>
              <Progress value="50" color="success" className="text-center" animated="True">50%</Progress>
              <div className="text-center" style={abstand1}>HTML</div>
              <Progress value="50" color="success" className="text-center" animated="True">50%</Progress>
              <div className="text-center" style={abstand1}>CSS</div>
              <Progress value="30" color="success" className="text-center" animated="True">30%</Progress>
              <div className="text-center" style={abstand1}>LaTeX</div>
              <Progress value="30" color="success" className="text-center" animated="True">30%</Progress>
            
          <li style={abstand1}> Betriebsysteme</li>
          
              <div className="text-center" style={abstand1}>Windows</div>
              <Progress value="90" color="warning" className="text-center" animated="True">90%</Progress>
              <div className="text-center" style={abstand1}>MacOS</div>
              <Progress value="90" color="warning" className="text-center" animated="True">90%</Progress>
              <div className="text-center" style={abstand1}>Ubuntu</div>
              <Progress value="40" color="warning" className="text-center" animated="True">40%</Progress>
            
          <li style={abstand1}>Sprachen</li>
        
            <div className="text-center" style={abstand1}>Deutsch</div>
            <Progress value="100" color="info" className="text-center" animated="True">100%</Progress>
            <div className="text-center" style={abstand1}>Englisch</div>
            <Progress value="70" color="info" className="text-center" animated="True">70%</Progress>
          
        </ul>
        </div>
        </div>

      
  </Layout>
)

export default SecondPage
