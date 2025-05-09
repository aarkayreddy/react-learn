import ReactDOM from "react-dom/client";

const Header = ({ children }) => (
  <h1 id="heading" className="test">
    JSX heading - {children}
  </h1>
);

const title = (
  <h2 id="heading" className="test">
    this is react element - this is not a JSX
  </h2>
);

// React Functional Component
const HeadingComponent = () => {
  let array = [];

  return (
    <div>
      {/* component composition - composing two components one in another */}
      <Header>Test</Header>
      {Header({ children: "text" })}
      <Header /> {/* JSX Component will render like this*/}
      {title} {/* normal react element will render like this*/}
      <h1>Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
