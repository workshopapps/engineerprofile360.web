import MyDetails from "./components/MyDetails"
import classes from "./AdminSettings.module.css"

const AdminSettings = () => {
  return (
    <main className={classes.main}>
        <h1 className={classes.main_heading}>Settings</h1>
        <nav className={classes.nav}>
            <ul className={classes.nav_list}>
                <li className={`${classes.nav_item} ${classes.nav_active}`}>My Details</li>
                <li className={classes.nav_item}>Password</li>
                <li className={classes.nav_item}>Notifications</li>
                <li className={classes.nav_item}>Teams</li>
                <li className={classes.nav_item}>Integration</li>
                <li className={classes.nav_item}>API</li>
            </ul>
        </nav>
        <MyDetails />
    </main>
  )
}

export default AdminSettings
