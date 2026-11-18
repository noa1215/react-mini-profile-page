import styles from "./ProfileCard.module.css";
import Button from "./Button";

function ProfileCard({src, name, descr,buttonType }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.avatar}
        src={src}
        alt="תמונת פרופיל"
      />
      <h2>{name}</h2>
      <p>{descr}</p>
      <Button type={buttonType}/>
    </article>
  );
}

export default ProfileCard;
