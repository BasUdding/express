import eventsData from "../../data/events.json" assert { type: "json" };

const getEventById = (id) => {
  return eventsData.events.find((event) => event.id === id);
};

export default getEventById;
