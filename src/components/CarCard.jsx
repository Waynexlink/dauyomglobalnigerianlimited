import styles from "./CarCard.module.css";

export default function CarCard({ car }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage) => {
    return new Intl.NumberFormat("en-US").format(mileage);
  };

  return (
    <article className={styles.carCard}>
      <a href={`/cars/${car.slug}`} className={styles.carCardLink}>
        {/* Image Section with Overlays */}
        <div className={styles.imageSection}>
          <div className={styles.imageOverlay}></div>

          <img
            src={car.heroImage.src || "/placeholder.svg"}
            alt={car.heroImageAlt}
            loading="lazy"
            className={styles.carImage}
          />

          <div className={styles.priceOverlay}>{formatPrice(car.price)}</div>

          {/* Title Overlay - Bottom Left */}
          <div className={styles.titleOverlay}>
            {car.year} {car.make} {car.model}
          </div>
        </div>

        {/* Info Bar - 4 Equal Segments */}
        <div className={styles.infoBar}>
          <div className={styles.infoSegment}>
            <img
              src="/assets/svgs/calendar.svg"
              alt="calender"
              className={styles.infoIcon}
            />
            <span className={styles.infoText}>{car.year}</span>
          </div>

          <div className={styles.infoSegment}>
            <img
              src="/assets/svgs/dashboard.svg"
              alt="speed"
              className={styles.infoIcon}
            />
            <span className={styles.infoText}>
              {formatMileage(car.mileage)} mi
            </span>
          </div>

          <div className={styles.infoSegment}>
            <img
              src="/assets/svgs/settings.svg"
              alt="transmission"
              className={styles.infoIcon}
            />
            <span className={styles.infoText}>{car.transmission}</span>
          </div>

          <div className={styles.infoSegment}>
            <img
              src="/assets/svgs/engine.svg"
              alt="fuel"
              className={styles.infoIcon}
            />
            <span className={styles.infoText}>{car.engineSize}</span>
          </div>
        </div>
      </a>
    </article>
  );
}
