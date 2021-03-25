import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

const AllEvents = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const onSearch = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };

  return (
    <>
      <EventsSearch onSearch={onSearch} />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEvents;
