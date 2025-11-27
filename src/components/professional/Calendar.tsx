import {
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconLock,
  IconPlus,
  IconUser,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import styles from './Calendar.module.css';

interface TimeSlot {
  time: string;
  status: 'available' | 'blocked' | 'occupied';
  clientName?: string;
  clientType?: string;
}

export function Calendar() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const dates = [
    'Nov 18',
    'Nov 19',
    'Nov 20',
    'Nov 21',
    'Nov 22',
    'Nov 23',
    'Nov 24',
  ];

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  const schedule: Record<string, Record<string, TimeSlot>> = {
    'Nov 18': {
      '10:00 AM': {
        time: '10:00 AM',
        status: 'occupied',
        clientName: 'Sarah Johnson',
        clientType: 'Consultation',
      },
      '2:00 PM': {
        time: '2:00 PM',
        status: 'occupied',
        clientName: 'Mike Davis',
        clientType: 'Follow-up',
      },
      '12:00 PM': { time: '12:00 PM', status: 'blocked' },
    },
    'Nov 19': {
      '11:00 AM': {
        time: '11:00 AM',
        status: 'occupied',
        clientName: 'Emma Wilson',
        clientType: 'Initial',
      },
    },
    'Nov 20': {
      '4:00 PM': {
        time: '4:00 PM',
        status: 'occupied',
        clientName: 'James Brown',
        clientType: 'Consultation',
      },
    },
  };

  const getSlotStatus = (date: string, time: string): TimeSlot => {
    return schedule[date]?.[time] || { time, status: 'available' };
  };

  const handleSlotClick = (date: string, time: string) => {
    const slot = getSlotStatus(date, time);
    if (slot.status === 'occupied') {
      setSelectedSlot(slot);
      setShowAppointmentModal(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1>Calendar</h1>
          <p className={styles.subtitle}>
            Manage your availability and appointments
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.outlineButton} type="button">
            <IconLock size={16} />
            Block Time
          </button>
          <button className={styles.primaryButton} type="button">
            <IconPlus size={16} />
            Add Availability
          </button>
        </div>
      </div>

      <div className={styles.paper}>
        <div className={styles.calendarHeader}>
          <h3>Week of November 18, 2025</h3>
          <div className={styles.navigationButtons}>
            <button className={styles.navButton} type="button">
              <IconChevronLeft size={16} />
            </button>
            <button className={styles.navButton} type="button">
              Today
            </button>
            <button className={styles.navButton} type="button">
              <IconChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className={styles.calendarGrid}>
          <div className={styles.grid}>
            <div></div>
            {weekDays.map((day, index) => (
              <div key={day} className={styles.dayHeader}>
                <div className={styles.dayName}>{day}</div>
                <div className={styles.dayDate}>{dates[index]}</div>
              </div>
            ))}

            {timeSlots.map((time) => (
              <React.Fragment key={time}>
                <div className={styles.timeLabel}>{time}</div>
                {dates.map((date) => {
                  const slot = getSlotStatus(date, time);
                  return (
                    <div
                      key={`${date}-${time}`}
                      onClick={() => handleSlotClick(date, time)}
                      className={`${styles.timeSlot} ${styles[slot.status]}`}
                    >
                      {slot.status === 'occupied' && (
                        <div className={styles.slotContent}>
                          <div className={styles.clientName}>
                            {slot.clientName}
                          </div>
                          <div className={styles.appointmentType}>
                            {slot.clientType}
                          </div>
                        </div>
                      )}
                      {slot.status === 'blocked' && <IconLock size={20} />}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div
              className={`${styles.legendBox} ${styles.legendAvailable}`}
            ></div>
            <span className={styles.legendLabel}>Available</span>
          </div>
          <div className={styles.legendItem}>
            <div
              className={`${styles.legendBox} ${styles.legendOccupied}`}
            ></div>
            <span className={styles.legendLabel}>Occupied</span>
          </div>
          <div className={styles.legendItem}>
            <div
              className={`${styles.legendBox} ${styles.legendBlocked}`}
            ></div>
            <span className={styles.legendLabel}>Blocked</span>
          </div>
        </div>
      </div>

      {showAppointmentModal && (
        <div className={styles.modalOverlay} onClick={() => setShowAppointmentModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Appointment Details</h3>
              <button
                className={styles.closeButton}
                onClick={() => setShowAppointmentModal(false)}
                type="button"
              >
                ×
              </button>
            </div>
            {selectedSlot && (
              <div className={styles.modalContent}>
                <div className={styles.modalSection}>
                  <IconUser className={styles.modalIcon} size={20} />
                  <div>
                    <div className={styles.modalLabel}>Client</div>
                    <div className={styles.modalValue}>
                      {selectedSlot.clientName}
                    </div>
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <IconCalendar className={styles.modalIcon} size={20} />
                  <div>
                    <div className={styles.modalLabel}>Date & Time</div>
                    <div className={styles.modalValue}>
                      November 18, 2025 at {selectedSlot.time}
                    </div>
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <IconClock className={styles.modalIcon} size={20} />
                  <div>
                    <div className={styles.modalLabel}>Duration</div>
                    <div className={styles.modalValue}>1 hour</div>
                  </div>
                </div>

                <div className={styles.modalActions}>
                  <button className={styles.outlineButton} type="button">
                    Reschedule
                  </button>
                  <button className={styles.dangerButton} type="button">
                    Cancel
                  </button>
                  <button className={styles.primaryButton} type="button">
                    Start Meeting
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
