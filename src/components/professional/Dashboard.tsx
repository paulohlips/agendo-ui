import {
  IconCalendar,
  IconClock,
  IconTrendingUp,
  IconUsers,
} from '@tabler/icons-react';
import React from 'react';
import styles from './Dashboard.module.css';

export function Dashboard() {
  const nextAppointment = {
    clientName: 'Sarah Johnson',
    date: 'Today',
    time: '2:00 PM',
    duration: '1 hour',
    type: 'Consultation',
  };

  const stats = [
    {
      label: 'Total Clients',
      value: '47',
      icon: IconUsers,
      colorClass: styles.iconBlue,
    },
    {
      label: 'This Week',
      value: '12',
      icon: IconCalendar,
      colorClass: styles.iconGreen,
    },
    {
      label: 'Completion Rate',
      value: '96%',
      icon: IconTrendingUp,
      colorClass: styles.iconPurple,
    },
    {
      label: 'Avg Duration',
      value: '45m',
      icon: IconClock,
      colorClass: styles.iconOrange,
    },
  ];

  const recentAppointments = [
    {
      id: 1,
      client: 'Michael Chen',
      date: 'Nov 24',
      time: '10:00 AM',
      status: 'confirmed',
    },
    {
      id: 2,
      client: 'Emma Davis',
      date: 'Nov 24',
      time: '2:30 PM',
      status: 'confirmed',
    },
    {
      id: 3,
      client: 'James Wilson',
      date: 'Nov 25',
      time: '9:00 AM',
      status: 'pending',
    },
    {
      id: 4,
      client: 'Lisa Anderson',
      date: 'Nov 25',
      time: '3:00 PM',
      status: 'confirmed',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome back, Dr. Smith</h1>
        <p className={styles.subtitle}>
          Here's what's happening with your schedule today
        </p>
      </div>

      {/* Next Appointment */}
      <div className={styles.nextAppointmentCard}>
        <div className={styles.appointmentContent}>
          <div className={styles.appointmentInfo}>
            <div className={styles.appointmentLabel}>Next Appointment</div>
            <h3>{nextAppointment.clientName}</h3>
            <div className={styles.appointmentDetails}>
              <div className={styles.detailItem}>
                <IconCalendar size={16} />
                <span>{nextAppointment.date}</span>
              </div>
              <div className={styles.detailItem}>
                <IconClock size={16} />
                <span>{nextAppointment.time}</span>
              </div>
            </div>
          </div>
          <div className={styles.appointmentActions}>
            <div className={styles.badge}>{nextAppointment.type}</div>
            <button className={styles.viewDetailsButton} type="button">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={styles.statPaper}>
              <div className={styles.statCard}>
                <div className={styles.statInfo}>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <h2>{stat.value}</h2>
                </div>
                <div className={`${styles.statIcon} ${stat.colorClass}`}>
                  <Icon size={24} stroke={1.5} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Appointments */}
      <div className={styles.appointmentsPaper}>
        <div className={styles.appointmentsHeader}>
          <h3>Upcoming Appointments</h3>
          <button className={styles.viewAllButton} type="button">
            View All
          </button>
        </div>

        <div className={styles.appointmentsList}>
          {recentAppointments.map((appointment) => (
            <div key={appointment.id} className={styles.appointmentItem}>
              <div className={styles.appointmentLeft}>
                <div className={styles.avatar}>
                  <IconUsers size={20} />
                </div>
                <div>
                  <div className={styles.clientName}>{appointment.client}</div>
                  <div className={styles.appointmentDate}>
                    {appointment.date} at {appointment.time}
                  </div>
                </div>
              </div>
              <span
                className={`${styles.statusBadge} ${
                  appointment.status === 'confirmed'
                    ? styles.statusConfirmed
                    : styles.statusPending
                }`}
              >
                {appointment.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
