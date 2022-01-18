import { SavedCourse } from 'lib/hooks/useSavedCourses';
import { render, screen } from '@testing-library/react';
import { ShareModalContent } from '../ShareModalContent';
import ShareTimetableModal from '../ShareTimetableModal';

const courses: SavedCourse[] = [
  { subject: 'CSC', code: '111', pid: '1', term: '202109', lecture: 'A01' },
  { subject: 'MATH', code: '100', pid: '2', term: '202109', lab: 'B01' },
  { subject: 'PHYS', code: '110', pid: '3', term: '202109', tutorial: 'T01' },
  { subject: 'ENGR', code: '130', pid: '4', term: '202109', lecture: 'A22', lab: 'B01' },
];

describe('ShareTimetableModal', () => {
  describe('when sending params in', () => {
    it('should display the correct term in readable format', () => {
      render(
        <ShareTimetableModal
          term={'202109'}
          loading={false}
          onClose={() => {}}
          isOpen={true}
          inSession_savedCourses={[]}
          timetable={{}}
        />
      );
      expect(screen.getByText('Share your Fall 2021 timeline')).toBeInTheDocument();
    });
  });
});