import styles from './AreasWeServeSection.module.css';

export default function AreasWeServeSection() {
  const cities = [
    "Toronto", "Mississauga", "Brampton", "Milton", "Vaughan", "Markham",
    "Guelph", "Bradford", "Newmarket", "Barrie", "Ajax", "Kitchener", "Waterloo", "Cambridge"
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Areas We Serve</h1>
      <p className={styles.description}>
        We proudly serve homeowners and businesses throughout the Greater Toronto Area (GTA) and surrounding cities:
      </p>
      <ul className={styles.cityList}>
        {cities.map((city, i) => (
          <li
            key={city}
            className={styles.cityItem}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            {city}
          </li>
        ))}
      </ul>
    </main>
  );
}
