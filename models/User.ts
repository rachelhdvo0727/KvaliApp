class User {
   constructor(
      public id: string,
      public firstName: string,
      public lastName: string,
      public imageUrl: string,
      public email: string,
      public studyProgram: string,
      public chatToggle: any,
      public eventToggle: any,
   ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.imageUrl = imageUrl;
      this.email = email;
      this.studyProgram = studyProgram;
      this.chatToggle = chatToggle;
      this.eventToggle = eventToggle;
   }
}

export default User;
