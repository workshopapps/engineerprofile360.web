import classes from "./MyDetails.module.css"
import flag from "../assets/flag.svg"
import clock from "../assets/clock.svg"
import downArrow from "../assets/downArrow.svg"

const MyDetails = () => {
  return (
    <section className={classes.details}>
      <form method="post">
        <hr />
        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="name">
            Name
          </label>
          <input
            placeholder="Mark James"
            className={classes.form__input}
            type="text"
            name="name"
          />
        </div>
        <hr />
        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="email">
            Email
          </label>
          <input
            placeholder="example@domain.com"
            className={classes.form__input}
            type="email"
            name="email"
          />
        </div>
        <hr />
        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="name">
            Website/Portfolio
          </label>
          <input
            placeholder="https://www.markjilaga.com"
            className={classes.form__input}
            type="text"
            name="website"
          />
        </div>
        <hr />
        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="name">
            Role
          </label>
          <input
            placeholder="Team lead II - Backend Engineer"
            className={classes.form__input}
            type="text"
            name="role"
          />
        </div>
        <hr />
        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="name">
            Country
          </label>
          <div className={`${classes.form__input} ${classes.form__wrapper}`}>

            <img src={flag} alt='' />
            <input
              placeholder="Nigeria"
              className={classes.form__input}
              type="text"
              name="country"
            />
            <img src={downArrow} alt='' />
          </div>

        </div>
        <hr />
        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="name">
            Timezone
          </label>
          <div className={`${classes.form__input} ${classes.form__wrapper}`}>

            <img src={clock} alt='' />
            <input
              placeholder="West African Time"
              className={classes.form__input}
              type="text"
              name="timezone"
            />
            <img src={downArrow} alt='' />
          </div>

        </div>
        <hr />
      </form>
    </section>
  )
}

export default MyDetails
