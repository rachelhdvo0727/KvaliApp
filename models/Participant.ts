class Participant {
   constructor(
      public attendanceId: string,
      public userId: string,
      public status: string,
   ) {
      this.attendanceId = attendanceId;
      this.userId = userId;
      this.status = status;
   }
}

export default Participant;
