import AvailableLists from '../components/Todos/AvailableLists';

const DUMMY_LISTS = [
    {
      id: "1",
      name: "Mail",
      status: "Active",
      items: "Check the mailbox for new mail",
      attachment: "",
    },
    {
      id: "2",
      name: "Pets",
      status: "Active",
      items: "Take the cat to the vet",
      attachment: "1681680426784-catPhoto.jpg",
    },
    {
      id: "3",
      name: "Laundry",
      status: "Complete",
      items: "Do the laundry",
      attachment: "",
    },
    {
      id: "4",
      name: "Book tickets",
      status: "Active",
      items: "Check flight tickets",
      attachment: "",
    },
];

function HomePage(props) {
  return <AvailableLists lists={props.lists} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      lists: DUMMY_LISTS
    },
    revalidate: 1
  }; 
}

export default HomePage;