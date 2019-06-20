import React, { Component } from "react";
import Clock from "./Clock";

class Main extends Component {
   state = {
      date: "",
      displayDate: []
   };

   // triggerDelete(item,index) {
   //    let displayDate = [...this.state.displayDate];
   //    displayDate.splice(index, 1);
   //    this.setState({ displayDate: this.state.displayDate });
   // }
   unshift = () => {
      const timestamp =
         Math.floor(Math.random(new Date().valueOf()) * (100000 - 1)) + 1;
      if (this.state.date === "") {
         null;
      } else {
         this.state.displayDate.unshift(
            <div key={timestamp}>
               <p
                  onClick={e => {
                     e.stopPropagation();
                     e.preventDefault();
                     this.state.displayDate.map((item, index) => {
                        let displayDate = [...this.state.displayDate];
                        console.log(item);
                        displayDate.splice(index, 1);
                        this.setState({ displayDate: this.state.displayDate });
                     });
                  }}
               >
                  X
               </p>
               <Clock
                  date={this.state.date}
                  displayData={this.state.displayDate}
               />
            </div>
         );
         this.setState({ date: "" });
      }
   };
   render() {
      return (
         <div className="mainComponent">
            <h1>Countdown App</h1>
            <h2>Please enter your countdown</h2>
            <input
               type="datetime"
               onChange={event => this.setState({ date: event.target.value })}
               name="Date"
            />
            <br />
            <button onClick={this.unshift}>Add Countdown</button>
            <div>{this.state.displayDate}</div>
         </div>
      );
   }
}

export default Main;
