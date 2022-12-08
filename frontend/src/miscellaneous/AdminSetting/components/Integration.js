import classes from "./Integration.module.css";

// import notion_logo from "../../../../assets/images/app/Notion.png";
// import github_logo from "../../../../assets/images/app/Github.png";
// import figma_logo from "../../../../assets/images/app/Figma.png";
// import linear_logo from "../../../../assets/images/app/Linear.png";
// import stackOverflow_logo from "../../../../assets/images/app/Stack Overflow.png";
// import kaggle_logo from "../../../../assets/images/app/Kaggle.png";

const Integrations = () => {
  return (
    <section className={classes.integrations}>
      <div className={classes.container}>
        {/* <img className={classes.logo_img} src={notion_logo} alt="NOTION LOGO" /> */}
        <div className={classes.description}>
          <p className={classes.title}>Notion</p>
          <p> Embed notion pages, notes in projects and assesment resources</p>
        </div>
        <div className={classes.learn_more}>
          <label>Learn more</label>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider}></span>
          </label>
        </div>
      </div>

      <div className={classes.container}>
        {/* <img className={classes.logo_img} src={github_logo} alt="GITHUB LOGO" /> */}
        <div className={classes.description}>
          <p className={classes.title}>Github</p>
          <p> Link pull request and automate workflow</p>
        </div>
        <div className={classes.learn_more}>
          <label>Learn more</label>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider}></span>
          </label>
        </div>
      </div>

      <div className={classes.container}>
        {/* <img className={classes.logo_img} src={figma_logo} alt="Figma LOGO" /> */}
        <div className={classes.description}>
          <p className={classes.title}>Figma</p>
          <p>Embeb file previews in project</p>
        </div>
        <div className={classes.learn_more}>
          <label>Learn more</label>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider}></span>
          </label>
        </div>
      </div>

      <div className={classes.container}>
        {/* <img className={classes.logo_img} src={linear_logo} alt="Linear LOGO" /> */}
        <div className={classes.description}>
          <p className={classes.title}>Linear</p>
          <p>Embed live project tracking, team task and sprint</p>
        </div>
        <div className={classes.learn_more}>
          <label>Learn more</label>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider}></span>
          </label>
        </div>
      </div>

      <div className={classes.container}>
        <img
          className={classes.logo_img}
          // src={stackOverflow_logo}
          alt="Stack Overflow LOGO"
        />
        <div className={classes.description}>
          <p className={classes.title}>Stack Overflow</p>
          <p> Find answers to projects review and preparatory questions</p>
        </div>
        <div className={classes.learn_more}>
          <label>Learn more</label>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider}></span>
          </label>
        </div>
      </div>

      <div className={classes.container}>
        {/* <img className={classes.logo_img} src={kaggle_logo} alt="Kaggle LOGO" /> */}
        <div className={classes.description}>
          <p className={classes.title}>Kaggle</p>
          <p>Find and publish data sets with teams, explore and build models</p>
        </div>
        <div className={classes.learn_more}>
          <label>Learn more</label>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider}></span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
