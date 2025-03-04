import styles from './styles.module.css';

export default function Banner(){
    return (
        <div className={styles.banner}>
            <img src="../src/assets/bannerHome.png" alt="banner" />
        </div>
    );
}