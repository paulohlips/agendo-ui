import {
  IconCalendar,
  IconClock,
  IconDots,
  IconFilter,
  IconSearch,
  IconUser,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import styles from './Appointments.module.css';

export function Appointments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const appointments = [
    {
      id: 1,
      client: 'Sarah Johnson',
      date: 'Nov 22, 2025',
      time: '2:00 PM',
      status: 'confirmed',
      type: 'Consultation',
    },
    {
      id: 2,
      client: 'Michael Chen',
      date: 'Nov 24, 2025',
      time: '10:00 AM',
      status: 'confirmed',
      type: 'Follow-up',
    },
    {
      id: 3,
      client: 'Emma Davis',
      date: 'Nov 24, 2025',
      time: '2:30 PM',
      status: 'confirmed',
      type: 'Initial',
    },
    {
      id: 4,
      client: 'James Wilson',
      date: 'Nov 25, 2025',
      time: '9:00 AM',
      status: 'pending',
      type: 'Consultation',
    },
    {
      id: 5,
      client: 'Lisa Anderson',
      date: 'Nov 25, 2025',
      time: '3:00 PM',
      status: 'confirmed',
      type: 'Consultation',
    },
    {
      id: 6,
      client: 'David Brown',
      date: 'Nov 26, 2025',
      time: '11:00 AM',
      status: 'confirmed',
      type: 'Follow-up',
    },
    {
      id: 7,
      client: 'Rachel Green',
      date: 'Nov 27, 2025',
      time: '1:00 PM',
      status: 'cancelled',
      type: 'Initial',
    },
    {
      id: 8,
      client: 'Tom Martinez',
      date: 'Nov 27, 2025',
      time: '4:00 PM',
      status: 'pending',
      type: 'Consultation',
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'confirmed':
        return styles.statusConfirmed;
      case 'pending':
        return styles.statusPending;
      case 'cancelled':
        return styles.statusCancelled;
      default:
        return '';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Appointments</h1>
        <p className={styles.subtitle}>View and manage all your appointments</p>
      </div>

      <div className={styles.paper}>
        <div className={styles.filters}>
          <div className={styles.searchWrapper}>
            <div className={styles.inputWrapper}>
              <IconSearch size={16} className={styles.searchIcon} />
              <input
                className={styles.searchInput}
                placeholder="Search by client name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.filterActions}>
            <button className={styles.filterButton} type="button">
              <IconFilter size={16} />
              Filter
            </button>
            <select
              className={styles.select}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className={styles.appointmentsList}>
          {appointments.map((appointment) => (
            <div key={appointment.id} className={styles.appointmentItem}>
              <div className={styles.appointmentLeft}>
                <div className={styles.avatar}>
                  <IconUser size={24} />
                </div>

                <div className={styles.clientInfo}>
                  <div className={styles.clientName}>{appointment.client}</div>
                  <div className={styles.appointmentType}>
                    {appointment.type}
                  </div>
                </div>

                <div className={styles.dateInfo}>
                  <IconCalendar size={16} />
                  <span>{appointment.date}</span>
                </div>

                <div className={styles.timeInfo}>
                  <IconClock size={16} />
                  <span>{appointment.time}</span>
                </div>

                <span
                  className={`${styles.statusBadge} ${getStatusClass(appointment.status)}`}
                >
                  {appointment.status}
                </span>
              </div>

              <button type="button" className={styles.moreButton}>
                <IconDots size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
