import { Sidebar } from '../Sidebar/Sidebar.jsx'
import { Form } from '../Form/Form.jsx';
import { List } from '../List/List.jsx';
import styles from './UserMain.module.css';

export function UserMain(){
    return (
        <div className={styles.main}>
            <div className={styles.user}>
                <Form />
                <List />
            </div>
        </div>
    )
}