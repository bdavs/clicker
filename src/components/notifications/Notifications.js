import React, { Component } from "react";
import { connect } from "react-redux";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

// import allNotifications from "./notifications.json";

class Notifications extends Component {


  componentDidMount() {

  }

  componentDidUpdate(prevProps) {
    if (this.props.totalClicks !== prevProps.totalClicks) {
      console.log(this.props)
      this.props.notifications.forEach((notification) => {
        if (notification.achieved === false && this.props.totalClicks >= notification.minClicks){
          NotificationManager.success(notification.message, "Achievement Unlocked!");
          // notification.achieved = true;
          this.props.onTrigger(notification.id)
        }
      });
    }
  }



  createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
        default:
          alert("unknown notification!");
      }
    };
  };

  render() {
    // const { totalClicks } = this.props;
    return (
      <div>
        <NotificationContainer />
{/* 
        <button className="btn btn-info"
          onClick={this.createNotification("info")}>Info
        </button>
        <hr />
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
    notifications: state.notification,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTrigger: (id) => dispatch({ type: "TRIGGER", id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
