import Participant from './Participant';

class Event {
   constructor(
      public id: string,
      public eventTitle: string,
      public eventDesc: string,
      public imageName: string,
      public address: string,
      public venue: string,
      public group: string,
      public attendances: Participant[],
      public dateTime: Object,
   ) {
      this.id = id;
      this.eventTitle = eventTitle;
      this.eventDesc = eventDesc;
      this.imageName = imageName;
      this.address = address;
      this.venue = venue;
      this.group = group;
      this.attendances = attendances;
      this.dateTime = dateTime;
   }
}

export default Event;
