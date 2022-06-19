import { Card } from './Card'

import styles from './Body.module.css'


export function Body() {
    return (
        <div className={styles.body}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>    
    )
}