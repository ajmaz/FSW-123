import './App.css';
import Card from './Boxes';

function App() {
  return (
    <div className="container">
      <div 
      className = "box1"
      style = {{backgroundColor: "red", width: "250px"}}
      >
        <Card
          title='Title 1'
          subtitle="Sub Title 1"
          description="Hello World 1!"
        />
      </div>

      <div className = "box2"
      style = {{backgroundColor: "aqua", width: "250px"}}
      >
        <Card
          title='Title 2'
          subtitle="Sub Title 2"
          description="Hello World 2!"
        />
      </div>

      <div className = "box3"
      style = {{backgroundColor: "yellow", width: "250px"}}
      >
        <Card
          title='Title 3'
          subtitle="Sub Title 3"
          description="Hello World 3!"
        />
      </div>

      <div className = "box4"
      style = {{backgroundColor: "green", width: "250px"}}
      >
        <Card
          title='Title 4'
          subtitle="Sub Title 4"
          description="Hello World 4!"
        />
      </div>

    </div>
  );
}

export default App;
