import eventData from "../../data/events.json" assert { type: "json" };

const deleteEventById = (id) => {
  const eventIndex = eventData.events.findIndex((event) => event.id === id);

  if (eventIndex === -1) {
    return null;
  }

  const deletedevent = eventData.events.splice(eventIndex, 1);

  return deletedevent;
};

export default deleteEventById;
