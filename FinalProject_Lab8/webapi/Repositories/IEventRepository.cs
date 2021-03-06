using System.Collections.Generic;
using Database.Entities;

public interface IEventRepository
{
    List<Event> GetAllEvents();

    Event GetEventById(long eventId);

    void AddEvent(Event event);

    void UpdateEvent(Event event);

    void DeleteEvent(long eventId);
}