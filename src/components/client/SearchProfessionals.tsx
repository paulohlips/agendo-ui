import {
  IconFilter,
  IconMapPin,
  IconSearch,
  IconStar,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import styles from './SearchProfessionals.module.css';

interface Professional {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
  avatar: string;
  specialties: string[];
}

interface SearchProfessionalsProps {
  onSelectProfessional: (id: number) => void;
}

export function SearchProfessionals({
  onSelectProfessional,
}: SearchProfessionalsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const professionals: Professional[] = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      category: 'Physician',
      rating: 4.9,
      reviewCount: 127,
      location: 'San Francisco, CA',
      avatar: 'SS',
      specialties: ['Primary Care', 'Preventive Medicine'],
    },
    {
      id: 2,
      name: 'Michael Johnson',
      category: 'Therapist',
      rating: 4.8,
      reviewCount: 89,
      location: 'New York, NY',
      avatar: 'MJ',
      specialties: ['Cognitive Behavioral', 'Anxiety'],
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      category: 'Dentist',
      rating: 5.0,
      reviewCount: 203,
      location: 'Los Angeles, CA',
      avatar: 'EC',
      specialties: ['Cosmetic', 'General Dentistry'],
    },
    {
      id: 4,
      name: 'David Williams',
      category: 'Personal Trainer',
      rating: 4.7,
      reviewCount: 64,
      location: 'Chicago, IL',
      avatar: 'DW',
      specialties: ['Strength Training', 'Weight Loss'],
    },
    {
      id: 5,
      name: 'Dr. Lisa Anderson',
      category: 'Physician',
      rating: 4.9,
      reviewCount: 156,
      location: 'Boston, MA',
      avatar: 'LA',
      specialties: ['Internal Medicine', 'Geriatrics'],
    },
    {
      id: 6,
      name: 'James Martinez',
      category: 'Nutritionist',
      rating: 4.6,
      reviewCount: 72,
      location: 'Seattle, WA',
      avatar: 'JM',
      specialties: ['Sports Nutrition', 'Weight Management'],
    },
  ];

  const categories = [
    'all',
    'Physician',
    'Therapist',
    'Dentist',
    'Personal Trainer',
    'Nutritionist',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Find a Professional</h1>
          <p className={styles.subtitle}>
            Search and book appointments with top professionals
          </p>
        </div>

        <div className={styles.paper}>
          <div className={styles.filters}>
            <div className={styles.searchWrapper}>
              <div className={styles.inputWrapper}>
                <IconSearch size={16} className={styles.searchIcon} />
                <input
                  className={styles.searchInput}
                  placeholder="Search by name, category, or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <button className={styles.filterButton}>
              <IconFilter size={16} />
              Filters
            </button>
          </div>

          <div className={styles.categoryTabs}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`${styles.categoryTab} ${selectedCategory === category ? styles.active : ''}`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>

          <div className={styles.professionalsGrid}>
            {professionals.map((professional) => (
              <button
                key={professional.id}
                className={styles.professionalCard}
                onClick={() => onSelectProfessional(professional.id)}
                type="button"
              >
                <div className={styles.cardContent}>
                  <div className={styles.avatar}>{professional.avatar}</div>

                  <div className={styles.professionalInfo}>
                    <div className={styles.nameRatingRow}>
                      <h4 className={styles.professionalName}>
                        {professional.name}
                      </h4>
                      <div className={styles.rating}>
                        <IconStar
                          size={16}
                          style={{ fill: '#facc15', color: '#facc15' }}
                        />
                        <span className={styles.ratingValue}>
                          {professional.rating}
                        </span>
                        <span className={styles.ratingCount}>
                          ({professional.reviewCount})
                        </span>
                      </div>
                    </div>

                    <div className={styles.category}>
                      {professional.category}
                    </div>

                    <div className={styles.location}>
                      <IconMapPin size={16} />
                      <span>{professional.location}</span>
                    </div>

                    <div className={styles.specialties}>
                      {professional.specialties.map((specialty) => (
                        <span key={specialty} className={styles.specialty}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
