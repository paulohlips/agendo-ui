import {
  IconCalendar,
  IconCircleCheck,
  IconClock,
  IconDownload,
  IconMapPin,
} from '@tabler/icons-react';
import React from 'react';
import styles from './AppointmentConfirmation.module.css';

interface AppointmentConfirmationProps {
  date: string;
  time: string;
  professionalName: string;
  onAddToCalendar: () => void;
  onBackToHome: () => void;
}

export function AppointmentConfirmation({
  date,
  time,
  professionalName,
  onAddToCalendar,
  onBackToHome,
}: AppointmentConfirmationProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <IconCircleCheck
              size={48}
              style={{ color: '#16a34a' }}
              stroke={1.5}
            />
          </div>
          <h2 className={styles.title}>Appointment Confirmed!</h2>
          <p className={styles.description}>
            Your appointment has been successfully scheduled
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.professionalCard}>
            <div className={styles.avatar}>SS</div>
            <div className={styles.professionalInfo}>
              <div className={styles.label}>Professional</div>
              <div className={styles.value}>{professionalName}</div>
              <div className={styles.subtitle}>Physician</div>
            </div>
          </div>

          <div className={styles.detailsGrid}>
            <div className={styles.detailCard}>
              <div className={styles.detailHeader}>
                <IconCalendar size={16} />
                <span>Date</span>
              </div>
              <div className={styles.value}>{date}</div>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.detailHeader}>
                <IconClock size={16} />
                <span>Time</span>
              </div>
              <div className={styles.value}>{time}</div>
            </div>
          </div>

          <div className={styles.locationCard}>
            <div className={styles.detailHeader}>
              <IconMapPin size={16} />
              <span>Location</span>
            </div>
            <div className={styles.value}>
              123 Medical Center Drive, San Francisco, CA 94102
            </div>
          </div>

          <div className={styles.noteCard}>
            <strong>Note:</strong> You will receive a confirmation email with
            all the details and a meeting link.
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.primaryButton}
            onClick={onAddToCalendar}
            type="button"
          >
            <IconDownload size={20} />
            Add to Calendar
          </button>
          <button
            className={styles.outlineButton}
            onClick={onBackToHome}
            type="button"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
