import { Baby, BookOpen, Clock, UsersThree } from "phosphor-react";
import styles from  "./ProductIcons.module.css"

export function ProductIcons() {
    return (
        <div className={styles.productIcons}>
            <div className={styles.iconCard}>
                <UsersThree size={80}/>
                <p>2-8</p>
            </div>

            <div className={styles.iconCard}>
                <Baby size={80}/>
                <p>6+</p>
            </div>

            <div className={styles.iconCard}>
                <Clock size={80}/>
                <p>15 min</p>
            </div>
            
            <div className={styles.iconCard}>
                <BookOpen size={80}/>
                <p>Português</p>
            </div>

        </div>

        
    )
}