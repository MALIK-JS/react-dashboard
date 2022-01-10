// React Class Component
// Syntax
// ALWAYS capitalize your components

// Header
class MainContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <SubMenu />
        <HomePage />
      </div>
    );
  }
}

// Player
class SubMenu extends React.Component {
  render() {
    return (
      <div className="sub-container">
        <ul className="side-menu">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Widget</a>
          </li>
          <li>
            <a href="#">Review</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
          <li>
            <a href="#">Online Analysis</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
    );
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="main-stats">
          <div className="box-of-3 box-style">
            {" "}
            <h3>Reviews</h3>
          </div>
          <div className="box-of-3 box-style">
            <h3>Average Rating</h3>
          </div>
          <div className="box-of-3 box-style">
            <h3>Sentiment Analysis</h3>
          </div>
        </div>
        <div className="sub-stats box-style">
          <h3>Website Visitors</h3>
        </div>
      </div>
    );
  }
}

// App
class App extends React.Component {
  // needs render method along with a return
  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

// Renders our component
ReactDOM.render(
  // We render components by writing like an HTML Element
  <App />,
  document.querySelector("#mainContainer")
);
