const rootElement = document.getElementById("root");

// let Div = ({name, data}) => {return <div className={name}>{data}</div>}
const Heading = ({ name }) => {
  return <h1 className="mr-5">{name}</h1>;
};

let NavItem = ({ name }) => {
  return (
    <li className="navbar-nav">
      <div className="bg-secondary ml-3 n-item">
        <a className="nav-link" href="#">
          {name}
        </a>
      </div>
    </li>
  );
};

let Col_12 = () => {
  return (
    <div className="col-12 mt-3 navbar navbar-expand-lg navbar-dark bg-dark">
      <Heading className="navbar-brand" name="Anandha Narayanan" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse ml-5"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <NavItem name="Projects" />
          <NavItem name="Skills" />
          <NavItem name="About me" />
          <NavItem name="Links" />
        </ul>
      </div>
    </div>
  );
};

let ProjectCard = () => {
  return (
    <div
      className="card m-4"
      style={{ width: "18rem", color: "black", display: "inline-block" }}
    >
      <img
        src="https://www.digitalhrtech.com/wp-content/uploads/2020/01/Learning-and-development-1280x720.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Project title</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eveniet
        quibusdam sapiente quisquam voluptatibus a! Debitis ea iste vel eligendi
        aut, praesentium a voluptatum quibusdam.
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary">
          Go to Project
        </a>
      </div>
    </div>
  );
};

let ProjectCol = () => {
  return (
    <div>
      <h1 className="m-4">Projects</h1>
      <div className="col-12 mt-4 text-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

let Skill = ({ item }) => {
  return (
    <li
      className="navbar-nav"
      style={{ display: "inline-block", fontSize: "1.6rem" }}
    >
      <div className="bg-success m-3 l-item">{item}</div>
    </li>
  );
};

let SkillColumn = () => {
  return (
    <div className="col-12 mt-3">
      <h1 className="m-4">Skills</h1>
      <ul className="text-center">
        <Skill item="Javascript" />
        <Skill item="Python" />
        <Skill item="NodeJs" />
        <Skill item="TensorFlow" />
        <Skill item="HTML" />
        <Skill item="CSS" />
        <Skill item="Bootstrap" />
        <Skill item="MongoDB" />
        <Skill item="MySql" />
        <Skill item="Django" />
      </ul>
    </div>
  );
};

let Row = () => {
  return (
    <div className="row">
      <Col_12 />
      <ProjectCol />
      <SkillColumn />
    </div>
  );
};


let app = <Row />;

ReactDOM.render(app, rootElement);
