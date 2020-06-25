import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Reports from './components/reports/Reports.jsx';
import Attendance from './components/attendance/Attendance.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Session from './components/session/Session.jsx';
import Performance from './components/performance/Performance.jsx';
import Students from './components/students/Students.jsx';
import Studentsdetails from './components/studentsdetails/Studentsdetails.jsx';
import Sessiondetails from './components/sessiondetails/Sessiondetails.jsx';
import Performancedetails from './components/performancedetails/Performancedetails.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar selected='Dashboard'></Navbar>
        <Sidebar></Sidebar>
        <div className="routetemplate">
        <Switch>
            <Route path="/" exact name="Dashboard" component={Dashboard}></Route>
            <Route path="/attendance" name="Attendance" component={Attendance}></Route>
            <Route path="/dashboard" name="Dashboard" component={Dashboard}></Route>
            <Route path="/performance" name="Dashboard" component={Performance}></Route>
            <Route path="/performancedetails/:subject" name="Dashboard" component={Performancedetails}></Route>
            <Route path="/sessions" name="Dashboard" component={Session}></Route>
            <Route path="/sessiondetails/:sessionnumber" name="Dashboard" component={Sessiondetails}></Route>
            <Route path="/studentsdetails/:studentid" name="Dashboard" component={Studentsdetails}></Route>
            <Route path="/students" name="Dashboard" component={Students}></Route>
            <Route path="/reports" name="Dashboard" component={Reports}></Route>
          </Switch>
          </div>
          </Router>
    </div>
  );
}
  
export default App;
