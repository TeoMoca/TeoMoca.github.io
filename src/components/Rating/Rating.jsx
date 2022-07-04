import "./Rating.css";
import { Component } from "react";

class Rating extends Component {
  render() {
    return (
      <div class="rating-component">
        <p>{this.props.skill}</p>
        <div class="rating-component-dots-container">
          <div
            class={
              this.props.rate >= 1
                ? "rating-component-dot active"
                : "rating-component-dot"
            }
          ></div>
          <div
            class={
              this.props.rate >= 2
                ? "rating-component-dot active"
                : "rating-component-dot"
            }
          ></div>
          <div
            class={
              this.props.rate >= 3
                ? "rating-component-dot active"
                : "rating-component-dot"
            }
          ></div>
          <div
            class={
              this.props.rate >= 4
                ? "rating-component-dot active"
                : "rating-component-dot"
            }
          ></div>
          <div
            class={
              this.props.rate >= 5
                ? "rating-component-dot active"
                : "rating-component-dot"
            }
          ></div>
        </div>
      </div>
    );
  }
}

export default Rating;
