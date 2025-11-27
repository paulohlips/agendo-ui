import {
  IconChevronLeft,
  IconChevronRight,
  IconCircleCheck,
  IconClock,
  IconMapPin,
  IconStar,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import styles from './BookingPage.module.css';

interface BookingPageProps {
  professionalId: number;
  onConfirmBooking: (date: string, time: string) => void;
  onBack: () => void;
}

export function BookingPage({
  professionalId,
  onConfirmBooking,
  onBack,
}: BookingPageProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const professional = {
    name: 'Dr. Sarah Smith',
    category: 'Physician',
    rating: 4.9,
    reviewCount: 127,
    location: 'San Francisco, CA',
    avatar: 'SS',
    bio: 'Board-certified physician with over 10 years of experience in primary care and preventive medicine.',
    specialties: [
      'Primary Care',
      'Preventive Medicine',
      'Chronic Disease Management',
    ],
  };

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [
    { day: 18, date: 'Nov 18', available: true },
    { day: 19, date: 'Nov 19', available: true },
    { day: 20, date: 'Nov 20', available: false },
    { day: 21, date: 'Nov 21', available: true },
    { day: 22, date: 'Nov 22', available: true },
    { day: 23, date: 'Nov 23', available: false },
    { day: 24, date: 'Nov 24', available: true },
  ];

  const availableTimeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onConfirmBooking(selectedDate, selectedTime);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button
          className={styles.backButton}
          onClick={onBack}
          type="button"
        >
          <IconChevronLeft size={16} />
          Back to search
        </button>

        <div className={`${styles.paper} ${styles.profileCard}`}>
          <div className={styles.profileContent}>
            <div className={styles.avatar}>{professional.avatar}</div>

            <div className={styles.profileInfo}>
              <div className={styles.profileHeader}>
                <div>
                  <h2 className={styles.profileName}>{professional.name}</h2>
                  <div className={styles.category}>{professional.category}</div>
                </div>
                <div className={styles.rating}>
                  <IconStar
                    size={20}
                    style={{ fill: '#facc15', color: '#facc15' }}
                  />
                  <span className={styles.ratingValue}>
                    {professional.rating}
                  </span>
                  <span className={styles.ratingCount}>
                    ({professional.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className={styles.location}>
                <IconMapPin size={16} />
                <span>{professional.location}</span>
              </div>

              <p className={styles.bio}>{professional.bio}</p>

              <div className={styles.specialties}>
                {professional.specialties.map((specialty) => (
                  <span key={specialty} className={styles.specialty}>
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bookingGrid}>
          <div className={styles.paper}>
            <div className={styles.calendarSection}>
              <h3>Select a Date</h3>

              <div className={styles.calendarHeader}>
                <h4>November 2025</h4>
                <div className={styles.navigationButtons}>
                  <button className={styles.navButton} type="button">
                    <IconChevronLeft size={16} />
                  </button>
                  <button className={styles.navButton} type="button">
                    <IconChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className={styles.datesGrid}>
                {dates.map((date, index) => (
                  <button
                    key={date.date}
                    type="button"
                    onClick={() => date.available && setSelectedDate(date.date)}
                    disabled={!date.available}
                    className={`${styles.dateButton} ${selectedDate === date.date ? styles.selected : ''}`}
                  >
                    <div className={styles.dayName}>{weekDays[index]}</div>
                    <div className={styles.dayNumber}>{date.day}</div>
                  </button>
                ))}
              </div>

              {selectedDate && (
                <div className={styles.slotsSection}>
                  <h4>Available Time Slots</h4>
                  <div className={styles.slotsGrid}>
                    {availableTimeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`${styles.slotButton} ${selectedTime === time ? styles.selected : ''}`}
                      >
                        <IconClock size={16} />
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.paper}>
            <div className={styles.summarySection}>
              <h4>Booking Summary</h4>

              <div className={styles.summaryContent}>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Professional</span>
                  <span className={styles.summaryValue}>
                    {professional.name}
                  </span>
                </div>

                {selectedDate && (
                  <div
                    className={`${styles.summaryItem} ${styles.selectedItem}`}
                  >
                    <IconCircleCheck size={20} style={{ color: '#16a34a' }} />
                    <div>
                      <div className={styles.summaryLabel}>Date</div>
                      <div className={styles.summaryValue}>{selectedDate}</div>
                    </div>
                  </div>
                )}

                {selectedTime && (
                  <div
                    className={`${styles.summaryItem} ${styles.selectedItem}`}
                  >
                    <IconCircleCheck size={20} style={{ color: '#16a34a' }} />
                    <div>
                      <div className={styles.summaryLabel}>Time</div>
                      <div className={styles.summaryValue}>{selectedTime}</div>
                    </div>
                  </div>
                )}

                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Duration</span>
                  <span className={styles.summaryValue}>1 hour</span>
                </div>
              </div>

              <button
                className={styles.confirmButton}
                disabled={!selectedDate || !selectedTime}
                onClick={handleConfirm}
                type="button"
              >
                Confirm Appointment
              </button>

              {(!selectedDate || !selectedTime) && (
                <p className={styles.helperText}>
                  Select a date and time to continue
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
