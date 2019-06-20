import React, { Component } from "react";

class Clock extends Component {
   state = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
   };
   componentWillMount() {
      this.getTimeUntil(this.props.date);
   }
   componentDidMount() {
      setInterval(() => this.getTimeUntil(this.props.date), 1000);
   }

   leading0(num) {
      if (num < 10) {
         return "0" + num;
      }
      return num;
   }
   getTimeUntil(date) {
      const time = Date.parse(date) - Date.parse(new Date());
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const months = Math.floor(time / (1000 * 60 * 60 * 24 * 30));
      const years = Math.floor(time / (1000 * 60 * 60 * 24 * 30 * 12));
      this.setState({
         seconds,
         minutes,
         hours,
         days,
         months,
         years
      });
   }

   render() {
      const timestamp =
         Math.floor(Math.random(new Date().valueOf()) * (2 - 1)) + 1;
      return (
         <div className="mainComponent-clock" key={timestamp}>
            <h3>Countdown to: {this.props.date}</h3>{" "}
            <div className={"clock"}>
               {this.leading0(this.state.years)} : year(s)
            </div>
            <div className={"clock"}>
               {this.leading0(this.state.months)} : month(s)
            </div>
            <div className={"clock"}>
               {this.leading0(this.state.days)} : day(s)
            </div>
            <div className={"clock"}>
               {this.leading0(this.state.hours)} : hour(s)
            </div>
            <div className={"clock"}>
               {this.leading0(this.state.minutes)} : minutes(s)
            </div>
            <div className={"clock"}>
               {this.leading0(this.state.seconds)} : second(s)
            </div>
         </div>
      );
   }
}

export default Clock;
