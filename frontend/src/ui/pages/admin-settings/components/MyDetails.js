import classes from "./MyDetails.module.css"

const MyDetails = () => {
  return (
    <section className={classes.details}>
      <form>
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
          <input
            placeholder="Nigeria"
            className={classes.form__input}
            type="text"
            name="country"
          />
        </div>
        <hr /> 
        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="name">
            Timezone
          </label>
          <input
            placeholder="West African Time"
            className={classes.form__input}
            type="text"
            name="timezone"
          />
        </div>
        <hr />
      </form>
    </section>
  )
}

export default MyDetails
