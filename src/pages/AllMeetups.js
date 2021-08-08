import MeetupList from '../components/meetups/MeetupList';

const dummyData = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://image.freepik.com/free-photo/empty-floor-with-modern-skyline-buildings_1112-1066.jpg',
    address: 'Meetupstreet 5, 1234 Meetup City',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda nostrum numquam earum ut voluptatum minima magnam quas itaque! Id veritatis possimus magni autem eligendi sunt numquam earum? Nemo, alias?"
  }, {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://image.freepik.com/free-photo/modern-business-building-with-glass-wall-from-empty-floor_1127-3090.jpg',
    address: 'Meetupstreet 5, 1234 Meetup City',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda nostrum numquam earum ut voluptatum minima magnam quas itaque! Id veritatis possimus magni autem eligendi sunt numquam earum? Nemo, alias?"
  }, {
    id: 'm3',
    title: 'This is a third meetup',
    image: 'https://image.freepik.com/free-photo/signboard-with-mock-up-space-your-commercial-information_273609-25943.jpg',
    address: 'Meetupstreet 5, 1234 Meetup City',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda nostrum numquam earum ut voluptatum minima magnam quas itaque! Id veritatis possimus magni autem eligendi sunt numquam earum? Nemo, alias?"
  },
];

function AllMeetupsPage() {
  return (<section>
    <h1>All Meetups</h1>
    <MeetupList meetups={dummyData} />
  </section>
  );
}

export default AllMeetupsPage;