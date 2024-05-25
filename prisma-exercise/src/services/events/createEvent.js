import { v4 as uuidv4 } from "uuid";
import eventData from "../../data/events.json" assert { type: "json" };

const createEvent = (
  title,
  description,
  location,
  image,
  startTime,
  endTime,
  createdBy,
  categoryIds
) => {
  const newEvent = {
    id: uuidv4(),
    title,
    description,
    location,
    image,
    startTime,
    endTime,
    createdBy,
    categoryIds,
  };

  eventData.events.push(newEvent);

  return newEvent;
};

export default createEvent;
