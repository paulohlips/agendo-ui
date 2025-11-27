import { IconBell, IconClock, IconUser } from '@tabler/icons-react';
import type React from 'react';
import { useState } from 'react';
import styles from './Settings.module.css';

export function Settings() {
  const [profileData, setProfileData] = useState({
    name: 'Dr. Sarah Smith',
    email: 'sarah.smith@example.com',
    role: 'professional',
  });

  const [workingDays, setWorkingDays] = useState([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ]);

  const [notifications, setNotifications] = useState({
    emailReminders: true,
    smsReminders: false,
    newBookings: true,
    cancellations: true,
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Notification preferences updated!');
  };

  const toggleDay = (day: string) => {
    if (workingDays.includes(day)) {
      setWorkingDays(workingDays.filter((d) => d !== day));
    } else {
      setWorkingDays([...workingDays, day]);
    }
  };

  const allDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Settings</h1>
        <p className={styles.subtitle}>Manage your account and preferences</p>
      </div>

      <div className={styles.section}>
        <div className={styles.paper}>
          <div className={styles.sectionHeader}>
            <div className={styles.iconWrapper}>
              <IconUser size={20} />
            </div>
            <h3>Profile Information</h3>
          </div>

          <form onSubmit={handleSaveProfile} className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Full Name</label>
              <input
                className={styles.input}
                type="text"
                value={profileData.name}
                onChange={(e) =>
                  setProfileData({ ...profileData, name: e.target.value })
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Email Address</label>
              <input
                className={styles.input}
                type="email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Account Type</label>
              <select
                className={styles.select}
                value={profileData.role}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    role: e.target.value,
                  })
                }
              >
                <option value="professional">Professional</option>
                <option value="client">Client</option>
              </select>
            </div>

            <button className={styles.button} type="submit">Save Changes</button>
          </form>
        </div>
      </div>

      {profileData.role === 'professional' && (
        <div className={styles.section}>
          <div className={styles.paper}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <IconClock size={20} />
              </div>
              <h3>Availability Rules</h3>
            </div>

            <form className={styles.form}>
              <div>
                <label className={styles.workingDaysLabel}>Working Days</label>
                <div className={styles.daysGrid}>
                  {allDays.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(day)}
                      className={`${styles.dayButton} ${workingDays.includes(day) ? styles.active : ''}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.timeGrid}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Start Time</label>
                  <select className={styles.select} defaultValue="9:00">
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>End Time</label>
                  <select className={styles.select} defaultValue="17:00">
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Appointment Duration</label>
                <select className={styles.select} defaultValue="60">
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="90">1.5 hours</option>
                  <option value="120">2 hours</option>
                </select>
              </div>

              <button className={styles.button} type="button">Save Availability</button>
            </form>
          </div>
        </div>
      )}

      <div className={styles.section}>
        <div className={styles.paper}>
          <div className={styles.sectionHeader}>
            <div className={styles.iconWrapper}>
              <IconBell size={20} />
            </div>
            <h3>Notification Preferences</h3>
          </div>

          <form onSubmit={handleSaveNotifications} className={styles.form}>
            <div className={styles.notificationsList}>
              <label className={styles.notificationItem}>
                <div className={styles.notificationText}>
                  <div className={styles.notificationTitle}>
                    Email Reminders
                  </div>
                  <div className={styles.notificationDescription}>
                    Receive email reminders before appointments
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.emailReminders}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      emailReminders: e.target.checked,
                    })
                  }
                  className={styles.checkbox}
                />
              </label>

              <label className={styles.notificationItem}>
                <div className={styles.notificationText}>
                  <div className={styles.notificationTitle}>SMS Reminders</div>
                  <div className={styles.notificationDescription}>
                    Receive text message reminders
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.smsReminders}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      smsReminders: e.target.checked,
                    })
                  }
                  className={styles.checkbox}
                />
              </label>

              <label className={styles.notificationItem}>
                <div className={styles.notificationText}>
                  <div className={styles.notificationTitle}>New Bookings</div>
                  <div className={styles.notificationDescription}>
                    Get notified when someone books an appointment
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.newBookings}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      newBookings: e.target.checked,
                    })
                  }
                  className={styles.checkbox}
                />
              </label>

              <label className={styles.notificationItem}>
                <div className={styles.notificationText}>
                  <div className={styles.notificationTitle}>Cancellations</div>
                  <div className={styles.notificationDescription}>
                    Get notified when appointments are cancelled
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.cancellations}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      cancellations: e.target.checked,
                    })
                  }
                  className={styles.checkbox}
                />
              </label>
            </div>

            <button className={styles.button} type="submit">Save Preferences</button>
          </form>
        </div>
      </div>
    </div>
  );
}
