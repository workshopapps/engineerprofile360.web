import { Button } from "../../../../styles/reusableElements.styled"
import classes from "./Password.module.css"

const Password = () => {
  return (
    <section className={classes.password}>
      <form method="post">
        <hr />
        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="name">
            Current Password
          </label>
          <input
            placeholder="Enter your current password"
            className={classes.form__input}
            type="password"
            name="password"
          />
        </div>
        <hr /> 
        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="name">
            New Password
          </label>
          <input
            placeholder="Enter your new password"
            className={classes.form__input}
            type="password"
            name="password"
          />
        </div>
        <hr />

        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="name">
            Confirm New Password
          </label>
          <input
            placeholder="Enter you new password again"
            className={classes.form__input}
            type="password"
            name="npassword"
          />
        </div>
        <hr />
        <div className={classes.btns}>
            <button className={classes.cancel_btn} type="cancel">Cancel</button>
            <button className={classes.update_btn} type="submit">Update Password</button>
        </div>

      </form>
    </section>
  )
}

export default Password
